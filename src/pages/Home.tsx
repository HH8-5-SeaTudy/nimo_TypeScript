import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import moment from "moment";
import { useAppDispatch,  useAppSelector } from "../components/hooks/reduxHooks";
import { __getDateTodo } from '../redux/modules/dateTodos';
import { __getCheckInTimer, __getCheckOutTimer, __getUserinquire } from "../redux/modules/timer";
//아이콘
import { ReactComponent as ProfileIcon } from "../assets/icon/ProfileIcon.svg";
import { ReactComponent as PlusIcon } from "../assets/icon/PlusIcon.svg";
import { ReactComponent as BurgerIcon } from "../assets/icon/BurgerIcon.svg";
import { ReactComponent as CalendarIcon } from "../assets/icon/CalendarIcon.svg";
import backimg from '../assets/pixel/backimg.jpeg'
import CalendarVer2 from '../components/calendar/CalendarVer2';
import SideBarVer2 from '../components/sidebar/SideBarVer2';



const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //Todo zone
  const date = useAppSelector((state) => state.updateDate.date);
  const dateTodos = useAppSelector((state) => state.dateTodos.dateTodos);
  const userData = useAppSelector((state) => state.userData.userData);

  console.log('userData',userData)
  useEffect(() => {
    dispatch(__getDateTodo(moment(date).format("YYYY-MM-DD")));
  }, [date]);

  const [modalShow, setModalShow] = useState(false);

  const modalHandler = () => {
    setModalShow(!modalShow);
  };

  //SideBar hidden
  const [profileShow, setProfileShow] = useState(false);
  const [todoShow, setTodoShow] = useState(false);
  const [burgerShow, setBurgerShow] = useState(false);
  const [calendarShow, setCalendarShow] = useState(false);

  //server zone
  const roomId1 = process.env.REACT_APP_ROOMID1;
  const roomId2 = process.env.REACT_APP_ROOMID2;
  const roomId3 = process.env.REACT_APP_ROOMID3;
  const roomId4 = process.env.REACT_APP_ROOMID4;
  const roomId5 = process.env.REACT_APP_ROOMID5;


  return (
  <Layer>
    {/* <ButtonBox>
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
        </ButtonBox>  */}
    <MainBox>  
      <SideBar>
        <SideProfile onClick={() => setProfileShow(!profileShow)}>프로필헤더</SideProfile>
        <SideProfileBox profileShow={profileShow}>
          <ProfileLeft>
            <ProfileFish></ProfileFish>
          </ProfileLeft>
          <ProfileRight>
            <Name>name</Name>
            <Info>info</Info>
            <StudyTime>총 공부시간</StudyTime>
          </ProfileRight>
        </SideProfileBox>
        <SideCalendar onClick={() => setCalendarShow(!calendarShow)}>캘린더헤더</SideCalendar>
        <SideCalendarBox calendarShow={calendarShow}></SideCalendarBox>
        <SideTodoList onClick={() => setTodoShow(!todoShow)}>투두리스트헤더</SideTodoList>
        <SideTodoListBox todoShow={todoShow}></SideTodoListBox>
        <SideInventory  onClick={() => setBurgerShow(!burgerShow)}>인벤토리헤더</SideInventory>
        <SideInventoryBox burgerShow={burgerShow}></SideInventoryBox>
      </SideBar>
    </MainBox> 

  </Layer>
  );
};

export default Home;

interface ProfileLayerProps {
profileShow: boolean;
}
interface BurgerLayerProps {
  burgerShow: boolean;
}
interface TodoLayerProps {
  todoShow: boolean;
}
interface CalendarLayerProps {
calendarShow: boolean;
}

const Layer = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 65px;
  background: url(${backimg});
  background-size: 100% 100vh;
`

const MainBox = styled.div`
    border: solid red 1px; 
    height: 100%;

` 
const SideBar = styled.div`
  position: relative;
  border: solid red 3px;
  background-color: white;
  width: 500px;
  height: 100%;
`
const SideProfile = styled.div`
     border: solid red 1px;
     height: 50px;
`
const SideCalendar = styled.div`
   border: solid red 1px;
   height: 50px;
`
const SideTodoList = styled.div`
   border: solid red 1px;
   height: 50px;
`
const SideInventory = styled.div`
   border: solid red 1px;
   height: 50px;
`
//
const SideProfileBox = styled.div<ProfileLayerProps>`
     border: solid red 1px;
     height: 300px;
     display: ${({ profileShow }) => (profileShow ? "none" : "flex")};
`
const ProfileLeft = styled.div`
   border: solid red 1px;
   width:50%;
   height: 100%;
   display: flex;
   align-items: center;
`
const ProfileFish = styled.div`
  border: solid red 1px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin:auto;
`
const ProfileRight = styled.div`
  border: solid red 1px;
  width:50%;
  height: 100%;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
`
const Name = styled.div`
  border: solid red 1px;
  width:60%;
  height: 80px;
  margin:auto;
`
const Info = styled.div`
  border: solid red 1px;
  width:60%;
  height: 80px;
  margin:auto;
`
const StudyTime = styled.div`
  border: solid red 1px;
  width:60%;
  height: 80px;
  margin:auto;
`


const SideCalendarBox = styled.div<CalendarLayerProps>`
   border: solid red 1px;
   height: 300px;
   display: ${({calendarShow }) => (calendarShow ? "none" : "block")};
`
const SideTodoListBox = styled.div<TodoLayerProps>`
   border: solid red 1px;
   height: 300px;
   display: ${({ todoShow }) => (todoShow ? "none" : "block")};
`
const SideInventoryBox = styled.div<BurgerLayerProps>`
   border: solid red 1px;
   height: 300px;
   display: ${({ burgerShow }) => (  burgerShow ? "none" : "block")};
`
