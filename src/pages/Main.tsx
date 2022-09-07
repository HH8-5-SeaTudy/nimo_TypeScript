import styled from "styled-components";
import { ReactComponent as Plus } from "../image/add-button.svg";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { __getTimer } from "../redux/modules/timer";
import { useCounter } from "./CheckIn";
// import Header from "../components/common/Header";

const Main = () => {
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

  // count의 변화에 따라 timer 함수 렌더링
  useEffect(timer, [count]);
  return (
    <MainContainer>
      <h1>
        {currentHours < 10 ? `0${currentHours}` : currentHours} :
        {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes} :
        {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
      </h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <div></div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

const PlusIcon = styled(Plus)`
  /* width: 125px; */
  /* height: 125px; */
`;
export default Main;
