import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  __getCheckInTimer,
  __getCheckOutTimer,
  __getUserinquire,
} from "../../redux/modules/timer";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StopWatch = () => {
  const dispatch = useAppDispatch();

  const time = useAppSelector((state) => state.timer.dayStudyTime);


  const [hh, mm, ss] = String(time)
    .split(":")
    .map((v) => +v);


  const [timeSS, setTimeSS] = useState(0);
  const [timeMM, setTimeMM] = useState(0);
  const [timeHH, setTimeHH] = useState(0);
  const [timerOn, setTimerOn] = useState(false);


  // 수정해야하는 부분 
  // 1. 로그인 직후 받아오는값이 00:00:00 일땐 타이머가 off 여야 한다.
  // 2. 현재 코드에선 화면이 로드 될 경우 바로 통신과 체크인이 이뤄진다. 때문에 Stop을 해도 페이지 전환시 다시 시작됨.


  const startHandler = () => {
    dispatch(__getCheckInTimer());
    setTimerOn(true);
  };

  const endHandler = () =>{
    dispatch(__getCheckOutTimer());
    setTimerOn(false);
  }


  useEffect(() => {
    dispatch(__getUserinquire());
    startHandler()
  }, []);

  useEffect(() => {
    setTimeSS(ss);
    setTimeMM(mm);
    setTimeHH(hh); 

  }, [time]);

  useEffect(() => {
    let interval:any = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTimeSS((ss) => ss + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if ( timeSS % 60 == 0 && timeSS !== 0 ) {
      setTimeMM((mm) => mm + 1);
    }

    return () => clearInterval(interval);
  }, [timerOn, timeSS,]);

  useEffect(()=>{
    if (timeMM % 60 == 0 && timeMM !== 0) {
      setTimeHH((hh) => hh + 1);
    }
  },[timeMM])

  return (
    <Layer>
      <Link to='/statistics' style={{ textDecoration: 'none' }}>    
      <span>{("0" + Math.floor(timeHH % 24)).slice(-2)}:</span>
      <span>{("0" + Math.floor(timeMM % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor(timeSS % 60)).slice(-2)}</span>
      </Link>
      <button onClick={() => startHandler()}>start</button>
      <button onClick={() => endHandler()}>stop</button>
    </Layer>
  );
};

export default StopWatch;

const Layer = styled.div`
  span {
     color: white;
  }
 
`