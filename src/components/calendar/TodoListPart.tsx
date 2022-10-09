import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Input from "../../elements/Input";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  __postCategory,
  __getDateTodo,
  __postTodo,
  __deleteTodo,
  __doneTodo,
  __editCategory,
  __deleteCategory,
} from "../../redux/modules/dateTodos";
import {
  __deleteDday,
  __editDday,
  __getDday,
  __postDday,
} from "../../redux/modules/dday";
import textbox from "../../assets/pixel/textbox.png";
import _ from "lodash";

const TodoListPart = () => {
  const dispatch = useAppDispatch();
  const date = useAppSelector((state) => state.updateDate.date); //컴포넌트분리시사용
  const dateTodos = useAppSelector((state) => state.dateTodos.dateTodos);
  const DdayData = useAppSelector((state) => state.dday.DdayData);
  const DdaySort = DdayData.map((x) => x).sort((a, b) => {
    return b.dday - a.dday;
  });
  const inputRef = useRef<any>([]);
  const [categoryInputShow, setCategoryInputShow] = useState(false);
  const [todoInputShow, setTodoInputShow] = useState<any>([
    false,
    false,
    false,
    false,
  ]);
  const [editCategoryShow, setEditCategoryShow] = useState(false);
  const [DdayShow, setDdayShow] = useState(false);
  const [DdayEditShow, setDdayEditShow] = useState(false);
  const [category, setCategory] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [todo, setTodo] = useState(["", "", "", ""]);
  const [ddayTitle, setDdayTitle] = useState("");
  const [selectDdayID, setSelectDdayID] = useState<number>();
  const [DdayEditTitle, setDdayEditTitle] = useState("");

  //lodash
  const debounce1 = _.debounce((text : string) =>  {
    setDdayTitle(text);
  }
  , 1000);
  const debounce2 = _.debounce((text : string) =>  {
    setDdayEditTitle(text);
  }
  , 1000);
  const debounce3 = _.debounce((text : string) =>  {
    setCategory(text);
  }
  , 1000);
  const debounce4 = _.debounce((text : string) =>  {
    setEditCategory(text);
  }
  , 1000);
  const debounce5 = _.debounce((text : any,i:number) =>  {
    onChangeTodoInput(text,i);
  }
  , 1000);

  const DeSetDdayTitle = React.useCallback(debounce1, []);
  const DeSetDdayEditTitle = React.useCallback(debounce2, []);
  const DeSetCategory =  React.useCallback(debounce3, []);
  const DeSetEditCategory = React.useCallback(debounce4, []);
  const DeOnChangeTodoInput = React.useCallback(debounce5, []);

  //TodoList

  function todoBoxIndex(index: number) {
    let temp = [...todoInputShow];
    temp[index] = !temp[index];
    setTodoInputShow(temp);
  }

  function onSubmitHandler() {
  if (dateTodos.length < 4)
    dispatch(__postCategory({ categoryName: category, selectDate: date }));
  else {
    alert("4개까지만 생성가능");
  }
    setCategory("");
  }

  function onChangeCategoryInput(e: any) {
    setCategory(e.target.value);
  }

  function onSubmitTodoHandler(id: any, i: number) {
    dispatch(
      __postTodo({
        categoryId: id,
        selectDate: date,
        content: todo[i],
      })
    );
    const tempData = [...todo];
    tempData[i] = "";
    setTodo([...tempData]);
  }

  function onChangeTodoInput(e: any, i: number) {
    const tempData = [...todo];
    tempData[i] = e.target.value;
    setTodo([...tempData]);
  }

  function onSubmitEditHandler(id: any) {
    dispatch(
      __editCategory({
        categoryName: editCategory,
        categoryId: id,
      })
    );
    setEditCategoryShow(false);
  }

  //D-day

  function onSubmitDdayHandler() {
    dispatch(__postDday({ title: ddayTitle, ddayDate: date }));
    setDdayTitle("");
  }
  function onSubmitEditDataHandler(id: number) {
    setSelectDdayID(id);
    setDdayShow(false);
    setDdayEditShow(true);
  }
  const selectDdayData = DdayData.filter((x) => x.ddayId === selectDdayID);

  function onSubmitDdayEditHandler(id: number, targetDay: string) {
    dispatch(
      __editDday({
        title: DdayEditTitle,
        targetDay: targetDay,
        id,
      })
    );
  }

  //useEffect

  useEffect(() => {
    if (date === "") {
      return;
    }
    dispatch(__getDateTodo(date));
    dispatch(__getDday(date));
  }, [date]);
  return (
    <>
      {/* DdayModal */}
      {DdayShow && (
        <DayTextBox>
          <DdayTextBoxCloseBtn>
            <DdayTitle>ADD D-DAY</DdayTitle>
            <DdayCLoseBtn onClick={() => setDdayShow(false)}>X</DdayCLoseBtn>
          </DdayTextBoxCloseBtn>
          <DdayInputBox>
            <DToday>{date}</DToday>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitDdayHandler();
                setDdayShow(false);
              }}
            >
              <DdayInput>
                <Input
                  type="text"
                  onChange={(e) => DeSetDdayTitle(e.target.value)}
                  border="solid black 2px"
                  outline="none"
                  height="30px"
                />
              </DdayInput>
              <DdayInputBtn>
                <div
                  onClick={() => {
                    onSubmitDdayHandler();
                    setDdayShow(false);
                  }}
                >
                  등록
                </div>
              </DdayInputBtn>
            </form>
          </DdayInputBox>
        </DayTextBox>
      )}
      {/* DdayEditModal */}
      {DdayEditShow &&
        selectDdayData?.map((list) => (
          <DayTextBox key={list.ddayId}>
            <DdayTextBoxCloseBtn>
              <DdayTitle>EDIT D-DAY</DdayTitle>
              <DdayCLoseBtn onClick={() => setDdayEditShow(false)}>
                X
              </DdayCLoseBtn>
            </DdayTextBoxCloseBtn>
            <DdayInputBox>
              <DToday>
                {date}
                <span>
                  D
                  {list.dday === 0
                    ? "-day"
                    : list.dday > 0
                    ? "+" + list.dday
                    : list.dday}
                </span>
              </DToday>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmitDdayEditHandler(list.ddayId, list.targetDay);
                  setDdayEditShow(false);
                }}
              >
                <DdayInput>
                  <Input
                    type="text"
                    onChange={(e) => DeSetDdayEditTitle(e.target.value)}
                    border="solid black 2px"
                    outline="none"
                    height="30px"
                    defaultValue={list.title}
                  />
                </DdayInput>
                <DdayInputBtn>
                  <div
                    onClick={() => {
                      onSubmitDdayEditHandler(list.ddayId, list.targetDay);
                      setDdayEditShow(false);
                    }}
                  >
                    수정
                  </div>
                  <div
                    onClick={() => {
                      dispatch(__deleteDday(list.ddayId));
                      setDdayEditShow(false);
                    }}
                  >
                    삭제
                  </div>
                </DdayInputBtn>
              </form>
            </DdayInputBox>
          </DayTextBox>
        ))}
      <CalendarLeft>
        <TopBox>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitHandler();
            }}
          >
            <HiddenAddBtn categoryInputShow={categoryInputShow}>
              <AddEventBtn
                onClick={() => {
                  setCategoryInputShow(true);
                }}
                categoryInputShow={categoryInputShow}
              >
                +
              </AddEventBtn>
              {category && <AddEventBtnHidden>+</AddEventBtnHidden>}
              <AddCategory categoryInputShow={categoryInputShow}>
                <Input
                  onChange={(e)=>{setCategory(e.target.value)}}
                  value={category}
                  transition="width .2s .3s , height .3s"
                  width={categoryInputShow ? "140px" : "0px"}
                  height={categoryInputShow ? "25px" : "0px"}
                  placeholder="카테고리"
                  fontSize="20px"
                  border="none"
                  outline="none"
                />
              </AddCategory>
            </HiddenAddBtn>
          </form>
          <DayBtn
            onClick={() => {
              setDdayShow(true);
              setDdayEditShow(false);
            }}
          ></DayBtn>
          <Today>{date.slice(-2)}</Today>
        </TopBox>
        <LeftSideDay>
          {/* 디데이 */}
          <DdayList>
            {DdaySort &&
              DdaySort.map((list) => (
                <>
                  <Dday
                    key={list.ddayId}
                    onClick={() => onSubmitEditDataHandler(list.ddayId)}
                  >
                    <div>{list.title}</div>
                    <p>
                      D
                      {list.dday === 0
                        ? "-day"
                        : list.dday > 0
                        ? "+" + list.dday
                        : list.dday}
                    </p>
                  </Dday>
                </>
              ))}
          </DdayList>
          {dateTodos &&
            dateTodos.map((list, index) => {
              return (
                <TodoListBox key={list.categoryId}>
                  <CategoryBox>
                    <CategoryTitle
                      onSubmit={(e) => {
                        e.preventDefault();
                        onSubmitEditHandler(list.categoryId);
                      }}
                    >
                      <Input
                        readOnly={editCategoryShow ? false : true}
                        onClick={() => setEditCategoryShow(true)}
                        onChange={(e) => DeSetEditCategory(e.target.value)}
                        type="text"
                        defaultValue={list.categoryName}
                        backgroundColor="#0096FF"
                        border="none"
                        outline="none"
                        color="black"
                        fontSize="20px"
                        width="150px"
                        cursor="pointer"
                        fontFamily="DungGeunMo"
                        overflow="hidden"
                        textOverflow="ellipsis"
                      />
                    </CategoryTitle>
                    <BtnGroup>
                      <CategoryDeleteBtn
                        onClick={() =>
                          dispatch(__deleteCategory(list.categoryId))
                        }
                      >
                        +
                      </CategoryDeleteBtn>
                      <TodoPopBtn
                        onClick={() => {
                          todoBoxIndex(index);
                        }}
                        todoInputShow={todoInputShow[index]}
                      >
                        ›
                      </TodoPopBtn>
                    </BtnGroup>
                  </CategoryBox>
                  {todoInputShow[index] && (
                    <HiddenTodoAddBox
                      onSubmit={(e) => {
                        e.preventDefault();
                        onSubmitTodoHandler(list.categoryId, index);
                      }}
                    >
                      <Input
                        type="text"
                        ref={(el: any) => (inputRef.current[index] = el)}
                        onChange={(e) => {
                          DeOnChangeTodoInput(e, index);
                        }}
                        width="250px"
                      />
                      <TodoAddBtn todo={todo[index]}>+</TodoAddBtn>
                    </HiddenTodoAddBox>
                  )}
                  {list.todoList &&
                    list.todoList.map((item) => (
                      <TodoList key={item.todoId}>
                        <DoneBtn
                          style={{
                            backgroundColor:
                              item.done === 1 ? "#32de5d" : "transparent",
                          }}
                          onClick={() => dispatch(__doneTodo(item.todoId))}
                        ></DoneBtn>
                        <Todo>{item.content}</Todo>
                        <TodoBtn>
                          <DeleteBtn
                            onClick={() =>
                              dispatch(
                                __deleteTodo({
                                  todoId: item.todoId,
                                  categoryId: list.categoryId,
                                })
                              )
                            }
                          >
                            +
                          </DeleteBtn>
                        </TodoBtn>
                      </TodoList>
                    ))}
                </TodoListBox>
              );
            })}
        </LeftSideDay>
      </CalendarLeft>
    </>
  );
};

export default React.memo(TodoListPart);

const CalendarLeft = styled.div`
  position: relative;
  width: 350px;
  padding: 20px;
  background-color: #0096ff;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
  margin: 20px;
  border-radius: 6px;
  display: block;
  height: 700px;
`;
const DayBtn = styled.div`
  position: absolute;
  border-radius: 5px 15px 15px 5px;
  border: solid black 2px;
  width: 15px;
  height: 15px;
  background-color: red;
  top: 7px;
  right: 24px;
  cursor: pointer;
  z-index: 3;
`;

const Today = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100px;
  font-size: 80px;
  text-align: end;
  line-height: 58px;
`;

const LeftSideDay = styled.div`
  font-size: 18px;
  padding-right: 3px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: white;
    height: 5px;
  }
  max-height: 400px;
`;
const DdayList = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  font-weight: 500;
  overflow: hidden;
`;
const Dday = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  line-height: 19px;
  cursor: pointer;
  div {
    font-size: 15px;
    color: black;
  }
  p {
    color: red;
    font-size: 20px;
    margin: 0 5px 0 2px;
    font-weight: 700;
  }
`;

const TodoListBox = styled.div`
  margin-top: 10px;
  border: solid black 3px;
  border-radius: 6px;
`;
const CategoryBox = styled.div`
  margin-bottom: 2px;
  padding: 0 10px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CategoryTitle = styled.form`
  color: white;
  padding-top: 5px;
`;
const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60px;
`;
const CategoryDeleteBtn = styled.div`
  background-color: red;
  transform: rotate(45deg);
  box-sizing: border-box;
  float: left;
  width: 25px;
  height: 25px;
  color: #fff;
  font-size: 25px;
  text-decoration: none;
  text-align: center;
  line-height: 18px;
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
`;

interface TodoInputShowProps {
  todoInputShow: boolean;
}

const TodoPopBtn = styled.div<TodoInputShowProps>`
  box-sizing: border-box;
  float: left;
  width: 25px;
  height: 25px;
  color: #fff;
  background-color: #0e75f8;
  font-size: 40px;
  text-decoration: none;
  text-align: center;
  line-height: 9px;
  border: 2px solid #fff;
  border-radius: 50%;
  right: 35px;
  transform: ${({ todoInputShow }) =>
    todoInputShow ? `rotate(-90deg)` : `rotate(90deg)`};
  transition: transform 0.2s ease-in-out;
  z-index: 1;
  cursor: pointer;
`;

const HiddenTodoAddBox = styled.form`
  background-color: #46bdf9;
  height: 35px;
  transition: 0.2s ease-in-out;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
interface TodoProps {
  todo: string;
}
const TodoAddBtn = styled.button<TodoProps>`
  background-color: #ff9100;
  background-color: ${({ todo }) => (todo.length > 1 ? `#0E75F8` : "#ff9100")};
  box-sizing: border-box;
  float: left;
  width: 25px;
  height: 25px;
  color: #fff;
  font-size: 25px;
  text-decoration: none;
  text-align: center;
  line-height: 17px;
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
`;

const TodoList = styled.div`
  border-top: solid white 1.5px;
  height: 35px;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const DoneBtn = styled.div`
  box-sizing: border-box;
  float: left;
  width: 18px;
  height: 18px;
  color: #fff;
  text-align: center;
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
`;
const Todo = styled.div`
  margin-left: 10px;
  width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
`;
const TodoBtn = styled.div`
  margin-left: 20px;
`;

const DeleteBtn = styled.div`
  background-color: red;
  transform: rotate(45deg);
  box-sizing: border-box;
  float: left;
  width: 25px;
  height: 25px;
  color: #fff;
  font-size: 25px;
  text-decoration: none;
  text-align: center;
  line-height: 19px;
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
`;

const TopBox = styled.div`
  /* border: solid red 1px; */
  height: 60px;
`;
interface CategoryInputShowProps {
  categoryInputShow: boolean;
}
const HiddenAddBtn = styled.div<CategoryInputShowProps>`
  position: relative;
  text-align: center;
  border-radius: 30px;
  background-color: #fff;
  width: ${({ categoryInputShow }) => (categoryInputShow ? "200px" : "40px")};
  height: 40px;
  transition: ${({ categoryInputShow }) =>
    categoryInputShow
      ? `.5s ease-in-out`
      : `width .3s .5s ease-in-out, height .5s ease-in-out`};
`;

const AddEventBtn = styled.div<CategoryInputShowProps>`
  position: absolute;
  box-sizing: border-box;
  float: left;
  width: 40px;
  height: 40px;
  margin: 0 10px 0 0;
  color: #fff;
  background-color: #ff6f00;
  font-size: 35px;
  text-decoration: none;
  text-align: center;
  line-height: 28px;
  border: 5px solid #fff;
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  right: ${({ categoryInputShow }) => (categoryInputShow ? "-10px" : null)};
  cursor: pointer;
  padding: 0;
`;
const AddEventBtnHidden = styled.button`
  position: absolute;
  box-sizing: border-box;
  float: left;
  width: 40px;
  height: 40px;
  margin: 0 10px 0 0;
  color: #fff;
  background-color: #0e75f8;
  font-size: 35px;
  text-decoration: none;
  text-align: center;
  line-height: 28px;
  border: 5px solid #fff;
  border-radius: 50%;
  right: -10px;
  z-index: 1;
  cursor: pointer;
`;

const AddCategory = styled.div<CategoryInputShowProps>`
  /* border: solid red 1px; */
  margin: 0;
  height: 40px;
  padding: 8px 29px 0 0;
  line-height: 1.25;
`;
//Dday
const DayTextBox = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  background-image: url(${textbox});
  background-repeat: no-repeat;
  z-index: 99;
  top: 240px;
  right: 400px;
  padding: 35px;
`;
const DdayTextBoxCloseBtn = styled.div`
  width: 210px;
  height: 30px;
  margin: auto;
  color: black;
  cursor: pointer;
`;
const DdayTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  border-bottom: solid black 2px;
  margin: auto;
  width: 100px;
`;
const DdayCLoseBtn = styled.div`
  position: absolute;
  top: 25px;
  right: 30px;
  z-index: 2;
`;

const DdayInputBox = styled.div`
  width: 200px;
  height: 100px;
  margin: auto;
  padding-top: 5px;
`;
const DToday = styled.div`
  text-align: center;
  color: black;
  font-size: 20px;
  span {
    margin-left: 5px;
    color: red;
  }
`;
const DdayInput = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const DdayInputBtn = styled.div`
  margin-top: 5px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin: 0 10px;
    height: 23px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
    padding: 0 5px;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: "DungGeunMo";
    font-size: 16px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);
    border: 1px solid black;
    line-height: 12px;
  }
`;
