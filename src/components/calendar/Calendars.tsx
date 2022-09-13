import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "./CalendarEl.css";
import Calendar from "react-calendar";
import moment from "moment";
import { updateDate } from "../../redux/modules/searchDate";
import { getAllTodo } from "../../redux/modules/allTodos";
import styled from "styled-components";
import { RootState } from "../../redux/config/configStore";
import { lstat } from "fs/promises";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { ITodos } from "../../api";

const Calendars = () => {
  const dispatch = useAppDispatch();

  const [value, onChange] = useState(new Date());

  const allTodos = useAppSelector((state) => state.dateTodos.dateTodos);
  const todoLength = useAppSelector((state) => state.allTodos.allTodos);

  // console.log("todos", allTodos, todoLength);

  useEffect(() => {
    dispatch(updateDate(moment(value).format("YYYY-MM-DD")));
  }, [value]);

  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  interface todoObject {
    todoObject: string;
  }

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
          tileContent={({ date, view }) => {
            // 날짜 타일에 컨텐츠 추가하기 (html 태그)
            // 추가할 html 태그를 변수 초기화
            let html = [];
            // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
            const todoDone = allTodos.map((list) => {
              return list.todoList.filter((item) => item.done).length;
            });

            const todoObject = allTodos.map((list, index) => {
              return (
                list.selectDate === moment(date).format("YYYY-MM-DD") &&
                todoDone[index] === list.todoList.length &&
                `a`
              );
            });
            console.log("todoDone", todoDone);

            /// 카테고리 날짜가 달력의 날짜랑 일치
            /// 카테고리 안에 todolist의 done: 1 의 갯수가 전체 투두리스트 길의와 같으면
            // 달력에 점을 찍어라.
            console.log("todoObject", todoObject.length);

            html.push(todoObject);
            return <>{<Test>{html}</Test>}</>;
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
  display: flex;
`;

const ContentBox = styled.div`
  width: 60px;
  height: 10px;
  font-size: 20px;
  margin-top: 5px;
`;
