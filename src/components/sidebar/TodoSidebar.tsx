import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../assets/icon/PlusIcon.svg";

const TodoSidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <TodoSide onClick={() => setShow(!show)}>
        <TodoIconBox>
          <Plus />
        </TodoIconBox>
      </TodoSide>
      <TodoLayer show={show}>
        <CloseBtn onClick={() => setShow(!show)}></CloseBtn>
        <TodoBox></TodoBox>
      </TodoLayer>
    </div>
  );
};

export default TodoSidebar;

const TodoSide = styled.div`
  position: absolute;
  width: 25px;
  height: 394px;
  right: 0px;
  top: 65px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const TodoIconBox = styled.div`
  position: absolute;
  width: 50px;
  height: 80px;
  right: 0;
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
  height: 394px;
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
  box-sizing: border-box;
  width: 335px;
  height: 394px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;
