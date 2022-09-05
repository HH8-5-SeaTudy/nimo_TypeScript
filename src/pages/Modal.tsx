import React from 'react';
import styled from 'styled-components';
import Calendars from '../components/calendar/Calendars';
import TodoList from './TodoList';
const Modal = () => {
  return (
    <ModalBox>
      <Calendars/>
      <TodoList/>
    </ModalBox>
  );
};

export default Modal;

const ModalBox = styled.section`
 margin-top: 50px;
 padding: 10px;
  border: solid green 3px;
  width:700px;
  height: 500px;
  display:flex;
`