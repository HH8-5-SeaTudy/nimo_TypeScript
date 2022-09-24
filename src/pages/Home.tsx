import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import moment from "moment";
import { useAppDispatch,  useAppSelector } from "../components/hooks/reduxHooks";
import { __getDateTodo } from '../redux/modules/dateTodos';
import { __getCheckInTimer, __getCheckOutTimer, __getUserinquire } from "../redux/modules/timer";
import backimg from '../assets/pixel/backimg.jpeg'
import MiniCalendar from '../components/calendar/MiniCalendar';
import FishBowl from '../components/statistics/FishBowl';
import CalendarVer2 from '../components/calendar/CalendarVer2';




const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //Todo zone
  const date = useAppSelector((state) => state.updateDate.date);
  const dateTodos = useAppSelector((state) => state.dateTodos.dateTodos);

  useEffect(() => {
    dispatch(__getDateTodo(moment(date).format("YYYY-MM-DD")));
  }, [date]);

  //SideBar hidden
  const [profileShow, setProfileShow] = useState(false);
  const [todoShow, setTodoShow] = useState(false);
  const [burgerShow, setBurgerShow] = useState(false);
  const [calendarShow, setCalendarShow] = useState(false);
  const [inventoryShow,setInventoryShow] = useState(false);
  const [sideBarShow,setSideBarShow] = useState(false);
  const [modalShow,setModlaShow] = useState(false);

  //server zone
  const roomId1 = process.env.REACT_APP_ROOMID1;
  const roomId2 = process.env.REACT_APP_ROOMID2;
  const roomId3 = process.env.REACT_APP_ROOMID3;
  const roomId4 = process.env.REACT_APP_ROOMID4;
  const roomId5 = process.env.REACT_APP_ROOMID5;
  
  console.log(dateTodos.map((x)=>x.todoList?.map((y)=>y.content)))

  return (
  <Layer>
    {modalShow && <CalendarVer2/>}
    
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
      <SideBarLayer style={{ left : sideBarShow ? '-300px': '0'}}>
      <SideBar>
        <SideBar>
          <SideProfile onClick={() => setProfileShow(!profileShow)}>프로필헤더</SideProfile>
        <SideProfileBox profileShow={profileShow}>
          <ProfileLeft>
            <ProfileFish></ProfileFish>
          </ProfileLeft>
          <ProfileRight>
            <Name>name</Name>
            <StudyTime>총 공부시간</StudyTime>
          </ProfileRight>
        </SideProfileBox>
        <SideCalendar onClick={() => setCalendarShow(!calendarShow)}>캘린더헤더</SideCalendar>
        <SideCalendarBox calendarShow={calendarShow}>
          <MiniCalendar></MiniCalendar>
        </SideCalendarBox>
        <SideTodoList >
          <Title onClick={() => setTodoShow(!todoShow)}>투두리스트헤더</Title>
          <CalendarBtn onClick={()=>setModlaShow(!modalShow)}></CalendarBtn>
          </SideTodoList>
        <SideTodoListBox todoShow={todoShow}>
        {dateTodos && 
        dateTodos.map((list)=>list.todoList?.map((item)=>
          <Todo>
            <TodoCheck></TodoCheck>
            <TodoTitle>{item.content}</TodoTitle>
            <TodoDelete></TodoDelete>
          </Todo>
        ))}
        
        </SideTodoListBox>
        <SideInventory  onClick={() => setBurgerShow(!burgerShow)}>인벤토리헤더</SideInventory>
        <SideInventoryBox burgerShow={burgerShow}>
          <InventoryLayer>     
            <OpenHandle onClick={() => setInventoryShow(!inventoryShow)}></OpenHandle>
            <NextFishBox>
              <FishBowl/>
            </NextFishBox> 
          <InventoryBox inventoryShow={inventoryShow}>
            <Inventory>ddd</Inventory>
            <Handle onClick={() => setInventoryShow(!inventoryShow)}></Handle>
          </InventoryBox>
          </InventoryLayer>
        </SideInventoryBox>
        </SideBar>
      </SideBar> 
      <SideBarBtn onClick={()=>setSideBarShow(!sideBarShow)}></SideBarBtn>
      </SideBarLayer>
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
interface InventoryLayerProps {
inventoryShow: boolean;
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
const SideBarLayer =styled.div`
  position:relative;
  display:flex;
  height:100%;
  transition: all 0.3s;
` 
const SideBarBtn =styled.div`
width:20px;
height:100px;
background-color:red;

`
const SideBar = styled.div`
  position: relative;
  border: solid red 3px;
  background-color: white;
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display:none;
  }
`
const SideProfile = styled.div`
     border: solid red 1px;
     height: 30px;
`
const SideCalendar = styled.div`
   border: solid red 1px;
   height: 30px;
`
const SideTodoList = styled.div`
   border: solid red 1px;
   height: 30px;
   display: flex;
`
const SideInventory = styled.div`
   border: solid red 1px;
   height: 30px;
`
//
const Title = styled.div`
  width:90%;
`
const CalendarBtn = styled.div`
  border: solid red 1px;
  width:10%;
  
`

const SideProfileBox = styled.div<ProfileLayerProps>`
     border: solid red 1px;
     height: 100px;
     display: ${({ profileShow }) => (profileShow ? "flex" : "none")};
`
const ProfileLeft = styled.div`
   border: solid red 1px;
   width:40%;
   height: 100%;
   display: flex;
   align-items: center;
`
const ProfileFish = styled.div`
  border: solid red 1px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin:auto;
`
const ProfileRight = styled.div`
  border: solid red 1px;
  width:60%;
  height: 100%;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
`
const Name = styled.div`
  border: solid red 1px;
  width:60%;
  height: 40px;
  margin:auto;
`
const StudyTime = styled.div`
  border: solid red 1px;
  width:60%;
  height: 40px;
  margin:auto;
`


const SideCalendarBox = styled.div<CalendarLayerProps>`
   border: solid red 1px;
   display: ${({calendarShow }) => (calendarShow ? "block" : "none")};
`
const SideTodoListBox = styled.div<TodoLayerProps>`
   border: solid red 1px;
   display: ${({ todoShow }) => (todoShow ? "block" : "none")};

`
const Todo = styled.div`
  border: solid red 1px;
  padding:0 10px;
  display: flex;
  justify-content:space-between;
`
const TodoCheck  = styled.div`
  border: solid red 1px;
  width:50px;
  height:30px;
`
const TodoTitle = styled.div`
  border: solid red 1px;
  width:300px;
  height:30px;
`
const TodoDelete = styled.div`
  border: solid red 1px; 
  width:50px;
  height:30px;
`
const SideInventoryBox = styled.div<BurgerLayerProps>`
   border: solid red 1px;
   height: 300px;
   display: ${({ burgerShow }) => (  burgerShow ? "block" : "none")};

`
const InventoryLayer =styled.div`
  display:flex;
  justify-content:end;
  height: 100%;
`
const NextFishBox = styled.div`
  border: solid red 3px;
  width: calc(100% - 20px);
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const OpenHandle = styled.div`
  border: solid red 1px;
  width:20px;
  height:100%;
`
const InventoryBox =styled.div<InventoryLayerProps>`
  display:flex;
  position:absolute;
  height:300px;
  left: ${({ inventoryShow }) => (  inventoryShow ? "0px" : "-300px")};
  transition: all 0.3s;
  z-index:5;
`
const Handle = styled.div`
 border: solid red 1px;
  width:20px;
  height:300px;
  background-color: lightgray;
`
const Inventory = styled.div`
   border: solid red 1px;
   width: 270px;
  background-color: lightgray;

`