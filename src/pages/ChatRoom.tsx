import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import styled from "styled-components";
import { RootState } from "../redux/config/configStore";
import { addMessage } from "../redux/modules/socket";

const BASE_URL = "http://43.200.115.252";
function ChatRoom() {
  //기본설정---헤더, 토큰, 주소설정
  const dispatch = useDispatch();
  const [message, setMessage] = useState("d");
  const headers = {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJobGltOTAyMkBnbWFpbC5jb20iLCJpc3MiOiJoYW5naGFlNV9zZWF0dWR5IiwiZXhwIjoxNjYyNjA2MjEwfQ.IHaY6U-3-UQJzwggQtCzVVv6Dh45WH8VNm5fZShQpzo",
  };
  const socket = new SockJS(`${BASE_URL}/api/v1/chat/connections`);
  const client = Stomp.over(socket);

  const chatList = useSelector((state: RootState) => state);

  console.log(chatList);

  const roomId = useParams();

  //렌더되면 소켓 연결실행
  useEffect(() => {
    onConneted();
    return () => {
      onConneted();
    };
  }, []);

  //axios로 데이터 불러오는 용

  const handleEnterPress = (e: any) => {
    if (message.trim() === "") {
      e.preventDefault();
    }
    if (e.keyCode === 13 && e.shiftKey == false) {
      sendMessage();
    }
  };

  //연결&구독
  function onConneted() {
    try {
      client.connect(headers, () => {
        client.subscribe(
          `/sub/chat/room/4e66fa90-e834-4b51-b17d-c222979cc04c`,
          (data) => {
            const newMessage = JSON.parse(data.body);
            dispatch(addMessage(newMessage));
          },
          headers
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
        roomId: "4e66fa90-e834-4b51-b17d-c222979cc04c",
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
      <MessageFormContainer>
        <div
          style={{ width: "100%", height: "100%", border: "2px solid black" }}
        >
          {message}
        </div>
        <MessageForm>
          <textarea
            value={message}
            onChange={onChange}
            onKeyDown={handleEnterPress}
          />
          <ButtonContainer>
            <button onClick={sendMessage}>전송</button>
          </ButtonContainer>
        </MessageForm>
      </MessageFormContainer>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  width: 100%;
  height: 100%;
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
  flex: 1;
  background-color: white;
  border: 1px solid black;
  margin-top: 200px;
`;

const MessageForm = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  textarea {
    resize: none;
    width: 100%;
    height: 100%;
    border: none;
  }
  textarea:focus {
    outline: none;
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
