import styled from "styled-components";
import { ReactComponent as Plus } from "../image/add-button.svg";
import React, { useEffect, useState } from "react";
import { useCounter } from "./CheckIn";
import { useDispatch, useSelector } from "react-redux";
import { __getCheckInTimer, __getCheckOutTimer } from "../redux/modules/timer";
import { RootState } from "../redux/config/configStore";
import { Itime } from "../api";

const Main = () => {
  const dispatch = useDispatch();
  const time = useSelector((state: RootState) => state);
  // console.log(time);

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

  // useEffect(() => {
  //   dispatch(__getCheckOutTimer());
  //   dispatch(__getCheckInTimer());
  // }, []);

  const clickStart = () => {
    dispatch(__getCheckInTimer());
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
