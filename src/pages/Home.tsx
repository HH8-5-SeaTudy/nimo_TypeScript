import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import moment from "moment";
import { useAppDispatch,  useAppSelector } from "../components/hooks/reduxHooks";
import { __getDateTodo } from '../redux/modules/dateTodos';
import { __getCheckInTimer, __getCheckOutTimer, __getUserinquire } from "../redux/modules/timer";
import TodoModal from '../pages/TodoModal';
import Calendars from '../components/calendar/Calendars';
//아이콘
import { ReactComponent as ProfileIcon } from "../assets/icon/ProfileIcon.svg";
import { ReactComponent as PlusIcon } from "../assets/icon/PlusIcon.svg";
import { ReactComponent as BurgerIcon } from "../assets/icon/BurgerIcon.svg";
import { ReactComponent as CalendarIcon } from "../assets/icon/CalendarIcon.svg";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //Todo zone
  const date = useAppSelector((state) => state.updateDate.date);
  const dateTodos = useAppSelector((state) => state.dateTodos.dateTodos);

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
    <MainBox>
      <TopBox>
        <ProfileLayer>
          <ProfileIconBox onClick={() => setProfileShow(!profileShow)}>
            <Profile />
          </ProfileIconBox>
          <ProfileHiddenLayer profileShow={profileShow}>
            <ProfileInfo>
              <ProfileImg></ProfileImg>
              <ProfileName></ProfileName>
              <ProfileMsg></ProfileMsg>
            </ProfileInfo>
            <ProfileClose onClick={() => setProfileShow(!profileShow)}>
            </ProfileClose>
          </ProfileHiddenLayer>
        </ProfileLayer>
        <TodoLayer>
          <TodoIconBox onClick={() => setTodoShow(!todoShow)}>
          <Plus />
          </TodoIconBox>
          <TodoHiddenLayer todoShow={todoShow} >
            <TodoInfo>
            <button onClick={()=>{modalHandler()}}>작성하기버튼</button>
              <div>
                {dateTodos &&
                  dateTodos.map((list) => (
                    <div key={list.categoryId}>
                      <div>
                        <p>카테고리이름:{list.categoryName}</p>
                      </div>
                      <div>
                        {list.todoList &&
                          list.todoList.map((item) => (
                            <>
                              <div key={item.todoId}>
                                <p>{item.content}</p>
                              </div>
                            </>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
              {modalShow && <TodoModal modalHandler={modalHandler} />}
            </TodoInfo>
            <TodoClose  onClick={() => setTodoShow(!todoShow)}>
            </TodoClose>
          </TodoHiddenLayer>
        </TodoLayer>
      </TopBox>
      <Bottom>
      <BurgerLayer>
          <BurgerIconBox onClick={() => setBurgerShow(!burgerShow)}>
          <Burger />
          </BurgerIconBox>
          <BurgerHiddenLayer burgerShow={burgerShow}>
            <BurgerInfo>
              <button onClick={()=>navigate('/statistics')}>통계페이지로이동</button>
            </BurgerInfo>
            <BurgerClose onClick={() => setBurgerShow(!burgerShow)}>
            </BurgerClose>
          </BurgerHiddenLayer>
        </BurgerLayer>
        <CalendarLayer>
          <CalendarIconBox onClick={() => setCalendarShow(!calendarShow)}>
          <Calendar />
          </CalendarIconBox>
          <CalendarHiddenLayer calendarShow={calendarShow} >
            <CalendarInfo>
            <Calendars/>
            </CalendarInfo>
            <CalendarClose onClick={() => setCalendarShow(!calendarShow)}>
            </CalendarClose>
          </CalendarHiddenLayer>
        </CalendarLayer>
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
      </Bottom>
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
  background: url('https://i.pinimg.com/564x/74/14/83/741483bb55e4277719c3b9a80e92bcc9.jpg');
  background-size: 100% 100vh;
`

const MainBox = styled.div`
    border: solid red 1px; 
    height: 100%;

` 

const TopBox = styled.div`
    border: solid red 1px; 
    height: 50%;
    display: flex;
    justify-content: space-between;
`


const ProfileLayer = styled.div`
   position:relative;
   background:#264b7e;
   width: 25px;
`
const ProfileIconBox = styled.div`
  background:#264b7e;
  width: 60px;
  height: 75px;
  position: absolute;
  left: -5px;
  top: 38%;
  border-radius: 40px;
`
const Profile = styled(ProfileIcon)`
  position: absolute;
  top:30%;
  right:13px;
`;

const ProfileHiddenLayer = styled.div<ProfileLayerProps>`
  border: solid blue 1px;
  width: 359px;
  height: 100%;
  display:flex;
  position:absolute;
  left: ${({ profileShow }) => (profileShow ? "0px" : "-359px")};
  z-index: 1;
  transition: all 0.5s;
  background:#264b7e;
`
const ProfileInfo = styled.div`
  border: solid red 1px;
  height: 100%;
  width: 334px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`
const ProfileImg = styled.div`
  border: 2px solid #ffffff;
  background: #bababa;
  width: 175px;
  height: 175px;
  border-radius: 50%;
  margin: 0 auto;
  `
const ProfileName = styled.div`
  border: 2px solid #ffffff;
  background: #bababa;
  width: 123px;
  height: 50px;
  margin: 0 auto;
`
const ProfileMsg = styled.div`
border: 2px solid #ffffff;
background: #bababa;
  width: 250px;
  height: 87px;
  margin: 0 auto;
`
const ProfileClose =styled.div`
  border: solid red 1px;
  width: 25px;
  height: 100%;
`

const TodoLayer = styled.div`
   width: 25px;
   position:relative;
   background:#264b7e;
`

const TodoIconBox = styled.div`
  position: absolute; 
  width: 60px;
  height: 75px;
  right: -5px;
  top: 38%;
  border-radius: 40px;
  background:#264b7e;
`
const Plus = styled(PlusIcon)`
  position: absolute;
  top:30%;
  left:13px;
`;

const TodoHiddenLayer = styled.div<TodoLayerProps>`
  position:absolute;
  border: solid blue 1px;
  width: 359px;
  height: 100%;
  display:flex;
  flex-direction: row-reverse;
  left: ${({ todoShow }) => (todoShow ? "-334px" : "25px")};
  z-index: 1;
  transition: all 0.5s;
  background:#264b7e;
`

const TodoInfo = styled.div`
  border: solid red 1px;
  height: 100%;
  width: 334px;
`

const TodoClose =styled.div`
  border: solid red 1px;
  width: 25px;
  height: 100%;
`


const Bottom =styled.div`
    border: solid red 2px; 
    height: 50%;
    display: flex;
    justify-content: space-between;
`

const BurgerLayer = styled.div`
   position:relative;
   width: 25px;
   background:#264b7e;
`
const BurgerIconBox = styled.div`
  width: 60px;
  height: 75px;
  position: absolute;
  left: -5px;
  top: 38%;
  border-radius: 40px;
  background:#264b7e;
`
const Burger = styled(BurgerIcon)`
    position: absolute;
  top:30%;
  right:13px;
`;

const BurgerHiddenLayer = styled.div<BurgerLayerProps>`
    border: solid blue 1px;
  width: 359px;
  height: 100%;
  display:flex;
  position:absolute;
  left: ${({ burgerShow }) => (burgerShow ? "0px" : "-359px")};
  z-index: 1;
  transition: all 0.5s;
  background:#264b7e;
`
const BurgerInfo = styled.div`
  border: solid red 1px;
  height: 100%;
  width: 334px;
`
const BurgerClose =styled.div`
  border: solid red 1px;
  width: 25px;
  height: 100%;
`

const CalendarLayer = styled.div`
   width: 25px;
   position:relative;
   background:#264b7e;
`

const CalendarIconBox = styled.div`
  position: absolute; 
  width: 60px;
  height: 75px;
  right: -5px;
  top: 38%;
  border-radius: 40px;
  background:#264b7e;
`
const Calendar = styled(CalendarIcon)`
   position: absolute;
  top:30%;
  left:13px;
`;

const CalendarHiddenLayer = styled.div<CalendarLayerProps>`
  position:absolute;
  border: solid blue 1px;
  width: 359px;
  height: 100%;
  display:flex;
  flex-direction: row-reverse;
  left: ${({ calendarShow }) => (calendarShow ? "-334px" : "25px")};
  z-index: 1;
  transition: all 0.5s;
  background:#264b7e;
`

const CalendarInfo = styled.div`
  border: solid red 1px;
  height: 100%;
  width: 334px;
`

const CalendarClose =styled.div`
  border: solid red 1px;
  width: 25px;
  height: 100%;
`
const ButtonBox = styled.div`
  position: absolute;
  border: solid red 1px; 
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  left: 45%;
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
`
