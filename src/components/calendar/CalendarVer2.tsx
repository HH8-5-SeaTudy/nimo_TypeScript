import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import moment from "moment";
import Input from "../../elements/Input";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
// import { updateDate,selectDate } from '../../redux/modules/searchDate';
import {
  getAllTodo,
  __postCategory,
  __getDateTodo,
  __postTodo,
  __deleteTodo,
  __doneTodo,
  __editCategory,
  __deleteCategory,
} from "../../redux/modules/dateTodos";
import { __getDday, __postDday } from "../../redux/modules/dday";
import calBg from "../../assets/pixel/calBg.png";
import left from "../../assets/pixel/left.png";
import right from "../../assets/pixel/right.png";
import textbox from "../../assets/pixel/textbox.png";
import SideBarVer2 from "../sidebar/SideBarVer2";

export type Iresault = {
  result: [];
};

const CalendarVer2 = () => {
  const dispatch = useAppDispatch();
  const allTodos = useAppSelector((state) => state.dateTodos.allTodos);
  // const date = useAppSelector((state) => state.updateDate.date);//컴포넌트분리시사용
  const dateTodos = useAppSelector((state) => state.dateTodos.dateTodos);
  const DdayData = useAppSelector((state) => state.dday.DdayData);

  //Calendar
  //오늘 날짜 저장
  const [getMoment, setMoment] = useState(moment());
  const [DD, setDD] = useState("");
  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();
  const radius = 48;
  const diameter = 2 * Math.PI * radius;

  const dateSubmitHandler = (selectDD: string) => {
    // dispatch(selectDate(selectDD)) //컴포넌트분리시사용
    setDD(selectDD);
  };

  //TodoList
  const [categoryInputShow, setCategoryInputShow] = useState(false);
  const [todoInputShow, setTodoInputShow] = useState<any>([
    false,
    false,
    false,
    false,
  ]);
  const [editCategoryShow, setEditCategoryShow] = useState(false);
  const [DdayShow, setDdayShow] = useState(false);
  const [category, setCategory] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [todo, setTodo] = useState("");
  const [ddayTitle, setDdayTitle] = useState("");

  const todoBoxIndex = (index: number) => {
    let temp = [...todoInputShow];
    temp[index] = !temp[index];
    setTodoInputShow(temp);
  };

  const onSubmitHandler = () => {
    if (category.length < 2) {
      alert("2글자 이상 입력");
    }
    if (dateTodos.length < 4)
      dispatch(__postCategory({ categoryName: category, selectDate: DD }));
    else {
      alert("4개까지만 생성가능");
    }
    setCategory("");
  };

  const onChangeCategoryInput = (e: any) => {
    setCategory(e.target.value);
  };
  const onSubmitTodoHandler = (id: any) => {
    if (todo.length < 4) {
      alert("너무 짧습니다");
      return;
    }
    dispatch(
      __postTodo({
        categoryId: id,
        selectDate: DD,
        content: todo,
      })
    );
  };
  const onChangeTodoInput = (e: any) => {
    setTodo(e.target.value);
  };

  const onSubmitEditHandler = (id: any) => {
    dispatch(
      __editCategory({
        categoryName: editCategory,
        categoryId: id,
      })
    );
    setEditCategoryShow(false);
  };

  //D-day
  const onSubmitDdayHandler = () => {
    dispatch(__postDday({ title: ddayTitle, ddayDate: DD }));
    setDdayTitle("");
  };

  useEffect(() => {
    // dispatch(updateDate(today.format("YYYY-MM-DD")));//컴포넌트분리시사용
    setDD(today.format("YYYY-MM-DD"));
    dispatch(getAllTodo());
    dispatch(__getDday());
  }, []);

  useEffect(() => {
    // dispatch(__getDateTodo(date)); //컴포넌트분리시사용
    if (DD === "") {
      return;
    }
    dispatch(__getDateTodo(DD));
  }, [DD]);

  const calendarArr = () => {
    let result: any = [];
    let week = firstWeek;

    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <CalendarRow key={week}>
          {Array(7)
            ?.fill(0)
            ?.map((data, index) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");
              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  //오늘
                  <CalendarCel
                    key={index}
                    onClick={() => dateSubmitHandler(days.format("YYYY-MM-DD"))}
                  >
                    {allTodos.find(
                      (list) => list.selectDate == days.format("YYYY-MM-DD")
                    ) &&
                      allTodos
                        .filter(
                          (x) => x.selectDate == days.format("YYYY-MM-DD")
                        )
                        .map((y) => y.todoList.length)
                        .reduce((a, b) => a + b, 0) !== 0 && (
                        <svg width="75" height="75" viewBox="0 0 200 200">
                          <circle
                            cx="100"
                            cy="100"
                            r="48"
                            fill="transparent"
                            stroke="beige"
                            strokeWidth="90"
                          />
                          <AnimatedCircle
                            cx="100"
                            cy="100"
                            r="48"
                            fill="transparent"
                            stroke="#f6730e"
                            strokeWidth="90"
                            strokeDasharray={`${
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate == days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done == 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                              allTodos
                                .filter(
                                  (x) =>
                                    x.selectDate == days.format("YYYY-MM-DD")
                                )
                                .map((y) => y.todoList.length)
                                .reduce((a, b) => a + b, 0)
                            } ${
                              diameter -
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate == days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done == 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate == days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList.length)
                                  .reduce((a, b) => a + b, 0)
                            }`}
                            strokeDashoffset={diameter * 0.25}
                          />
                        </svg>
                      )}
                    <P style={{ backgroundColor: "#ff6f00" }}>
                      {days.format("D")}
                    </P>
                  </CalendarCel>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  //이전달//다음달
                  <CalendarCel
                    key={index}
                    onClick={() => dateSubmitHandler(days.format("YYYY-MM-DD"))}
                  >
                    {allTodos.find(
                      (list) => list.selectDate == days.format("YYYY-MM-DD")
                    ) &&
                      allTodos
                        .filter(
                          (x) => x.selectDate == days.format("YYYY-MM-DD")
                        )
                        .map((y) => y.todoList.length)
                        .reduce((a, b) => a + b, 0) !== 0 && (
                        <svg width="75" height="75" viewBox="0 0 200 200">
                          <circle
                            cx="100"
                            cy="100"
                            r="48"
                            fill="transparent"
                            stroke="beige"
                            strokeWidth="90"
                          />
                          <AnimatedCircle
                            cx="100"
                            cy="100"
                            r="48"
                            fill="transparent"
                            stroke="#46BDF9"
                            strokeWidth="90"
                            strokeDasharray={`${
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate == days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done == 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                              allTodos
                                .filter(
                                  (x) =>
                                    x.selectDate == days.format("YYYY-MM-DD")
                                )
                                .map((y) => y.todoList.length)
                                .reduce((a, b) => a + b, 0)
                            } ${
                              diameter -
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate == days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done == 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate == days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList.length)
                                  .reduce((a, b) => a + b, 0)
                            }`}
                            strokeDashoffset={diameter * 0.25}
                          />
                        </svg>
                      )}
                    <P style={{ backgroundColor: "#46befa" }}>
                      {days.format("D")}
                    </P>
                  </CalendarCel>
                );
              } else {
                //전체날짜
                return (
                  <CalendarCel
                    key={index}
                    onClick={() => dateSubmitHandler(days.format("YYYY-MM-DD"))}
                  >
                    {allTodos.find(
                      (list) => list.selectDate == days.format("YYYY-MM-DD")
                    ) &&
                      allTodos
                        .filter(
                          (x) => x.selectDate == days.format("YYYY-MM-DD")
                        )
                        .map((y) => y.todoList.length)
                        .reduce((a, b) => a + b, 0) !== 0 && (
                        <svg width="75" height="75" viewBox="0 0 200 200">
                          <circle
                            cx="100"
                            cy="100"
                            r="48"
                            fill="transparent"
                            stroke="beige"
                            strokeWidth="90"
                          />
                          <AnimatedCircle
                            cx="100"
                            cy="100"
                            r="48"
                            fill="transparent"
                            stroke="#0E75F8"
                            strokeWidth="90"
                            strokeDasharray={`${
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate == days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done == 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                              allTodos
                                .filter(
                                  (x) =>
                                    x.selectDate == days.format("YYYY-MM-DD")
                                )
                                .map((y) => y.todoList.length)
                                .reduce((a, b) => a + b, 0)
                            } ${
                              diameter -
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate == days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done == 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate == days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList.length)
                                  .reduce((a, b) => a + b, 0)
                            }`}
                            strokeDashoffset={diameter * 0.25}
                          />
                        </svg>
                      )}
                    <Cel></Cel>
                    <P>{days.format("D")}</P>
                  </CalendarCel>
                );
              }
            })}
        </CalendarRow>
      );
    }
    return result;
  };
  return (
    <>
      {/* <SideBarVer2></SideBarVer2> */}
      <Layer>
        <Wrapper>
          <Calendar>
            {DdayShow && (
              <DayTextBox>
                <DdayTextBoxCloseBtn>
                  <Dtoday>{DD}</Dtoday>
                  <div onClick={() => setDdayShow(false)}>닫기</div>
                </DdayTextBoxCloseBtn>
                <DdayInputBox>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      onSubmitDdayHandler();
                    }}
                  >
                    <DdayInput>
                      <Input
                        type="text"
                        onChange={(e) => setDdayTitle(e.target.value)}
                        border="solid black 3px"
                        outline="none"
                        height="30px"
                      />
                    </DdayInput>
                    <DdayInputBtn>
                      <button>등록</button>
                    </DdayInputBtn>
                  </form>
                </DdayInputBox>
              </DayTextBox>
            )}
            <CalendarRight>
              <Main>
                <CalendarRow>
                  <CalendarCol>SUN</CalendarCol>
                  <CalendarCol>MON</CalendarCol>
                  <CalendarCol>TUE</CalendarCol>
                  <CalendarCol>WED</CalendarCol>
                  <CalendarCol>THU</CalendarCol>
                  <CalendarCol>FRI</CalendarCol>
                  <CalendarCol>SAT</CalendarCol>
                </CalendarRow>
                {calendarArr()}
              </Main>
            </CalendarRight>
            <LeftLayer>
              <MonthYear>
                <YearBox>
                  <PrevBtn
                    src={left}
                    onClick={() => {
                      setMoment(getMoment.clone().subtract(1, "year"));
                    }}
                  ></PrevBtn>
                  <TodayYear>{today.format("YYYY")}</TodayYear>
                  <NextBtn
                    src={right}
                    onClick={() => {
                      setMoment(getMoment.clone().add(1, "year"));
                    }}
                  ></NextBtn>
                </YearBox>
                <Month>
                  <PrevBtn
                    src={left}
                    onClick={() => {
                      setMoment(getMoment.clone().subtract(1, "month"));
                    }}
                  ></PrevBtn>
                  <TodayMon> {today.format("MMMM")}</TodayMon>
                  <NextBtn
                    src={right}
                    onClick={() => {
                      setMoment(getMoment.clone().add(1, "month"));
                    }}
                  ></NextBtn>
                </Month>
              </MonthYear>
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
                          onChange={onChangeCategoryInput}
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
                  <DayBtn onClick={() => setDdayShow(true)}></DayBtn>
                  <Today>{DD.slice(-2)}</Today>
                </TopBox>
                <LeftSideDay>
                  <DdayList>
                    {DdayData &&
                      DdayData.map((list, index) => (
                        <>
                          <Dday key={list.ddayId}>
                            <div>{list.title}</div>
                            <p>
                              D
                              {list.targetDay == DD
                                ? "day"
                                : list.targetDay > DD
                                ? list.dday
                                : "+" + list.dday}
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
                                onChange={(e) =>
                                  setEditCategory(e.target.value)
                                }
                                type="text"
                                defaultValue={list.categoryName}
                                backgroundColor="#388FFF"
                                border="none"
                                outline="none"
                                color="white"
                                fontSize="20px"
                                fontWeight="700"
                                width="150px"
                                cursor="pointer"
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
                                onSubmitTodoHandler(list.categoryId);
                              }}
                            >
                              <Input
                                type="text"
                                onChange={onChangeTodoInput}
                                width="250px"
                              />
                              <TodoAddBtn todo={todo}>+</TodoAddBtn>
                            </HiddenTodoAddBox>
                          )}
                          {list.todoList &&
                            list.todoList.map((item) => (
                              <TodoList key={item.todoId}>
                                <DoneBtn
                                  style={{
                                    backgroundColor:
                                      item.done === 1
                                        ? "#32de5d"
                                        : "transparent",
                                  }}
                                  onClick={() =>
                                    dispatch(__doneTodo(item.todoId))
                                  }
                                >
                                  {" "}
                                </DoneBtn>
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
            </LeftLayer>
          </Calendar>
        </Wrapper>
      </Layer>
    </>
  );
};

export default CalendarVer2;

const Layer = styled.div`
  border: solid red 5px;
  margin: auto;
  height: 850px;
  width: 1350px;
  color: #ffffff;
  background-image: url(${calBg});
  background-repeat: no-repeat;
  background-size: 1200px 700px;
  background-position: center;
`;

const MonthYear = styled.div`
  background-color: #388fff;
  /* border: solid black 3px; */
  height: 70px;
  border-radius: 6px;
  margin: 20px 20px 0 20px;
  display: flex;
  justify-content: space-around;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`;

const Month = styled.div`
  /* border: solid red 1px; */
  width: 180px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;
const TodayMon = styled.div`
  font-size: 23px;
  font-weight: 700;
`;
const YearBox = styled.div`
  /* border: solid red 1px; */
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  width: 150px;
`;
const TodayYear = styled.div`
  font-size: 23px;
  font-weight: 700;
`;
const PrevBtn = styled.img`
  width: 20px;
  height: 30px;
  cursor: pointer;
`;
const NextBtn = styled.img`
  width: 20px;
  height: 30px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  top: 117px;
  display: block;
  position: relative;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  color: #ffffff;
`;
const DayTextBox = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  background-image: url(${textbox});
  z-index: 5;
  top: 180px;
  padding: 35px;
`;
const DdayTextBoxCloseBtn = styled.div`
  width: 230px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  color: black;
  text-align: end;
  cursor: pointer;
`;
const Dtoday = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
const DdayInputBox = styled.div`
  width: 200px;
  height: 100px;
  margin: auto;
`;
const DdayInput = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const DdayInputBtn = styled.div`
  margin-top: 20px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Calendar = styled.div`
  /* border: solid red 1px; */
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  height: 600px;
`;

const CalendarLeft = styled.div`
  /* border: solid red 3px; */
  position: relative;
  width: 350px;
  padding: 20px;
  background-color: #388fff;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
  margin: 20px;
  border-radius: 6px;
  display: block;
  height: 700px;
`;
const DayBtn = styled.div`
  position: absolute;
  border-radius: 5px 15px 15px 5px;
  border: solid white 2px;
  width: 15px;
  height: 15px;
  background-color: red;
  top: 7px;
  right: 24px;
  cursor: pointer;
  z-index: 3;
`;

const Today = styled.div`
  /* border:solid red 1px; */
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
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  max-height: 400px;
`;
const DdayList = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  font-weight: 500;
`;
const Dday = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  line-height: 19px;
  div {
    font-size: 15px;
    color: black;
  }
  p {
    color: white;
    font-size: 20px;
    margin: 0 5px 0 2px;
    font-weight: 700;
  }
`;
const DayTextBoxEdit = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background-image: url(${textbox});
  z-index: 5;
  top: 0px;
  padding: 35px;
`;

const TodoListBox = styled.div`
  margin-top: 10px;
  border: solid #000 3px;
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
  background-color: #f6730e;
  background-color: ${({ todo }) => (todo.length > 1 ? `#0E75F8` : "#f6730e")};
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
`;
const TodoBtn = styled.div`
  /* border:solid red 1px; */
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
const CalendarRight = styled.div`
  /* border: solid red 3px; */
  position: relative;
  width: calc(80% - 300px);
  padding-bottom: 65%;
  overflow: hidden;
  margin: 20px;
  padding: 10px;
  background-color: #388fff;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
  border-radius: 6px;
  display: block;
`;
const Main = styled.div`
  /* border: solid red 3px; */
  left: -0.00070796%;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const CalendarRow = styled.div`
  display: flex;
  justify-content: flex-start;
  font-weight: 700;
  font-size: 20px;
`;
const CalendarCol = styled.div`
  width: calc(100% / 7);
  text-align: center;
  height: 50px;
  line-height: 50px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const CalendarCel = styled.div`
  position: relative;
  width: calc(100% / 7);
  height: 75px;
  text-align: center;
  cursor: pointer;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Cel = styled.div`
  display: block;
  padding-top: 100%;
`;

const P = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  position: absolute;
  margin: 0;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #1175f8;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 3px 3px 3px 0.5px rgba(1, 1, 1, 0.5);
  font-weight: 700;
`;

const LeftLayer = styled.div`
  /* border: solid red 3px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const animation = keyframes`
   0% {
        stroke-dasharray: 0 ${2 * Math.PI * 48};
      }
  `;

const AnimatedCircle = styled.circle`
  animation: ${animation} 3s ease;
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
