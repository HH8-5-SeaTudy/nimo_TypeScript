import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BurgerSidebar from "../components/sidebar/BurgerSidebar";
import CalendarSidebar from "../components/sidebar/CalendarSidebar";
import ProfileSidebar from "../components/sidebar/ProfileSidebar";
import TodoSidebar from "../components/sidebar/TodoSidebar";

const roomId1 = process.env.REACT_APP_ROOMID1;
const roomId2 = process.env.REACT_APP_ROOMID2;
const roomId3 = process.env.REACT_APP_ROOMID3;
const roomId4 = process.env.REACT_APP_ROOMID4;
const roomId5 = process.env.REACT_APP_ROOMID5;

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Layer>
        <ButtonBox>
          <CheckInBall></CheckInBall>
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
  height: 1000px;
`;
const ButtonBox = styled.div`
  border: solid red 1px;
  width: 200px;
  height: 400px;
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const CheckInBall = styled.div`
  border: solid red 1px;
  background-color: red;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
