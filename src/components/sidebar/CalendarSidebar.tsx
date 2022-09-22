import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CalendarIcon } from "../../assets/icon/CalendarIcon.svg";
import Calendars from "../calendar/Calendars";
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
        <CalendarBox>
          <Calendars />
        </CalendarBox>
      </CalendarLayer>
    </div>
  );
};

export default CalendarSidebar;

const CalendarSide = styled.div`
  position: absolute;
  width: 25px;
  height: 47%;
  right: 0px;
  bottom: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;

const CalendarIconBox = styled.div`
  position: absolute;
  width: 60px;
  height: 75px;
  right: -5px;
  top: 35%;
  ${({ theme }) => theme.common.flexCenter};
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
  bottom: 0;
  width: 359px;
  height: 47%;
  transition: all 0.5s;
  z-index: 1;
  right: ${({ show }) => (show ? "0px" : "-359px")};
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;
const CloseBtn = styled.div`
  width: 25px;
`;
const CalendarBox = styled.div`
  border: solid red 1px;
  box-sizing: border-box;
  width: 335px;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #264b7e;
`;
