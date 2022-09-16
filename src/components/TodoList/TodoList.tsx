import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import {
  __getDateTodo,
  __postCategory,
  __deleteCategory,
  __editCategory,
  __postTodo,
  __doneTodo,
  __deleteTodo,
} from "../../redux/modules/dateTodos";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

const TodoList = () => {
  // * Typescript redux useSelector, useDispatch 재사용 방법
  const dispatch = useAppDispatch();
  const date = useAppSelector((state) => state.updateDate.date);
  const dateTodos = useAppSelector((state) => state.dateTodos.dateTodos);

  const [category, setCategory] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [todo, setTodo] = useState("");

  const onSubmitHandler = (e: any) => {
    if (category.length < 2) {
      alert("2글자 이상 입력");
      return;
    }
    if (dateTodos.length < 4)
      dispatch(__postCategory({ categoryName: category, selectDate: date }));
    else {
      alert("4개까지만 생성가능");
    }
    e.preventDefault();
    setTodo("");
  };

  const onSubmitEditHandler = (id: any) => {
    dispatch(
      __editCategory({
        categoryName: editCategory,
        categoryId: id,
      })
    );
  };
  const onSubmitTodoHandler = (id: any) => {
    if (todo.length < 4) {
      alert("너무 짧습니다");
      return;
    }
    dispatch(
      __postTodo({
        categoryId: id,
        selectDate: moment(date).format("YYYY-MM-DD"),
        content: todo,
      })
    );
    setTodo("");
  };
  const onChangeCategoryInput = (e: any) => {
    setCategory(e.target.value);
  };

  const onChangeTodoInput = (e: any) => {
    setTodo(e.target.value);
  };

  // 캘린더에서 선택되는 날짜 받아와서 정보불러오기 (기본값 오늘날짜)
  useEffect(() => {
    dispatch(__getDateTodo(moment(date).format("YYYY-MM-DD")));
  }, [date]);

  return (
    <Layer>
      <AddCategory>
        <BtnGroup>
          카테고리생성
          <form onSubmit={onSubmitHandler}>
            <input
              type="text"
              value={category}
              onChange={onChangeCategoryInput}
            />
            <button type="submit">+</button>
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
                  onClick={() => dispatch(__deleteCategory(list.categoryId))}
                >
                  x
                </button>
                {/* //카테고리수정 */}
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
                    setTodo("");
                  }}
                >
                  투두
                  <input
                    type="text"
                    value={todo}
                    onChange={onChangeTodoInput}
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
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => dispatch(__doneTodo(item.todoId))}
                        >
                          {item.done === 1 ? "완료" : null}
                        </div>
                      </CategoryListBox>
                      <button
                        onClick={() =>
                          dispatch(
                            __deleteTodo({
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
    </Layer>
  );
};

export default React.memo(TodoList);

const Layer = styled.div`
  height:100%;
  border:solid black 5px;
`
const AddCategory = styled.div`
border: solid blue 1px;
`;

const BtnGroup = styled.div`
  display: flex;

`;

const TodoListBox = styled.section`
  width: 100%;
  height: 100px;
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
