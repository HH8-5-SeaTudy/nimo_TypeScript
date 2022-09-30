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
import {
  __deleteDday,
  __editDday,
  __getDday,
  __postDday,
} from "../../redux/modules/dday";
import left from "../../assets/pixel/left.png";
import right from "../../assets/pixel/right.png";
import textbox from "../../assets/pixel/textbox.png";
import ok from "../../assets/pixel/ok.png";

export type Iresault = {
  result: [];
};

const CalendarVer2 = () => {
  const dispatch = useAppDispatch();
  const allTodos = useAppSelector((state) => state.dateTodos.allTodos);
  // const date = useAppSelector((state) => state.updateDate.date);//컴포넌트분리시사용
  const dateTodos = useAppSelector((state) => state.dateTodos.dateTodos);
  const DdayData = useAppSelector((state) => state.dday.DdayData);
  const DdayRed = DdayData.map((d)=>d.targetDay)
  console.log(DdayRed)
  //
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
  const [todo, setTodo] = useState(['','','','']);
  const [ddayTitle, setDdayTitle] = useState("");
  const [selectDdayID, setSelectDdayID] = useState<number>();
  const [DdayEditTitle, setDdayEditTitle] = useState(""); 


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
  const onSubmitTodoHandler = (id: any,i : number) => {
    if (todo[i].length < 4) {
      alert("너무 짧습니다");
      return;
    }
    dispatch(
      __postTodo({
        categoryId: id,
        selectDate: DD,
        content: todo[i],
      })
    );
    const tempData = [...todo];
    tempData[i] = '';
    setTodo([...tempData]);
    console.log(inputRef,i);
  };
  const onChangeTodoInput = (e: any,i : number) => {
    const tempData = [...todo];
    tempData[i] = e.target.value;
    setTodo([...tempData]);
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
  const onSubmitEditDataHandler = (id: number) => {
    setSelectDdayID(id);
    setDdayShow(false);
    setDdayEditShow(true);
  };
  const selectDdayData = DdayData.filter((x) => x.ddayId === selectDdayID);

  const onSubmitDdayEditHandler = (id: number, targetDay: string) => {
    dispatch(
      __editDday({
        title: DdayEditTitle,
        targetDay: targetDay,
        id,
      })
    );
  };


  //useEffect
  useEffect(() => {
    // dispatch(updateDate(today.format("YYYY-MM-DD")));//컴포넌트분리시사용
    setDD(today.format("YYYY-MM-DD"));
    dispatch(getAllTodo());
  }, []);

  useEffect(() => {
    // dispatch(__getDateTodo(date)); //컴포넌트분리시사용
    if (DD == "") {
      return;
    }
    dispatch(__getDateTodo(DD));
    dispatch(__getDday(DD));
  }, [DD]);

  console.log(DdayShow)
  const calendarArr = () => {
    let result: any = [];

    for (let week = firstWeek; week <= lastWeek; week++) {
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
                      (list) => list.selectDate === days.format("YYYY-MM-DD")
                    ) &&
                      allTodos
                        .filter(
                          (x) => x.selectDate === days.format("YYYY-MM-DD")
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
                            stroke={DdayRed.find((d)=> d === days.format("YYYY-MM-DD")) === days.format("YYYY-MM-DD") ?  'red' :"#ff9100"}
                            strokeWidth="90"
                            strokeDasharray={`${
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done === 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                              allTodos
                                .filter(
                                  (x) =>
                                    x.selectDate === days.format("YYYY-MM-DD")
                                )
                                .map((y) => y.todoList.length)
                                .reduce((a, b) => a + b, 0)
                            } ${
                              diameter -
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done === 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList.length)
                                  .reduce((a, b) => a + b, 0)
                            }`}
                            strokeDashoffset={diameter * 0.25}
                          />
                        </svg>
                      )}
                    <P style={{ backgroundColor: DdayRed.find((d)=> d === days.format("YYYY-MM-DD")) === days.format("YYYY-MM-DD") ?  'red' :"#ff9100"}}>
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
                      (list) => list.selectDate === days.format("YYYY-MM-DD")
                    ) &&
                      allTodos
                        .filter(
                          (x) => x.selectDate === days.format("YYYY-MM-DD")
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
                            stroke={DdayRed.find((d)=> d === days.format("YYYY-MM-DD")) === days.format("YYYY-MM-DD") ?  'red' :"#00D7FF"}
                            strokeWidth="90"
                            strokeDasharray={`${
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done === 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                              allTodos
                                .filter(
                                  (x) =>
                                    x.selectDate === days.format("YYYY-MM-DD")
                                )
                                .map((y) => y.todoList.length)
                                .reduce((a, b) => a + b, 0)
                            } ${
                              diameter -
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done === 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList.length)
                                  .reduce((a, b) => a + b, 0)
                            }`}
                            strokeDashoffset={diameter * 0.25}
                          />
                        </svg>
                      )}
                    <P style={{ backgroundColor: DdayRed.find((d)=> d === days.format("YYYY-MM-DD")) === days.format("YYYY-MM-DD") ?  'red' :"#00D7FF" }}>
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
                      (list) => list.selectDate === days.format("YYYY-MM-DD")
                    ) &&
                      allTodos
                        .filter(
                          (x) => x.selectDate === days.format("YYYY-MM-DD")
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
                            stroke={DdayRed.find((d)=> d === days.format("YYYY-MM-DD")) === days.format("YYYY-MM-DD") ?  'red' :"#1175f8"}
                            strokeWidth="90"
                            strokeDasharray={`${
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done === 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                              allTodos
                                .filter(
                                  (x) =>
                                    x.selectDate === days.format("YYYY-MM-DD")
                                )
                                .map((y) => y.todoList.length)
                                .reduce((a, b) => a + b, 0)
                            } ${
                              diameter -
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done === 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList.length)
                                  .reduce((a, b) => a + b, 0)
                            }`}
                            strokeDashoffset={diameter * 0.25}
                          />
                        </svg>
                      )}
                    <Cel></Cel>
                    <P style={{ backgroundColor: DdayRed.find((d)=> d === days.format("YYYY-MM-DD")) === days.format("YYYY-MM-DD") ?  'red' :"#1175f8" }}>
                      {days.format("D")}</P>
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
      <Layer>
        <Wrapper>
          <CalendarTitle>
            <ATtile>CALENDAR</ATtile>
            <BTtile>TO DO LIST</BTtile>
          </CalendarTitle>
          <Calendar>
            {/* DdayModal */}
            {DdayShow && (
              <DayTextBox>
                <DdayTextBoxCloseBtn>
                  <DdayTitle>ADD D-DAY</DdayTitle>
                  <DdayCLoseBtn onClick={() => setDdayShow(false)}>X</DdayCLoseBtn>
                </DdayTextBoxCloseBtn>
                <DdayInputBox>
                  <DToday>{DD}</DToday>
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
                        onChange={(e) => setDdayTitle(e.target.value)}
                        border="solid black 2px"
                        outline="none"
                        height="30px"
                      />
                    </DdayInput>
                    <DdayInputBtn>
                      <div onClick={()=>{
                      onSubmitDdayHandler();
                      setDdayShow(false);}}>등록</div>
                    </DdayInputBtn>
                  </form>
                </DdayInputBox>
              </DayTextBox>
            )}
            {/* DdayEditModal */}
            {DdayEditShow &&
              selectDdayData?.map((list) => (
                <DayTextBox>
                <DdayTextBoxCloseBtn>
                <DdayTitle>EDIT D-DAY</DdayTitle>
                  <DdayCLoseBtn onClick={() => setDdayEditShow(false)}>X</DdayCLoseBtn>
                </DdayTextBoxCloseBtn>
                <DdayInputBox>
                <DToday>{DD}
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
                          onChange={(e) => setDdayEditTitle(e.target.value)}
                          border="solid black 2px"
                          outline="none"
                          height="30px"
                          defaultValue={list.title}
                        />
                        </DdayInput>
                  <DdayInputBtn>
                        <div onClick={()=>{onSubmitDdayEditHandler(list.ddayId, list.targetDay)
                        setDdayEditShow(false)}}>수정</div>
                        <div
                          onClick={() => {
                            dispatch(__deleteDday(list.ddayId))
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

            {/* 달력 */}
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
                  <DayBtn
                    onClick={() => {
                      setDdayShow(true);
                      setDdayEditShow(false);
                    }}
                  ></DayBtn>
                  <Today>{DD.slice(-2)}</Today>
                </TopBox>
                <LeftSideDay >
                  {/* 디데이 */}
                  <DdayList>
                    {DdayData &&
                      DdayData.map((list) => (
                        <>
                          <Dday
                            key={list.ddayId}
                            onClick={() => onSubmitEditDataHandler(list.ddayId)}
                          >
                            <div>{list.title}</div>
                            <p>
                              D
                              {list.dday == 0
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
                        <TodoListBox key={list.categoryId} >
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
                                backgroundColor="#0096FF"
                                border="none"
                                outline="none"
                                color="black"
                                fontSize="20px"
                                width="150px"
                                cursor="pointer"
                                fontFamily= "DungGeunMo"
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
                                onSubmitTodoHandler(list.categoryId,index);
                              }}
                            >
                              <Input
                                type="text"
                                
                                ref={(el:any)=>(inputRef.current[index]=el)}
                                onChange={(e)=>{onChangeTodoInput(e,index)}}
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
                                      item.done === 1
                                        ? "#32de5d"
                                        : "transparent",
                                  }}
                                  onClick={() =>
                                    dispatch(__doneTodo(item.todoId))
                                  }
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
            </LeftLayer>
          </Calendar>
        </Wrapper>
      </Layer>
    </>
  );
};

export default CalendarVer2;

const Layer = styled.div`
  position: absolute;
  left: 300px;
  top: 50px;
  height: 650px;
  width: 1150px;
  color: #ffffff;
  z-index: 20;
`;

const MonthYear = styled.div`
  background-color: #0096ff;
  height: 70px;
  border-radius: 6px;
  margin: 20px 20px 0 20px;
  display: flex;
  justify-content: space-around;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`;

const Month = styled.div`

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
  background-color: #0096FF;
  top: 25px;
  display: block;
  position: relative;
  max-width: 1100px;
  height: 680px;
  width: 100%;
  margin: 0 auto;
  color: #ffffff;
  border-radius: 6px;
  border : solid black 2px;
`;
const CalendarTitle = styled.div`
width:100%;
height: 11%;
display: flex;
justify-content:space-between;
padding: 0 40px 0 40px;
`
const ATtile = styled.div`
background-color:#0096FF;
color: black;

width: 580px;
display: flex;
justify-content: center;
align-items: center;
font-size: 50px;
border-bottom: solid black 2px;
`
const BTtile = styled.div`
background-color:#0096FF;
border-bottom: solid black 2px;
color: black;
width: 350px;
display: flex;
justify-content: center;
align-items: center;
font-size: 50px;
`
const DayTextBox = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  background-image: url(${textbox});
  background-repeat: no-repeat;
  z-index: 99;
  top: 180px;
  padding: 35px;
`;
const DdayTextBoxCloseBtn = styled.div`
  width: 210px;
  height: 30px;
  margin: auto;
  color: black;
  cursor: pointer;
`;
const  DdayTitle =styled.div`
  display: flex;
  justify-content: center;
  font-size : 20px;
  border-bottom: solid black 2px;
  margin: auto;
  width: 100px;
`
const DdayCLoseBtn =styled.div`
 position: absolute;
 top:25px;
 right:30px;
 z-index: 2;
`

const DdayInputBox = styled.div`
  width: 200px;
  height: 100px;
  margin: auto;
  padding-top: 5px;
`;
const DToday = styled.div`
  text-align: center;
  color: black;
  font-size:20px;
  span {
    margin-left: 5px;
    color: red;
  }
`
const DdayInput = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const DdayInputBtn = styled.div`
  border: solid red 1px;
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
//디데이 수정박스
const DayEditTextBox = styled.div`
border : solid red 1px;
  position: absolute;
  width: 300px;
  height: 200px;
  background-image: url(${textbox});
  background-repeat: no-repeat;
  z-index: 5;
  top: 180px;
  padding: 35px;
`;

const Calendar = styled.div`

  display: flex;
  justify-content: space-around;
  flex-direction: row;
  height: 600px;
`;

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
  padding-right:3px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    background-color:transparent;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: white;
  height:5px;

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
  cursor:pointer;
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
const CalendarRight = styled.div`

  position: relative;
  width: calc(80% - 300px);
  padding-bottom: 65%;
  overflow: hidden;
  margin: 20px;
  padding: 10px;
  background-color: #0096ff;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
  border-radius: 6px;
  display: block;
`;
const Main = styled.div`

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
  color: black;
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
