import styled from "styled-components";
import { ReactComponent as Plus } from "../image/add-button.svg";
import React, { useEffect, useState } from "react";
import { useCounter } from "./CheckIn";
import {
  __getCheckInTimer,
  __getCheckOutTimer,
  __getUserinquire,
} from "../redux/modules/timer";
import { RootState } from "../redux/config/configStore";
import { Itimer } from "../api";
import Wave from "./Wave";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";

const Main = () => {
  const dispatch = useAppDispatch();
  // const timeCheckIn = useSelector((state: RootState) => state.timer);
  // const time = useSelector((state: RootState) => state);
  const userTime = useAppSelector((state) => state.timer.dayStudyTime);
  console.log(userTime);
  const hours1 = Number(userTime.split(":")[0]);
  const minutes1 = Number(userTime.split(":")[1]);
  const seconds1 = Number(userTime.split(":")[2]);

  // 시, 분, 초를 state로 저장
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const { count, start, stop } = useCounter(0, 1000);

  // 타이머 기능
  const timer = () => {
    const checkMinutes = Math.floor(count / 60);
    const hours = Math.floor(count / 3600);
    const minutes = checkMinutes % 60;
    const seconds = count % 60;

    setCurrentHours(hours);
    setCurrentMinutes(minutes);
    setCurrentSeconds(seconds);
  };

  const clickStart = () => {
    dispatch(__getCheckInTimer());
    dispatch(__getUserinquire());

    start();
  };

  const clickStop = () => {
    dispatch(__getCheckOutTimer());
    stop();
  };

  // count의 변화에 따라 timer 함수 렌더링
  useEffect(timer, [count]);
  return (
    <MainContainer>
      {userTime}
      <h1>
        {currentHours < 10 ? `0${currentHours}` : currentHours} :
        {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes} :
        {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
      </h1>
      <button onClick={clickStart}>Start</button>
      <button onClick={clickStop}>Stop</button>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;
export default Main;
