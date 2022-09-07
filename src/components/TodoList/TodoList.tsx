import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import Category, { postCategory } from "../../redux/modules/category";
import { getDateTodo } from "../../redux/modules/dateTodos";
import { RootState } from "../../redux/config/configStore";
import { Icategory, Iitem } from "../../api";

const TodoList = () => {
  interface Icategory {
    categoryId:number;
    categoryName:string;
    todoList:[];
  }

  const dispatch = useDispatch();
  const date = useSelector((state: RootState) => state.updateDate.date);
  const dateTodos: Array<Icategory> = useSelector(
    (state: RootState) => state.dateTodos.dateTodos
  );
  console.log("선택날짜", dateTodos[0]);

  useEffect(() => {}, []);

  const [category, setCategory] = useState("");
  const date= useSelector((state:RootState) => state.updateDate.date);
  const dateTodos:Array<Icategory>= useSelector((state:RootState) => state.dateTodos.dateTodos);
  
  const [category,setCategory] = useState('')

  console.log(dateTodos)

  // 카테고리가 수정되면 모든 데이터가 변해야 하기 때문에 getAlltodos 실행해줘야함.
  const onSubmitHandler = () => {
    dispatch(postCategory(category));
  };

  // 선택되는 날짜 받아와서 정보불러오기 (기본값 오늘날짜)

  useEffect(() => {
    dispatch(getDateTodo(moment(date).format("YYYY-MM-DD")));
  }, [date]);

  return (
    <TodoListBox>
  

      <CategoryBox>
        <CategoryTitle>
          <div></div>
          <p>{dateTodos[0] ? dateTodos[0]?.categoryName : '카테고리'}</p>
          <input defaultValue={dateTodos[0]?.categoryName} />
          <button>+</button>
        </CategoryTitle>
        <CategoryList>
          {dateTodos[0]?.todoList.map((item:any)=>
            <CategoryListBox key={item.todoId}>
            <p>{item.content}</p>
            <div></div>
          </CategoryListBox>)}
        </CategoryList>
      </CategoryBox>

      <CategoryBox>
        <CategoryTitle>
          <div></div>
          <p>{dateTodos[1] ? dateTodos[1]?.categoryName : '카테고리2'}</p>
          <input defaultValue={dateTodos[1]?.categoryName} />
          <button>+</button>
        </CategoryTitle>
        <CategoryList>
          {dateTodos[1]?.todoList.map((item:any)=>
            <CategoryListBox key={item.todoId}>
            <p>{item.content}</p>
            <div></div>
          </CategoryListBox>)}
        </CategoryList>
      </CategoryBox>

      <CategoryBox>
        <CategoryTitle>
          <div></div>
          <p>{dateTodos[3] ? dateTodos[3]?.categoryName : '카테고리3'}</p>
          <input defaultValue={dateTodos[3] ? dateTodos[3]?.categoryName : '카테고리3'} />
          <button>+</button>
        </CategoryTitle>
        <CategoryList>
          {dateTodos[2]?.todoList.map((item:any)=>
            <CategoryListBox key={item.todoId}>
            <p>{item.content}</p>
            <div></div>
          </CategoryListBox>)}
        </CategoryList>
      </CategoryBox>

      <CategoryBox>
        <CategoryTitle>
          <div></div>
          <p>{dateTodos[3] ? dateTodos[3]?.categoryName : '카테고리4'}</p>
          <input defaultValue={dateTodos[3] ? dateTodos[3]?.categoryName : '카테고리4'} />
          <button>+</button>
        </CategoryTitle>
        <CategoryList>
          {dateTodos[3]?.todoList.map((item:any)=>
            <CategoryListBox key={item.todoId}>
            <p>{item.content}</p>
            <div></div>
          </CategoryListBox>)}
        </CategoryList>
      </CategoryBox>
    </TodoListBox>
  );
};

export default TodoList;

const TodoListBox = styled.section`
  width: 100%;
  height: 100%;
  border: solid red 3px;
  padding: 10px 0;
`;

const CategoryBox = styled.div``;

const CategoryTitle = styled.div`
  display: flex;
  input {
    margin-left: 5px;
  }
  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #C7B5EF;
  }
`;

const CategoryList = styled.div`
  list-style: none;
`;
const CategoryListBox = styled.div`
  margin-left: 35px;
  width: 379px;
  height: 40px;
  border-radius: 20px;
  background: #c7b5ef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px 0 20px;
  margin-top: 10px;
  p {
    font-family: "Inter";
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
`;
