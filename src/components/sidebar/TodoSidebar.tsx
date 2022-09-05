import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../image/icon/PlusIcon.svg";

const TodoSidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <div onClick={() => setShow(!show)}>
      <TodoSide>
        <TodoLayer show={show}>
          <TodoBox></TodoBox>
        </TodoLayer>
      </TodoSide>
      <TodoIconBox>
        <Plus />
      </TodoIconBox>
    </div>
  );
};

export default TodoSidebar;

const Plus = styled(PlusIcon)`
  position: absolute;
  left: 15px;
  top: 33px;
`;

const TodoSide = styled.div`
  position: absolute;
  width: 24px;
  height: 394px;
  left: calc(100% - 24px);
  top: 65px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const TodoIconBox = styled.div`
  position: absolute;
  width: 112px;
  height: 98px;
  left: calc(100% - 60px);
  top: 172px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
  border-radius: 40px;
`;
interface TodoLayerProps {
  show : boolean;
}
const TodoLayer = styled.div<TodoLayerProps>`
  position: absolute;
  width: 359px;
  height: 394px;
  transition: all 0.5s;
  z-index: 1;
  left: ${({ show }) => (show ? "24px" : "-335px")};
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;
const TodoBox = styled.div`
  border: solid red 1px;
  box-sizing: border-box;
  width: 335px;
  height: 394px;
  margin-left: 24px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;
