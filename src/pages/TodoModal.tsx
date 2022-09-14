import React from 'react';
import styled from 'styled-components';
import TodoList from '../components/TodoList/TodoList';
import Calendars from '../components/calendar/Calendars';
const TodoModal = ({modalHandler}:any) => {

  
  return (
    <div> 
      <TodoModalBox>
        <CalendarBox>
          <p onClick={()=>modalHandler()}>닫기</p>
          <Calendars/>
        </CalendarBox>
        <TodoBox>
          <TodoList/>
        </TodoBox>
      </TodoModalBox>
    </div>
  );
};

export default TodoModal;


const TodoModalBox = styled.div`
position:fixed;
width: 1221px;
height: 698px;
left: 50%;
top: 45%;
z-index:1;
background-color:white;
opacity:1;
transform:translate(-50%,-50%);
display:flex;
background-color: gray;
`
const CalendarBox = styled.div`
border: solid red 1px;
box-sizing:border-box;
width: 50%;
padding: 50px 30px;
p{
  font-size: 36px;
  margin:0;
}
`
const TodoBox = styled.div`
border: solid red 1px;
width:50%;
padding: 0 30px;
`