import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import KakaoLogin from "./pages/KakaoLogin";
import NaverLogin from "./pages/NaverLogin";
import GoogleLogin from "./pages/GoogleLogin";
import Login from "./pages/Login";
import { EnumPages } from "./enum/EnumPages";
import ChatRoom from "./pages/ChatRoom";
import Statistics from "./pages/Statistics";
import Wave from "./pages/Wave";
import Header from './components/common/Header';
import PrivateRoute from "./PrivateRoute";
import { getCookie } from './components/social/Cookie';
import { useAppDispatch, useAppSelector } from "./components/hooks/reduxHooks";
import {
  __getCheckInTimer,
  __getCheckOutTimer,
  __getUserinquire,
} from "./redux/modules/timer";



const Router = () => {
  const dispatch = useAppDispatch();

  const time = useAppSelector((state) => state.timer.dayStudyTime);

  const [hh, mm, ss] = String(time)
    .split(":")
    .map((v) => +v);

  const [timeSS, setTimeSS] = useState<number>(0);
  const [timeMM, setTimeMM] = useState<number>(0);
  const [timeHH, setTimeHH] = useState<number>(0);
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


  const token = getCookie('token')


  return (
    <BrowserRouter>
      <Header timeHH={timeHH} timeMM={timeMM} timeSS={timeSS}/>
      <Routes>
        <Route path={EnumPages.HOME} element={<PrivateRoute token={token} component={<Home startHandler={startHandler} endHandler={endHandler}/>}/>}/>
        <Route path={EnumPages.INTRO} element={<Intro />} />
        <Route path={EnumPages.MAIN} element={<PrivateRoute token={token} component={<Main />}/>} />
        <Route path={EnumPages.CHATROOM} element={<PrivateRoute token={token} component={<ChatRoom />}/>} />
        <Route path={EnumPages.STATISTICS} element={<PrivateRoute token={token} component={<Statistics />}/>} />
        <Route path={EnumPages.LOGIN} element={<Login />} />
        <Route path={EnumPages.KAKAOLOGIN} element={<PrivateRoute token={token} component={<KakaoLogin />}/>} />
        <Route path={EnumPages.NAVERLOGIN} element={<PrivateRoute token={token} component={<NaverLogin />}/>} />
        <Route path={EnumPages.GOOGLELOGIN} element={<PrivateRoute token={token} component={<GoogleLogin />}/>} />
        <Route path={EnumPages.WAVE} element={<Wave />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
