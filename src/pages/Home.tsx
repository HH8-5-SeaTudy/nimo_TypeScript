import React from "react";
import styled from "styled-components";
import { Ivoid } from '../api';
import BurgerSidebar from "../components/sidebar/BurgerSidebar";
import CalendarSidebar from "../components/sidebar/CalendarSidebar";
import ProfileSidebar from "../components/sidebar/ProfileSidebar";
import TodoSidebar from "../components/sidebar/TodoSidebar";


export default function Home( {startHandler , endHandler}:Ivoid) {

  return (
    <>
    <Layer>
      <ButtonBox>
        <CheckInBall>
          <button onClick={()=>startHandler()}>start</button>
          <button onClick={()=>endHandler()}> stop</button>
        </CheckInBall>
        <button>서버1</button>
        <button>서버2</button>
        <button>서버3</button>
        <button>서버4</button>
        <button>서버5</button>
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
  width:100%;
  height:1000px;
`
const ButtonBox =styled.div`
  border: solid red 1px;
  width: 200px;
  height: 400px;
  margin: 200px auto;
  display:flex;
  flex-direction: column;
  justify-content:space-around;
 
`
const CheckInBall = styled.div`
  border: solid red 1px;
  background-color: red;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`