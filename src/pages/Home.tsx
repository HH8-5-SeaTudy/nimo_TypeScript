import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Ivoid } from '../api';
import BurgerSidebar from "../components/sidebar/BurgerSidebar";
import CalendarSidebar from "../components/sidebar/CalendarSidebar";
import ProfileSidebar from "../components/sidebar/ProfileSidebar";
import TodoSidebar from "../components/sidebar/TodoSidebar";
import { __getCheckInTimer, __getCheckOutTimer, __getUserinquire } from "../redux/modules/timer";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { useSelector } from "react-redux";
import sss from "../assets/sss.png"

const roomId1 = process.env.REACT_APP_ROOMID1;
const roomId2 = process.env.REACT_APP_ROOMID2;
const roomId3 = process.env.REACT_APP_ROOMID3;
const roomId4 = process.env.REACT_APP_ROOMID4;
const roomId5 = process.env.REACT_APP_ROOMID5;



export default function Home() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const time = useAppSelector((state) => state.timer);
  // useEffect(()=>{
  //   dispatch(__getUserinquire());
  // },[])

  // useEffect(()=>{
  //   console.log(time);
  // },[JSON.stringify(time)])
  return (
    <>
      <Layer> 

        <ButtonBox>
          <CheckInBall>
          <button onClick={()=>{
            dispatch(__getCheckInTimer());
          }}>start</button>
          <button onClick={()=>{
            dispatch(__getCheckOutTimer());
          }}> stop</button>
          </CheckInBall>
          <button
            onClick={() => {
              navigate("/chat", {
                state: {
                  id: roomId1,
                },
              });
            }}
          >
            서버1
          </button>
          <button
            onClick={() => {
              navigate("/chat", {
                state: {
                  id: roomId2,
                },
              });
            }}
          >
            서버2
          </button>
          <button
            onClick={() => {
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
              navigate("/chat", {
                state: {
                  id: roomId4,
                },
              });
            }}
          >
            서버4
          </button>
          <button
            onClick={() => {
              navigate("/chat", {
                state: {
                  id: roomId5,
                },
              });
            }}
          >
            서버5
          </button>
        </ButtonBox>
        <ProfileSidebar />
        <BurgerSidebar />
        <TodoSidebar />
        <CalendarSidebar />
      </Layer>
    </>
  );
}

const Layer = styled.section`
  border: solid red 3px;
  width: 100%;
  height: 100vh;
  background: url('https://i.pinimg.com/564x/74/14/83/741483bb55e4277719c3b9a80e92bcc9.jpg');
  background-size: 100% 100vh;
  
  `

const ButtonBox = styled.div`
  border: solid red 1px;
  
  width: 200px;
  height: 400px;
  margin:600px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const CheckInBall = styled.div`
button{
  width: 50%;
  height: 50px;
  &:first-child{
    background-color: green;
  }
  background-color:red;
}

`;

