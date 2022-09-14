import React, { useState, useEffect  } from "react";
import styled from "styled-components";
import moment from "moment";
import { ReactComponent as PlusIcon } from "../../assets/icon/PlusIcon.svg";
import { useAppDispatch,  useAppSelector } from "../../components/hooks/reduxHooks";
import { __getDateTodo } from '../../redux/modules/dateTodos';
import TodoModal from '../../pages/TodoModal';

const TodoSidebar = () => {
  const dispatch = useAppDispatch();
  const date = useAppSelector((state) => state.updateDate.date);
  const dateTodos = useAppSelector((state) => state.dateTodos.dateTodos);

  useEffect(() => {
    dispatch(__getDateTodo(moment(date).format("YYYY-MM-DD")));
  }, [date]);

  const [show, setShow] = useState(false);
  const [modalShow,setModalShow] = useState(false)

  const modalHandler = () => {
    setModalShow(!modalShow)
    setShow(false)
  }

  return (
    <div>
      <TodoSide onClick={() => setShow(!show)}>
        <TodoIconBox>
          <Plus />
        </TodoIconBox>
      </TodoSide>
      <TodoLayer show={show}>
        <CloseBtn onClick={() => setShow(!show)}></CloseBtn>
        <TodoBox>
          <p onClick={()=>{modalHandler()}}>작성하기버튼임</p>
          <div>
          {dateTodos &&
          dateTodos.map((list) => (
            <div key={list.categoryId}>
              <div>
                <p>카테고리이름:{list.categoryName}</p>
              </div>
              <div>
                {list.todoList &&
                  list.todoList.map((item) => (
                    <>
                      <div key={item.todoId}>
                        <p>{item.content}</p>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          ))}
          </div>
        </TodoBox>
      </TodoLayer>
      {modalShow && <TodoModal modalHandler={modalHandler}/>}
    </div>
  );
};

export default TodoSidebar;

const TodoSide = styled.div`
  position: absolute;
  width: 25px;
  height: 420px;
  right: 0px;
  top: 65px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const TodoIconBox = styled.div`
  position: absolute;
  width: 60px;
  height: 75px;
  right: -5px;
  top: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
  border-radius: 40px;
`;
const Plus = styled(PlusIcon)`
  position: absolute;
`;

interface TodoLayerProps {
  show: boolean;
}
const TodoLayer = styled.div<TodoLayerProps>`
  position: absolute;
  display: flex;
  top: 65px;
  width: 359px;
  height: 420px;
  transition: all 0.5s;
  z-index: 1;
  right: ${({ show }) => (show ? "0px" : "-359px")};
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const CloseBtn = styled.div`
  width: 25px;
`;
const TodoBox = styled.div`
  border: solid red 1px;
  color: white;
  font-size: 20px;
  box-sizing: border-box;
  width: 335px;
  height: 420px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
  p{
    margin:0;
    font-size: 30px;
      color: white;
      cursor: pointer;
  }
`;
