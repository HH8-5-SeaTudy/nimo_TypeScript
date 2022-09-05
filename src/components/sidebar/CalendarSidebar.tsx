import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CalendarIcon } from "../../image/icon/CalendarIcon.svg";

const CalendarSidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <div onClick={() => setShow(!show)}>
      <CalendarSide>
        <CalendarLayer show={show}>
          <CalendarBox></CalendarBox>
        </CalendarLayer>
      </CalendarSide>
      <CalendarIconBox>
        <Calendar />
      </CalendarIconBox>
    </div>
  );
};

export default CalendarSidebar;

const Calendar = styled(CalendarIcon)`
  position: absolute;
  left: 15px;
  top: 33px;
`;

const CalendarSide = styled.div`
  position: absolute;
  width: 24px;
  height: 554px;
  left: calc(100% - 24px);
  top: 468px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const CalendarIconBox = styled.div`
  position: absolute;
  width: 112px;
  height: 98px;
  left: calc(100% - 60px);
  top: 632px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
  border-radius: 40px;
`;
interface CalendarLayerProps {
  show : boolean;
}
const CalendarLayer = styled.div<CalendarLayerProps>`
  position: absolute;
  width: 359px;
  height: 554px;
  transition: all 0.5s;
  z-index: 1;
  left: ${({ show }) => (show ? "24px" : "-335px")};
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;
const CalendarBox = styled.div`
  border: solid red 1px;
  box-sizing: border-box;
  width: 335px;
  height: 554px;
  margin-left: 24px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;
