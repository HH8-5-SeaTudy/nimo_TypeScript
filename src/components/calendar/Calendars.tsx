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
          tileContent={({}) => {
            let html: any = [];
            // {
            //   todos.map((list) =>
            //     list.selectDate === moment(date).format("YYYY년 MM월 DD일") &&
            //     list.success === false
            //       ? html.push(
            //           <div
            //             style={{
            //               height: "8px",
            //               width: "8px",
            //               backgroundColor: "red",
            //             }}
            //           ></div>
            //         )
            //       : null
            //   );
            // }
            // {
            //   todos.map((list) =>
            //     list.selectDate === moment(date).format("YYYY년 MM월 DD일") &&
            //     list.success === true
            //       ? html.push(
            //           <div
            //             style={{
            //               height: "8px",
            //               width: "8px",
            //               backgroundColor: "green",
            //             }}
            //           ></div>
            //         )
            //       : null
            //   );
            // }

            return (
              <>
                <div>{html}</div>
              </>
            );
          }}
        />
      </div>
    </Layer>
  );
};

export default React.memo(Calendars);

const Layer = styled.div`
  position: relative;
  p {
  }
  div {
  }
`;
