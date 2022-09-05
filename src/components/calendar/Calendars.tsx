import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { postTodo } from "../../redux/modules/todos";
// import { getTodo } from "../../redux/modules/todos";
// import { deleteTodo } from "../../redux/modules/todos";
import { editTodo } from "../../redux/modules/todos";
import { doneTodo } from "../../redux/modules/todos";

import "react-calendar/dist/Calendar.css";

const Calendars = () => {
  const dispatch = useDispatch();

  // const { todos } = useSelector((state) => state.todos);

  const [value, onChange] = useState(new Date());

  const [todo, setTodo] = useState("");

  const [editTodoContent, setEditTodoContent] = useState("");

  const todoList = {
    selectDate: moment(value).format("YYYY-MM-DD"),
    content: todo,
  };

  const onSubmitHandler = () => {
    dispatch(postTodo(todoList));
    setTodo("");
    postTodo();
  };

  const editHandler = (id:string) => {
    dispatch(
      editTodo({
        id: id,
        content: editTodoContent,
      })
    );
  };
  const doneHandler = (id:string) => {
    dispatch(doneTodo(id));
  };

  useEffect(() => {
    // dispatch(getTodo(moment(value).format("YYYY-MM")));
  }, []);

  return (
    <div>
      <div>
        <Calendar
          onChange={onChange}
          value={value}
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

        {moment(value).format("YYYY년 MM월 DD일")}
        <form
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
        </form>
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
    </div>
  );
};

export default React.memo(Calendars);
