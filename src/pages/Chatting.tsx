import React, { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { addUser, __getChatroom } from "../redux/modules/socket";
import { getCookie } from "../components/social/Cookie";
import styled from "styled-components";

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const token: string = process.env.REACT_APP_TOKEN as string;
const token: string = getCookie("token") as string;

const socket = new SockJS(`${BASE_URL}/api/v1/chat/connections`);
const client = Stomp.over(socket);

function Chatting() {
  const location = useLocation();

  const { id }: any = location.state;
  //기본설정---헤더, 토큰, 주소설정
  const dispatch = useAppDispatch();
  const message = useRef<any>(null);
  // const [message, setMessage] = useState("");
  const chat = useAppSelector((state) => state.socket.chat);

  const headers = {
    Authorization: token,
  };

  //렌더되면 소켓 연결실행
  useLayoutEffect(() => {
    onConneted();
    return () => {
      disConneted();
    };
  }, []);

  const handleEnterPress = (e: any) => {
    if (e.code === "Enter" && e.shiftKey === false) {
      sendMessage();
    }
  };

  //연결&구독
  const onConneted = () => {
    try {
      client.connect(headers, () => {
        client.subscribe(
          `/sub/chat/room/${id}`,
          (data) => {
            const user = JSON.parse(data.body);
            dispatch(addUser(user));
          },
          headers
        );
      });
    } catch (error) {}
  };

  //메시지 보내기
  const sendMessage = () => {
    if (message.current.value.trim() === "") {
      return null;
    }
    const res = JSON.stringify({
      roomId: id,
      message: message.current.value,
    });
    waitForConnection(client, function () {
      client.send(`/pub/chat/message`, headers, res);
    });

    // setMessage("");
    message.current.value = "";
  };

  // 연결해제, 구독해제
  function disConneted() {
    try {
      client.disconnect(
        () => {
          client.unsubscribe("sub-0");
        },
        { token: token }
      );
    } catch (error) {
      console.log(error);
    }
  }

  function waitForConnection(client: any, callback: any) {
    setTimeout(function () {
      if (client.ws.readyState === 1) {
        callback();
      } else {
        waitForConnection(client, callback);
      }
    }, 1);
  }
  return (
    <ChatContainer>
      <MessageWrapper>
        {chat &&
          chat.map((list: any, index: number) => (
            <MessageListContainer key={index}>
              {list.message}
            </MessageListContainer>
          ))}
      </MessageWrapper>
      <MessageForm>
        <textarea onKeyUp={handleEnterPress} ref={message} />
        <ButtonContainer>
          <button onClick={handleEnterPress}>전송</button>
        </ButtonContainer>
      </MessageForm>
    </ChatContainer>
  );
}

const MessageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  /* padding: 20px 10px; */
  /* flex: 4; */
  flex-direction: column-reverse;
  background-color: #b2c7d9;
`;

const MessageListContainer = styled.span`
  width: 100%;
  border: 1px solid black;
`;

const ChatContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1.5;
  flex-direction: column;
  border: 2px solid black;
`;

const MessageForm = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  /* flex: 1; */
  border: 4px solid yellow;
  resize: none;
  textarea {
    resize: none;
    width: 100%;
    border: none;
    font-size: 1.5em;
    &:focus {
      outline: none;
    }
  }
`;

const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 3;
  padding-top: 20px;
  justify-content: center;
  padding-right: 10px;
  button {
    width: 50px;
    height: 30px;
  }
`;

export default Chatting;
