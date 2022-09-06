import React from 'react';
import styled from 'styled-components';
import TodoList from '../components/TodoList/TodoList';
import Calendars from '../components/calendar/Calendars';

const TodoModal = () => {
  return (
    <div> 
      <Layer></Layer>      
      <TodoModalBox>
        <CalendarBox>
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

const Layer = styled.section`
  position:fixed;
  width:100%;
  height:100%;
  background-color: black;
  opacity:0.8;
  z-index:1;
`

const TodoModalBox = styled.div`
position:fixed;
width: 1221px;
height: 698px;
left: 50%;
top: 50%;
z-index:1;
background-color:white;
opacity:1;
transform:translate(-50%,-50%);
display:flex;
`
const CalendarBox = styled.div`
border: solid red 1px;
box-sizing:border-box;
width: 50%;
padding: 0 30px;
`
const TodoBox = styled.div`
border: solid red 1px;
width:50%;
padding: 0 30px;
`