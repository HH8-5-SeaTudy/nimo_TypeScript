import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CalendarIcon } from "../../assets/icon/CalendarIcon.svg";

const CalendarSidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <CalendarSide onClick={() => setShow(!show)}>
        <CalendarIconBox>
          <Calendar />
        </CalendarIconBox>
      </CalendarSide>
      <CalendarLayer show={show}>
        <CloseBtn onClick={() => setShow(!show)}> </CloseBtn>
        <CalendarBox></CalendarBox>
      </CalendarLayer>
    </div>
  );
};

export default CalendarSidebar;

const CalendarSide = styled.div`
  position: absolute;
  width: 25px;
  height: 554px;
  right: 0px;
  top: 468px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const CalendarIconBox = styled.div`
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
const Calendar = styled(CalendarIcon)`
  position: absolute;
`;
interface CalendarLayerProps {
  show: boolean;
}
const CalendarLayer = styled.div<CalendarLayerProps>`
  position: absolute;
  display: flex;
  top: 468px;
  width: 359px;
  height: 554px;
  transition: all 0.5s;
  z-index: 1;
  right: ${({ show }) => (show ? "0px" : "-359px")};
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;
const CloseBtn = styled.div`
  width: 100%;
`;
const CalendarBox = styled.div`
  width: 335px;
  height: 554px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;
