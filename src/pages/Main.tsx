import React from 'react';
import styled,{keyframes} from 'styled-components';
import CalendarVer2 from '../components/calendar/CalendarVer2';


const Main = () => {
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
  );
};

export default Main;

const AcadeMachin = styled.div`
border: solid red 1px;
    height: 400px;
    width: 400px;
    position: relative;
    margin: 35px auto;
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
    top: 91%;
    left: 17%;
    border-radius: 50%;
    border: 5px solid #4c4c4c;
    z-index: 3;
`
const JoystickShadow= styled.div`
    height: 5.5%;
    width: 3.5%;
    background: #0d78a8;
    position: absolute;
    top: 94%;
    left: 20.7%;
    border-radius: 50%;
    z-index: 3;
`
const Stick =styled.div`
      height: 200%;
    width: 40%;
    position: absolute;
    top: 105%;
    left: 30%;
    background: #4c4c4c;
    content: "";
`
const Stick2 =styled.div`
    height: 180%;
    width: 60%;
    transform: rotate(90deg);
    position: absolute;
    top: 240%;
    left: 20%;
    background: #4c4c4c;
    content: "";
`
const Board =styled.div`

      height: 20%;
    width: 66%;
    position: absolute;
    top: 60%;
    left: 17.2%;
    background: #4B5B61;
    transform: rotateX(70deg);
`
const BoardLeft = styled.div`
      height: 22%;
      width: 4%;
    position: absolute;
    top: 58.5%;
    left: 13.7%;
    border: 5px solid #4c4c4c;
    background: white;
    transform: rotateX(70deg);
    z-index: 2;
`
const BoardRight = styled.div`
       height: 22%;
      width: 4%;
    position: absolute;
    top: 58.5%;
    right: 13.7%;
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
      height: 13%;
    width: 73%;
    position: absolute;
    top: 74%;
    left: 13.5%;
    background: white;
    border: 5px solid #4c4c4c;
`

const BottomLeft =styled.div`
    height: 116%;
    width: 5%;
    position: absolute;
    background: white;
    content: " ";
    border: 5px solid #4c4c4c;
    left: -5.5%;
    z-index: 2;
    top:-2%;
`
const  BottomRight = styled.div`
      height: 116%;
    width: 5%;
    position: absolute;
    background: white;
    content: " ";
    border: 5px solid #4c4c4c;
    right: -5.5%;
    z-index: 2;
    top:-2%;
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