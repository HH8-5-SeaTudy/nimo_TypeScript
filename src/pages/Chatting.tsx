import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { addUser } from "../redux/modules/socket";
import { getCookie } from "../components/social/Cookie";
import styled, { keyframes } from "styled-components";
import { __getUserProfile } from "../redux/modules/userData";
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';

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
  const chatUser = useAppSelector((state) => state.socket.chat);
  const roomId = chatUser.find((roomId) => roomId.roomId);
  console.log(roomId);
  const userNickname = useAppSelector(
    (state) => state.userData.userProfile.nickname
  );

  const headers = {
    Authorization: token,
  };

  useEffect(() => {
    dispatch(addUser);
  }, []);

  //렌더되면 소켓 연결실행
  useEffect(() => {
    if (token !== undefined) {
      onConneted();
      dispatch(__getUserProfile());
    }
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
          {chatUser &&
            chatUser.map((list: any, index: number) => {
              if (list.type === "TALK") {
                
                if (list.sender === userNickname) {
                  return (
                    <MessageListContainer key={index}>
                      <MySenderMessageContainer className="chat-thread">
                        <Message>{list.message}</Message>
                        <SenderContainer>
                          <SenderProfile src={list.defaultFish} />
                          <Sender>{list.sender}</Sender>
                        </SenderContainer>
                      </MySenderMessageContainer>
                    </MessageListContainer>
                  );
                }
                return (
                  <MessageListContainer key={index}>
                    <SenderMessageContainer>
                      <Sender>{list.sender}</Sender>
                      <SenderContainer>
                        <SenderProfile
                          // src={list?.memberChatResDto?.defaultFish?  list.memberChatResDto.defaultFish : null}
                        />
                        <Message>{list.message}</Message>
                      </SenderContainer>
                    </SenderMessageContainer>
                  </MessageListContainer>
                );
              } else {
                return (
                  <NoticeContainer key={index}>
                    <EnterContainer>
                      <Sender>{list.sender}:</Sender>
                      <Message>{list.message}</Message>
                    </EnterContainer>
                  </NoticeContainer>
                );
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
          <CoinDiv>
            <CoinWrapper></CoinWrapper>
          </CoinDiv>
          <SendButton onClick={handleClick}>SEND</SendButton>
        </ButtonContainer>
      </MessageForm>
    </AcadeMachin>
  );
}

const AcadeMachin = styled.div`
  height: 100%;
  width: 95%;
  position: relative;
  margin-left: 5%;
  perspective: 35em;
  display: block;
  overflow: hidden;
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

const Screen = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
  padding: 0 10px;
  background: #313332;
  border-radius: 90px 93px 93px 93px/15px 15px 15px 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(25, 147, 147, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(25, 147, 147, 0.2);
  }
`;

const Joystick = styled.div`
  height: 13%;
  width: 6%;
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
  width: 90%;
  position: absolute;
  top: 45%;
  left: 6%;
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

const showChatOdd = keyframes`
  0% {
    margin-left: -480px;
  }
  100% {
    margin-left: 0;
  }
`;

const showChatEven = keyframes`
  0% {
    margin-left: -480px;
  }
  100% {
    margin-left: 0;
  }`;

const MessageListContainer = styled.div`
  width: 100%;
  .chat-thread {
    list-style: none;
    overflow-x: hidden;
  }

  .chat-thread li {
    position: relative;
    clear: both;
    display: inline-block;
    padding: 10px;
    margin: 0 0 20px 0;
    font: 16px/20px "Noto Sans", sans-serif;
    border-radius: 10px;
    background-color: rgba(25, 147, 147, 0.2);
  }

  /* Chat - Speech Bubble Arrow */
  .chat-thread li:after {
    position: absolute;
    top: 15px;
    content: "";
    width: 0;
    height: 0;
    border-top: 15px solid rgba(25, 147, 147, 0.2);
  }

  .chat-thread li:nth-child(odd) {
    animation: ${showChatOdd} 0.15s 1 ease-in;
    -moz-animation: ${showChatOdd} 0.15s 1 ease-in;
    -webkit-animation: ${showChatOdd} 0.15s 1 ease-in;
    float: right;
    margin-right: 5px;
    color: #0ad5c1;
  }

  .chat-thread li:nth-child(odd):after {
    border-right: 15px solid transparent;
    right: -15px;
  }

  .chat-thread li:nth-child(even) {
    animation: ${showChatEven} 0.15s 1 ease-in;
    -moz-animation: ${showChatEven} 0.15s 1 ease-in;
    -webkit-animation: ${showChatEven} 0.15s 1 ease-in;
    float: left;
    margin-left: 5px;
    color: #0ec879;
  }

  .chat-window {
    position: fixed;
    bottom: 18px;
  }

  .chat-window-message {
    width: 100%;
    height: 48px;
    font: 32px/48px "Noto Sans", sans-serif;
    background: none;
    color: #0ad5c1;
    border: 0;
    border-bottom: 1px solid rgba(25, 147, 147, 0.2);
    outline: none;
  }
`;

const NoticeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  padding: 5px;
  margin-bottom: 15px;
`;

const EnterContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MySenderMessageContainer = styled.ul`
  width: 100%;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
`;

const SenderMessageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SenderProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid white;
  padding: 5px;
`;

const Sender = styled.span`
  font-size: 1em;
  margin-left: 10px;
  margin-right: 10px;
`;

const Message = styled.li`
  font-size: 1.2em;
  list-style: none;
`;

const MessageForm = styled.form`
  display: flex;
  width: 86%;
  height: 28%;
  padding: 20px 10px;
  position: absolute;
  left: 7%;
  bottom: 0%;
  resize: none;
  border: 1px solid black;
  background: #4b5b61;
  textarea {
    padding: 10px;
    border: 3px solid black;
    background-color: ${({ theme }) => theme.colors.white};
    resize: none;
    width: 80%;
    border-radius: 10px;
    font-size: 1.5em;
    &:focus {
      outline: none;
    }
  }
`;

const CoinDiv = styled.div`
  width: 50px;
  height: 5vh;
  border: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 5px;
`;

const CoinWrapper = styled.div`
  width: 5px;
  height: 100%;
  border-radius: 10px;
  border: 2px solid black;
`;

const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 3;
  margin-left: 10px;
  align-items: center;
  justify-content: space-around;
  border: 2px solid black;
  border-radius: 10px;
`;

const SendButton = styled.button`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 0 5px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "DungGeunMo";
  font-size: 16px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);
  border: 1px solid black;
`;

export default Chatting;
