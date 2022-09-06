import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import Category, { postCategory } from '../../redux/modules/category';
import { getDateTodo } from '../../redux/modules/dateTodos';
import { RootState } from '../../redux/config/configStore';


const TodoList = () => {
  const dispatch = useDispatch();
  const date= useSelector((state:RootState) => state.updateDate.date);
  const dateTodos:Array<any>= useSelector((state:RootState) => state.dateTodos.dateTodos);
  
  console.log('선택날짜',dateTodos[0])


  const [category,setCategory] = useState('')


 // 카테고리가 수정되면 모든 데이터가 변해야 하기 때문에 getAlltodos 실행해줘야함.
  const onSubmitHandler = () => {
    dispatch(postCategory(category))
  };

 // 선택되는 날짜 받아와서 정보불러오기 (기본값 오늘날짜)

useEffect(() => {
  dispatch(getDateTodo(moment(date).format("YYYY-MM-DD")))
}, [date]);


  return (
    <TodoListBox>
      <CategoryBox>
        <CategoryTitle>
          <div></div>
          <input defaultValue='카테고리' />
          <button>+</button>
        </CategoryTitle>
        <CategoryList>
          <CategoryListBox>
            <p>수학숙제</p>
            <div></div>
          </CategoryListBox>
          <CategoryListBox>
            <p>수학숙제</p>
            <div></div>
          </CategoryListBox>
        </CategoryList>
      </CategoryBox>
    </TodoListBox>
  );
};

export default TodoList;

const TodoListBox = styled.section`
  width:100%;
  height:100%;
  border: solid red 3px;
  padding: 10px 0;
`

const CategoryBox = styled.div`
`

const CategoryTitle = styled.div`
  display:flex;
  input {
    margin-left: 5px;
  }
  div{
    width: 40px;
    height: 40px;
    background: #C7B5EF;
    border-radius: 50%
  }
`

const CategoryList = styled.div`
  list-style:none;
`
const CategoryListBox = styled.div`
    margin-left: 35px;
    width: 379px;
    height: 40px;
    border-radius: 20px;
    background: #C7B5EF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px 0 20px;
    margin-top: 10px;
      p {
        font-family: 'Inter';
font-style: normal;
font-size: 15px;
line-height: 30px;
letter-spacing: 0.15em;
color: #000;
    }
      div {
      width: 47px;
      height: 30px;
      background: rgba(244, 244, 244, 0.8);
      border-radius: 20px;
    }
  `