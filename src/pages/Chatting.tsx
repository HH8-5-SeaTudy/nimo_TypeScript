import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { addUser, __getChatroom } from "../redux/modules/socket";
import { getCookie } from "../components/social/Cookie";
import styled from "styled-components";
import { __getUserProfile } from "../redux/modules/userData";
import Grid from "../elements/Grid";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token: string = getCookie("token") as string;

const socket = new SockJS(`${BASE_URL}/api/v1/chat/connections`);
const client = Stomp.over(socket);

function Chatting() {
  const location = useLocation();

  const { id }: any = location.state;
  //기본설정---헤더, 토큰, 주소설정
  const dispatch = useAppDispatch();
  const message = useRef<any>(null);
  const chat = useAppSelector((state) => state.socket.chat);
  const userNickname = useAppSelector(
    (state) => state.userData.userProfile.nickname
  );

  console.log(chat);

  const headers = {
    Authorization: token,
  };

  //렌더되면 소켓 연결실행
  useEffect(() => {
    onConneted();
    dispatch(__getUserProfile());
    return () => {
      disConneted();
    };
  }, []);

  const handleEnterPress = (e: any) => {
    if (e.code === "Enter" && e.shiftKey === false) {
      sendMessage();
    }
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    sendMessage();
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
    } catch (error) {}
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
    <>
      <AcadeMachin>
        <Shadow></Shadow>
        <Top>
          <Script></Script>
          <ScriptLeft></ScriptLeft>
          <ScriptRight></ScriptRight>
        </Top>
        <TopLeft></TopLeft>
        <TopRight></TopRight>
        <ScreenContainer>
          <Joystick>
            <Stick></Stick>
            <Stick2></Stick2>
          </Joystick>
          <Screen>
            {chat &&
              chat.map((list: any, index: number) => {
                if (list.type === null) {
                  <>{list.message}</>;
                  if (list.sender === userNickname) {
                    return (
                      <MessageListContainer key={index}>
                        <MySenderContainer>
                          <Message>{list.message}</Message>
                          <Sender>:{list.sender}</Sender>
                        </MySenderContainer>
                      </MessageListContainer>
                    );
                  }
                  return (
                    <MessageListContainer key={index}>
                      <SenderContainer>
                        <Sender>{list.sender}:</Sender>
                        <Message>{list.message}</Message>
                      </SenderContainer>
                    </MessageListContainer>
                  );
                } else {
                  <>
                    <Grid width="100%" height="100%">
                      asdasd
                    </Grid>
                  </>;
                }
              })}
          </Screen>
        </ScreenContainer>
        <ScreenContainerLeft></ScreenContainerLeft>
        <ScreenContainerRight></ScreenContainerRight>
        <Board>
          <BtnA></BtnA>
          <BtnB></BtnB>
          <BtnC></BtnC>
        </Board>

        <BoardLeft></BoardLeft>
        <BoardRight></BoardRight>
        <Bottom>
          <BottomScript></BottomScript>
          <BottomScriptRight></BottomScriptRight>
          <BottomScriptLeft></BottomScriptLeft>
          <BottomLeft></BottomLeft>
          <BottomRight></BottomRight>
        </Bottom>
        <MessageForm>
          <textarea onKeyUp={handleEnterPress} ref={message} />
          <ButtonContainer>
            <button onClick={handleClick}>전송</button>
          </ButtonContainer>
        </MessageForm>
      </AcadeMachin>
    </>
  );
}

const AcadeMachin = styled.div`
  border: solid red 1px;
  height: 100%;
  width: 100%;
  position: relative;
  margin: 0 auto;
  perspective: 35em;
  display: block;
  overflow: hidden;
  background-color: #0095ffac;
`;

const Shadow = styled.div`
  height: 45%;
  width: 65%;
  position: absolute;
  top: 20%;
  left: 18%;
  background: #4b5b61;
  box-shadow: 0 0 60px #4b5b61;
  z-index: -1;
`;

const Top = styled.div`
  height: 5%;
  width: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  background: white;
  border: 5px solid #4c4c4c;
  z-index: 3;
`;
const TopLeft = styled.div`
  height: 10.5%;
  width: 5%;
  position: absolute;
  top: -0.5%;
  background: white;
  border: 5px solid #4c4c4c;
  content: " ";
  left: 0%;
  z-index: 3;
`;
const TopRight = styled.div`
  height: 10.5%;
  width: 5%;
  position: absolute;
  top: -0.5%;
  background: white;
  border: 5px solid #4c4c4c;
  content: " ";
  right: 0%;
  z-index: 3;
`;
const Script = styled.div`
  height: 100%;
  width: 10%;
  position: absolute;
  top: 0%;
  left: 45%;
  background: #68a691;
`;
const ScriptLeft = styled.div`
  height: 100%;
  width: 10%;
  position: absolute;
  top: 0%;
  background: #bfd3c1;
  left: 35%;
`;
const ScriptRight = styled.div`
  height: 100%;
  width: 10%;
  position: absolute;
  top: 0%;
  background: #07beb8;
  left: 55%;
`;
const ScreenContainer = styled.div`
  height: 45%;
  width: 90%;
  position: absolute;
  top: 4%;
  left: 5%;
  background: #4b5b61;
  border: 5px solid #4c4c4c;
  z-index: 1;
`;

const ScreenContainerLeft = styled.div`
  height: 50%;
  width: 4%;
  position: absolute;
  top: 0%;
  background: white;
  content: " ";
  border: 5px solid #4c4c4c;
  left: 5%;
  z-index: 2;
`;

const ScreenContainerRight = styled.div`
  height: 50%;
  width: 4%;
  position: absolute;
  top: 0%;
  background: white;
  content: " ";
  border: 5px solid #4c4c4c;
  right: 5%;
  z-index: 2;
`;
const Shadow2 = styled.div`
  height: 8%;
  width: 110%;
  position: absolute;
  top: 0%;
  left: -5%;
  background: rgba(0, 0, 0, 0.1);
  z-index: 4;
`;
const Screen = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  padding: 30px;
  overflow-y: scroll;
  background: #313332;
  border-radius: 90px 93px 93px 93px/15px 15px 15px 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: white;
    height: 5px;
  }
`;

const Display = styled.div`
  position: absolute;
  width: 100%;
  height: 200%;
  background-image: repeating-linear-gradient(
    0deg,
    #313332,
    #313332 15px,
    #4a4d4c 15px,
    #4a4d4c 16px
  );
  animation: translate 1s infinite;
`;
const Joystick = styled.div`
  height: 11%;
  width: 9%;
  background: #0f90c9;
  position: absolute;
  top: 100%;
  left: 7%;
  border-radius: 50%;
  border: 5px solid #4c4c4c;
  z-index: 3;
`;

const Stick = styled.div`
  height: 200%;
  width: 40%;
  position: absolute;
  top: 100%;
  left: 30%;
  background: #4c4c4c;
  content: "";
  z-index: 1;
`;

const Stick2 = styled.div`
  height: 140%;
  width: 40%;
  transform: rotate(90deg);
  position: absolute;
  top: 210%;
  left: 30%;
  background: #4c4c4c;
  content: "";
`;

const Board = styled.div`
  height: 20%;
  width: 72%;
  position: absolute;
  top: 45%;
  left: 13.2%;
  border: 2px solid black;
  z-index: 0;
  background: #4b5b61;
  transform: rotateX(20deg);
`;

const BoardLeft = styled.div`
  height: 20%;
  width: 4%;
  position: absolute;
  top: 45%;
  left: 3.5%;
  border: 5px solid #4c4c4c;
  background: white;
  transform: rotateX(15deg);
  z-index: 2;
`;
const BoardRight = styled.div`
  height: 20%;
  width: 4%;
  position: absolute;
  top: 45%;
  right: 3.5%;
  border: 5px solid #4c4c4c;
  background: white;
  transform: rotateX(15deg);
  z-index: 2;
`;

const BtnA = styled.div`
  background: #bfd3c1;
  left: 40%;
  height: 25%;
  width: 10%;
  position: absolute;
  top: 40%;
  left: 30%;
  border-radius: 50%;
  border: 5px solid #4c4c4c;
  left: 40%;
`;
const BtnB = styled.div`
  background: #68a691;
  left: 40%;
  height: 25%;
  width: 10%;
  position: absolute;
  top: 40%;
  left: 55%;
  border-radius: 50%;
  border: 5px solid #4c4c4c;
  left: 55%;
`;
const BtnC = styled.div`
  background: #07beb8;
  left: 40%;
  height: 25%;
  width: 10%;
  position: absolute;
  top: 40%;
  left: 55%;
  border-radius: 50%;
  border: 5px solid #4c4c4c;
  left: 70%;
`;

const Bottom = styled.div`
  height: 12%;
  width: 86%;
  position: absolute;
  top: 60%;
  left: 7%;
  background: white;
  border: 5px solid #4c4c4c;
  z-index: 5;
`;

const BottomLeft = styled.div`
  height: 400%;
  width: 6%;
  position: absolute;
  background: white;
  content: " ";
  border: 5px solid #4c4c4c;
  left: -6%;
  z-index: 2;
  top: -4%;
`;
const BottomRight = styled.div`
  height: 400%;
  width: 6%;
  position: absolute;
  background: white;
  content: " ";
  border: 5px solid #4c4c4c;
  right: -6%;
  z-index: 2;
  top: -4%;
`;
const BottomScript = styled.div`
  height: 100%;
  width: 10%;
  position: absolute;
  top: 0%;
  left: 45%;
  background: #68a691;
`;
const BottomScriptRight = styled.div`
  height: 100%;
  width: 10%;
  position: absolute;
  top: 0%;
  left: 35%;
  background: #bfd3c1;
`;
const BottomScriptLeft = styled.div`
  height: 100%;
  width: 10%;
  position: absolute;
  top: 0%;
  left: 55%;
  background: #07beb8;
`;

///

const MessageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  /* padding: 20px 10px; */
  /* flex: 4; */
  padding: 0 10px;
  flex-direction: column-reverse;
  border: 1px solid yellow;
  div {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column-reverse;
    background-color: #b2c7d9;
    border: 1px solid yellow;
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: #cccccc;
    }
  }
`;

const GameContainer = styled.div`
  width: 100%;
  height: 40vh;
  border: 5px solid black;
  background-color: aliceblue;
  display: flex;
  padding: 5px;
  transform: perspective(500px) rotateX(10deg);
`;

const GameWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  position: relative;
  .left-triangle {
    width: 0;
    height: 0;
    position: absolute;
    bottom: 0;
    border-bottom: 4.5vw solid red;
    border-top: 4.5vw solid transparent;
    border-left: 4.5vw solid red;
    border-right: 4.5vw solid transparent;
  }
  .push {
    position: relative;
    display: inline-block;
    width: $push-size;
    height: $push-size;
    border: 0;
    margin: 1em;
    outline: none;
    background-color: $push-color;
    border-radius: 50%;
    cursor: pointer;
    transition: box-shadow 200ms;
  }
`;

const MessageListContainer = styled.span`
  margin-top: 10px;
  width: 100%;
`;

const EnterContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 5px solid white;
  position: absolute;
  z-index: 59;
`;

const MySenderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SenderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Sender = styled.span`
  font-size: 1.2em;
  margin-left: 10px;
  margin-right: 10px;
`;

const Message = styled.span`
  font-size: 1.2em;
`;

const ChatContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1.5;
  flex-direction: column;
`;

const MessageForm = styled.form`
  display: flex;
  padding: 10px;
  width: 85%;
  height: 28%;
  position: absolute;
  left: 7%;
  bottom: 0%;
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
