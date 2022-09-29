import React, { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { addUser, __getChatroom } from "../redux/modules/socket";
import { getCookie } from "../components/social/Cookie";
import styled from "styled-components";
import Main from './Main';

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
      <Shadow2></Shadow2>
      <Screen>
        <Display></Display>
      </Screen>
      <Joystick>
        <Stick></Stick>
        <Stick2></Stick2>
      </Joystick>
      <JoystickShadow></JoystickShadow>
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

</AcadeMachin>
    </>
    // <ChatContainer>
    //   <MessageWrapper>
    //     <div>
    //       {chat &&
    //         chat.map((list: any, index: number) => (
    //           <MessageListContainer key={index}>
    //             {list.message}
    //           </MessageListContainer>
    //         ))}
    //     </div>
    //   </MessageWrapper>
    //   <GameContainer>
    //     <GameWrapper>
    //       <div className="left-triangle"></div>
    //       <button className="push flat"></button>
    //       <button className="push skeuo"></button>
    //     </GameWrapper>
    //   </GameContainer>
    //   <MessageForm>
    //     <textarea onKeyUp={handleEnterPress} ref={message} />
    //     <ButtonContainer>
    //       <button onClick={handleEnterPress}>전송</button>
    //     </ButtonContainer>
    //   </MessageForm>
    // </ChatContainer>
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
`

const Shadow =styled.div`
      height: 85%;
    width: 65%;
    position: absolute;
    top: 2%;
    left: 18%;
    background: #4b5b61;
    box-shadow: 0 0 60px #4b5b61;
    z-index: -1;
`

const Top =styled.div`
height: 15%;
    width: 70%;
    position: absolute;
    top: 0%;
    left: 15%;
    background: white;
    border: 5px solid #4c4c4c;
    z-index: 3;
`
const TopLeft =styled.div`
    height: 15.5%;
    width: 5%;
    position: absolute;
    top: -0.5%;
    background: white;
    border: 5px solid #4c4c4c;
    content: " ";
    left: 11%;
    z-index: 3;
`
const TopRight =styled.div`
 height: 15.5%;
    width: 5%;
    position: absolute;
    top: -0.5%;
    background: white;
    border: 5px solid #4c4c4c;
    content: " ";
    right: 11%;
    z-index: 3;
`
const Script =styled.div`
    height: 100%;
    width: 10%;
    position: absolute;
    top: 0%;
    left: 45%;
    background: #68A691;
`
const ScriptLeft =styled.div`
      height: 100%;
    width: 10%;
    position: absolute;
    top: 0%;
    background: #BFD3C1;
    left: 35%;
`
const ScriptRight = styled.div`
      height: 100%;
    width: 10%;
    position: absolute;
    top: 0%;
    background: #07BEB8;
    left: 55%;
`
const ScreenContainer =styled.div`
  height: 50%;
    width: 62%;
    position: absolute;
    top: 15%;
    left: 19%;
    background: #4b5b61;
    border: 5px solid #4c4c4c;
    z-index: 1;
`

const ScreenContainerLeft = styled.div`
       height: 50%;
    width: 4%;
    position: absolute;
    top: 15%;
    background: white;
    content: " ";
    border: 5px solid #4c4c4c;
    left: 16%;
    z-index: 2;
`

const ScreenContainerRight = styled.div`
    height: 50%;
    width: 4%;
    position: absolute;
    top: 15%;
    background: white;
    content: " ";
    border: 5px solid #4c4c4c;
    right: 16%;
    z-index: 2;
`
const Shadow2 =styled.div`
      height: 8%;
    width: 110%;
    position: absolute;
    top: 0%;
    left: -5%;
    background: rgba(0, 0, 0, 0.1);
    z-index: 4;
`
const Screen = styled.div`
      height: 70%;
    width: 75%;
    position: absolute;
    top: 15%;
    left: 12%;
    background: #313332;
    border: 5px solid #4c4c4c;
    border-radius: 90px 93px 93px 93px/15px 15px 15px 15px;
    overflow: hidden;
    text-align: center;
`
const Display =styled.div`
      position: absolute;
    width: 100%;
    height: 200%;
    background-image: repeating-linear-gradient(0deg, #313332, #313332 15px, #4a4d4c 15px, #4a4d4c 16px);
    animation: translate 1s infinite;

`
const Joystick =styled.div`
    height: 11%;
    width: 9%;
    background: #0F90C9;
    position: absolute;
    top: 87%;
    left: 17%;
    border-radius: 50%;
    border: 5px solid #4c4c4c;
    z-index: 3;
`
const JoystickShadow= styled.div`
    height: 7%;
    width: 4%;
    background: #0d78a8;
    position: absolute;
    top: 89%;
    left: 21%;
    border-radius: 50%;
    z-index: 3;
`
const Stick =styled.div`
      height: 200%;
    width: 40%;
    position: absolute;
    top: 100%;
    left: 30%;
    background: #4c4c4c;
    content: "";
    z-index:1;
`
const Stick2 =styled.div`
    height: 140%;
    width: 40%;
    transform: rotate(90deg);
    position: absolute;
    top: 210%;
    left: 30%;
    background: #4c4c4c;
    content: "";
`
const Board =styled.div`

      height: 20%;
    width: 72%;
    position: absolute;
    top: 60%;
    left: 13.2%;
    background: #4B5B61;
    transform: rotateX(70deg);
`
const BoardLeft = styled.div`
    height: 20%;
    width: 4%;
    position: absolute;
    top: 60.5%;
    left: 10.5%;
    border: 5px solid #4c4c4c;
    background: white;
    transform: rotateX(70deg);
    z-index: 2;
`
const BoardRight = styled.div`
       height: 20%;
      width: 4%;
    position: absolute;
    top: 60.5%;
    right: 10.5%;
    border: 5px solid #4c4c4c;
    background: white;
    transform: rotateX(70deg);
    z-index: 2;
`

const BtnA =styled.div`
    background: #BFD3C1;
    left: 40%;  
    height: 25%;
    width: 10%;
    position: absolute;
    top: 40%;
    left: 30%;
    border-radius: 50%;
    border: 5px solid #4c4c4c;
    left: 40%;
`
const BtnB =styled.div`
    background: #68A691;
    left: 40%;  
    height: 25%;
    width: 10%;
    position: absolute;
    top: 40%;
    left: 55%;
    border-radius: 50%;
    border: 5px solid #4c4c4c;
    left: 55%;
`
const BtnC =styled.div`
    background: #07BEB8;
    left: 40%;  
    height: 25%;
    width: 10%;
    position: absolute;
    top: 40%;
    left: 55%;
    border-radius: 50%;
    border: 5px solid #4c4c4c;
    left: 70%;
`

const Bottom = styled.div`
      height: 12%;
    width: 86%;
    position: absolute;
    top: 78%;
    left: 7%;
    background: white;
    border: 5px solid #4c4c4c;
    z-index:5;
`

const BottomLeft =styled.div`
    height: 116%;
    width: 6%;
    position: absolute;
    background: white;
    content: " ";
    border: 5px solid #4c4c4c;
    left: -6%;
    z-index: 2;
    top:-4%;
`
const  BottomRight = styled.div`
      height: 116%;
      width: 6%;
    position: absolute;
    background: white;
    content: " ";
    border: 5px solid #4c4c4c;
    right: -6%;
    z-index: 2;
    top:-4%;
`
const BottomScript = styled.div`
    height: 100%;
    width: 10%;
    position: absolute;
    top: 0%;
    left: 45%;
    background: #68A691;
`
const BottomScriptRight =styled.div`
      height: 100%;
    width: 10%;
    position: absolute;
    top: 0%;
    left: 35%;
    background: #BFD3C1;
`
const BottomScriptLeft =styled.div`
      height: 100%;
    width: 10%;
    position: absolute;
    top: 0%;
    left: 55%;
    background: #07BEB8;
`

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
  width: 100%;
  border: 1px solid black;
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
  width: 100%;
  height: 40%;
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
