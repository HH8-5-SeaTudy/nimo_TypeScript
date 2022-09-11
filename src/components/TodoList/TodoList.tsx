import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  postCategory,
  deleteCategory,
  _editCategory,
  postTodo,
  doneTodo,
  deleteTodo,
} from "../../redux/modules/dateTodos";
import { getDateTodo } from "../../redux/modules/dateTodos";
import { RootState } from "../../redux/config/configStore";

const TodoList = () => {
  const dispatch = useDispatch();
  const date = useSelector((state: RootState) => state.updateDate.date);
  const dateTodos = useSelector(
    (state: RootState) => state.dateTodos.dateTodos
  );

  console.log("🤣🤣🤣🤣🤣🤣", dateTodos);

  const [category, setCategory] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [todo, setTodo] = useState("");

  const onSubmitHandler = (e: any) => {
    dispatch(postCategory({ categoryName: category, selectDate: date }));
    e.preventDefault();
    setTodo("");
  };

  const onSubmitEditHandler = (id: number) => {
    dispatch(
      _editCategory({
        categoryName: editCategory,
        categoryId: id,
      })
    );
  };
  const onSubmitTodoHandler = (id: number) => {
    dispatch(
      postTodo({
        categoryId: id,
        selectDate: moment(date).format("YYYY-MM-DD"),
        content: todo,
      })
    );
  };

  // 캘린더에서 선택되는 날짜 받아와서 정보불러오기 (기본값 오늘날짜)

  useEffect(() => {
    dispatch(getDateTodo(moment(date).format("YYYY-MM-DD")));
  }, [date]);

  return (
    <>
      <AddCategory>
        <BtnGroup>
          카테고리생성
          <form onSubmit={onSubmitHandler}>
            <input type="text" onChange={(e) => setCategory(e.target.value)} />
            <button type="submit">생성하기</button>
          </form>
        </BtnGroup>
      </AddCategory>
      <TodoListBox>
        {dateTodos &&
          dateTodos.map((list) => (
            <CategoryBox key={list.categoryId}>
              <CategoryTitle>
                <div></div>
                <p>{list.categoryName}</p>
                <button
                  onClick={() => dispatch(deleteCategory(list.categoryId))}
                >
                  x
                </button>
                {/* //카테고리생성 */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitEditHandler(list.categoryId);
                  }}
                >
                  <input
                    type="text"
                    onChange={(e) => setEditCategory(e.target.value)}
                  />
                  <button type="submit">수정</button>
                </form>
                {/* //투두리스트 */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitTodoHandler(list.categoryId);
                  }}
                >
                  투두
                  <input
                    type="text"
                    onChange={(e) => setTodo(e.target.value)}
                  />
                  <button type="submit">추가</button>
                </form>
              </CategoryTitle>
              <CategoryList>
                {list.todoList &&
                  list.todoList.map((item) => (
                    <>
                      <CategoryListBox key={item.todoId}>
                        <p>{item.content}</p>
                        <div onClick={() => dispatch(doneTodo(item.todoId))}>
                          {item.done === 1 ? "완료" : null}
                        </div>
                      </CategoryListBox>
                      <button
                        onClick={() =>
                          dispatch(
                            deleteTodo({
                              todoId: item.todoId,
                              categoryId: list.categoryId,
                            })
                          )
                        }
                      >
                        삭제
                      </button>
                    </>
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
