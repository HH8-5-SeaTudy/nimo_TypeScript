import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { postCategory } from '../redux/modules/category';
import { RootState } from '../redux/config/configStore';

const TodoList = () => {
  const dispatch = useDispatch();
  const date= useSelector((state:RootState) => state.updateDate.date);
  
  console.log(date)

  const [category,setCategory] = useState('')

  const [todo,setTodo] = useState('')



  const onSubmitHandler = () => {
    dispatch(postCategory(category))
  };

 // 컴포넌트가 살향되면 전체리스트를 받아오고
 // 오늘 날짜와 일치하는 정보만 출력
 //

  return (
    <TodoListBox>
      <form    
      onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler();
          }}>
        카테고리
        <input onChange={(e) => setCategory(e.target.value)} placeholder='카테고리' type="text" />
        <button>add</button>
      </form>
      <List>
        <div>카테고리</div>
        <div>투두</div>
        <form >
          <input type="text" />
          <button>add</button>
        </form>
      </List>
    </TodoListBox>
  );
};

export default TodoList;

const TodoListBox = styled.section`
margin-top :10px;
  width:350px;
  height:300px;
  border: solid red 3px;
`
const List = styled.div`
display:flex;
border: solid 1px;
div {
  margin-left: 10px;
  &:first-child {
    color: red;
  }
}
form {
  margin-left: 10px;
}
`