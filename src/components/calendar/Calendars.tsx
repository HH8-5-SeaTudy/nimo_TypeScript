import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { updateDate } from '../../redux/modules/updateDate'
// import { postTodo } from "../../redux/modules/todos";
// import { getTodo } from "../../redux/modules/todos";
// import { deleteTodo } from "../../redux/modules/todos";
// import { editTodo } from "../../redux/modules/todos";
// import { doneTodo } from "../../redux/modules/todos";

import "react-calendar/dist/Calendar.css";
import styled from 'styled-components';

const Calendars = () => {
  const dispatch = useDispatch();

  // const { todos } = useSelector((state) => state.todos);
 // 메인화면 유즈이펙트로 바로 오늘 날짜 디스패치로 리덕스에 저장
 //
  const [value, onChange] = useState(new Date());


  // const [todo, setTodo] = useState("");

  // const [editTodoContent, setEditTodoContent] = useState("");

  // const todoList = {
  //   selectDate: moment(value).format("YYYY-MM-DD"),
  //   content: todo,
  // };

  // const onSubmitHandler = () => {
  //   dispatch(postTodo(todoList));
  //   setTodo("");
  //   postTodo();
  // };

  // const editHandler = (id:string) => {
  //   dispatch(
  //     editTodo({
  //       id: id,
  //       content: editTodoContent,
  //     })
  //   );
  // };
  // const doneHandler = (id:string) => {
  //   dispatch(doneTodo(id));
  // };

  useEffect(() => {
    dispatch(updateDate(moment(value).format("YYYY-MM-DD")));
  }, [value]);

  return (
    <Layer>
      <div>   
        {moment(value).format("YYYY년 MM월 DD일")}
        <Calendar
          onChange={onChange}
          prev2Label={null}
          next2Label={null}
          value={value}
          
          calendarType={"US"}
          // showNeighboringMonth={false}
          formatDay={(locale:any, date:any) => moment(date).format("DD")}
          tileContent={({ }) => {
            let html : any = [];
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

     
        {/* <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler();
          }}
        >
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">등록</button>
        </form> */}
        {/* {todos.map((list) => (
          <div key={list.id}>
            {list.selecteDate === moment(value).format("YYYY년 MM월 DD일") ? (
              <div>
                {list.content}

                <input
                  type="text"
                  defaultValue={list.content}
                  onChange={(e) => setEditTodoContent(e.target.value)}
                />

                <button onClick={() => dispatch(deleteTodo(list.id))}>
                  삭제
                </button>

                <button onClick={() => editHandler(list.id)}>수정</button>
                <button onClick={() => doneHandler(list.id)}>완료</button>
              </div>
            ) : null}
          </div>
        ))} */}
      </div>
    </Layer>
  );
};

export default React.memo(Calendars);

const Layer = styled.section`
  width: 350px;
  height: 400px;
  border: solid blue 3px;
`