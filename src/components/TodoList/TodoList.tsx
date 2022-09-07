import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import Category, { postCategory } from "../../redux/modules/category";
import { getDateTodo } from "../../redux/modules/dateTodos";
import { RootState } from "../../redux/config/configStore";
import { Icategory } from "../../api";

const TodoList = () => {
  const dispatch = useDispatch();
  const date = useSelector((state: RootState) => state.updateDate.date);
  const dateTodos: Array<Icategory> = useSelector(
    (state: RootState) => state.dateTodos.dateTodos
  );

  const [btnShow, setBtnShow] = useState(false);
  const [btn2Show, setBtn2Show] = useState(false);
  const [btn3Show, setBtn3Show] = useState(false);
  const [btn4Show, setBtn4Show] = useState(false);

  const [category, setCategory] = useState("");

  console.log("선택날짜데이터", dateTodos);

  const onSubmitHandler = () => {
    dispatch(postCategory({ categoryName: "카테고리", selectDate: date }));
    window.location.reload();
  };

  // 선택되는 날짜 받아와서 정보불러오기 (기본값 오늘날짜)

  useEffect(() => {
    dispatch(getDateTodo(moment(date).format("YYYY-MM-DD")));
  }, [date]);

  return (
    <>
      <AddCategory>
        <BtnGroup>
          <div onClick={onSubmitHandler}></div>
        </BtnGroup>
      </AddCategory>

      <TodoListBox>
        {dateTodos?.map((list: any) => (
          <CategoryBox key={list.categoryId}>
            <CategoryTitle>
              <div></div>
              <p>{list.categoryName}</p>
            </CategoryTitle>
            <CategoryList>
              {list.todoList.map((item: any) => (
                <CategoryListBox key={item.todoId}>
                  <p>{item.content}</p>
                  <div></div>
                </CategoryListBox>
              ))}
            </CategoryList>
          </CategoryBox>
        ))}
      </TodoListBox>
    </>
  );
};

export default TodoList;

const AddCategory = styled.div``;

const BtnGroup = styled.div`
  display: flex;
  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    &:first-child {
      background: red;
    }
    &:nth-child(2) {
      background: yellow;
    }
    &:nth-child(3) {
      background: blue;
    }
    &:nth-child(4) {
      background: green;
    }
  }
`;

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
    background: #c7b5ef;
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
