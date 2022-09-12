import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "./CalendarEl.css";
import Calendar from "react-calendar";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { updateDate } from "../../redux/modules/searchDate";
import { getAllTodo,  } from "../../redux/modules/allTodos";
import styled from "styled-components";
import { RootState } from "../../redux/config/configStore";
import { lstat } from 'fs/promises';

const Calendars = () => {
  const dispatch = useDispatch();

  const [value, onChange] = useState(new Date());

  const allTodos = useSelector((state: RootState) => state.allTodos.allTodos);

  console.log("todos", allTodos);

  useEffect(() => {
    dispatch(updateDate(moment(value).format("YYYY-MM-DD")));
  }, [value]);

  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  return (
    <Layer>
      <p>{moment(value).format("YYYY년 MM월 DD일")}</p>
      <div>
        <Calendar
          onChange={onChange}
          prev2Label={null}
          next2Label={null}
          value={value}
          calendarType={"US"}
          // showNeighboringMonth={false}
          formatDay={(locale: any, date: any) => moment(date).format("D")}
          tileContent={({ date, view }) => { // 날짜 타일에 컨텐츠 추가하기 (html 태그)
            // 추가할 html 태그를 변수 초기화
            let html = [];
            // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
            const aa = allTodos.map((list)=>list.selectDate  === moment(date).format("YYYY-MM-DD")
            ? list.todoList.map((item:any)=> item.done === 1 ? <ContentBox>💚</ContentBox> : null) : null)
            
            html.push(aa)
            return (
              <>
                <Test>{html}</Test>
              </>
            );
          }}
        />
      </div>
    </Layer>
  );
};

export default Calendars;

const Layer = styled.div`
  position: relative;
  p {
  }
  div {
  }
`;

const Test = styled.div`
  display:flex;
`

const ContentBox = styled.div`
  width: 60px;
  height:10px;
  font-size: 20px;
  margin-top: 5px;
  position:absolute;
`