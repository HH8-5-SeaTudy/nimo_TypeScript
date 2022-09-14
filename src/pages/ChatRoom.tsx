import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import styled from "styled-components";
import { RootState } from "../redux/config/configStore";
import { addMessage } from "../redux/modules/socket";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token: string = process.env.REACT_APP_TOKEN as string;

function ChatRoom() {
  const navigate = useNavigate();

  const location = useLocation();

  const roomId1 = "UGFjaWZpY09jZWFu";
  const roomId2 = "QXRsYW50aWNPY2Vhbg==";
  const roomId3 = "SW5kaWFuT2NlYW4=";
  const roomId4 = "QXJjdGljT2NlYW4=";
  const roomId5 = "QW50YXJjdGljT2NlYW4=";

  const { id }: any = location.state;
  console.log(id);

  //기본설정---헤더, 토큰, 주소설정
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const headers = {
    Authorization: token,
  };
  const socket = new SockJS(`${BASE_URL}/api/v1/chat/connections`);
  const client = Stomp.over(socket);

  //렌더되면 소켓 연결실행
  useEffect(() => {
    onConneted();
    return () => {
      onConneted();
    };
  }, []);

  const handleEnterPress = (e: any) => {
    // if (message.trim() === "") {
    //   e.preventDefault();
    // }
    if (e.code === "Enter" && e.shiftKey == false) {
      sendMessage();
    }
  };

  //연결&구독
  function onConneted() {
    try {
      client.connect(headers, () => {
        client.subscribe(
          `/sub/chat/room/${id}`,
          (data) => {
            const newMessage = JSON.parse(data.body);
            dispatch(addMessage(newMessage));
          },
          headers
        );
        client.send(
          `/pub/chat/enter`,
          headers,
          JSON.stringify({
            roomId: id,
          })
        );
      });
    } catch (error) {}
  }

  //메시지 보내기
  const sendMessage = () => {
    client.send(
      `/pub/chat/message`,
      headers,
      JSON.stringify({
        roomId: id,
        message: message,
      })
    );
    setMessage("");
  };

  const onChange = (e: any) => {
    setMessage(e.target.value);
  };

  return (
    <MessageContainer>
      <button
        onClick={() => {
          window.location.reload();
          navigate("/chat", {
            state: {
              id: roomId1,
            },
          });
        }}
      >
        서버3
      </button>
      <button
        onClick={() => {
          window.location.reload();
          navigate("/chat", {
            state: {
              id: roomId2,
            },
          });
        }}
      >
        서버3
      </button>
      <button
        onClick={() => {
          window.location.reload();
          navigate("/chat", {
            state: {
              id: roomId3,
            },
          });
        }}
      >
        서버3
      </button>
      <button
        onClick={() => {
          window.location.reload();
          navigate("/chat", {
            state: {
              id: roomId4,
            },
          });
        }}
      >
        서버3
      </button>
      <button
        onClick={() => {
          window.location.reload();
          navigate("/chat", {
            state: {
              id: roomId5,
            },
          });
        }}
      >
        서버3
      </button>
      <MessageFormContainer>
        {/* 왼쪽 section */}
        <SeaContainer></SeaContainer>

        {/* 오른쪽 section */}
        <ChatContainer>
          <MessageWrapper>{/* 채팅보이는 곳 */}</MessageWrapper>
          <MessageForm>
            <textarea
              onKeyDown={handleEnterPress}
              value={message}
              onChange={onChange}
            />
            <ButtonContainer>
              <button onClick={handleEnterPress}>전송</button>
            </ButtonContainer>
          </MessageForm>
        </ChatContainer>
      </MessageFormContainer>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MessageWrapper = styled.div`
  flex: 4;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  padding: 10px;
  flex-direction: column-reverse;
  background-color: #b2c7d9;
`;

const MessageFormContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
`;

const SeaContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 2.5;
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
  flex: 1;
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

export default ChatRoom;
