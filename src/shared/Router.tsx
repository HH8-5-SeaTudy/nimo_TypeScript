import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Intro from "../pages/Intro";
import Main from "../pages/Main";
import KakaoLogin from "../pages/KakaoLogin";
import NaverLogin from "../pages/NaverLogin";
import GoogleLogin from "../pages/GoogleLogin";
import Login from "../pages/Login";
import { EnumPages } from "../enum/EnumPages";
import ChatRoom from "../pages/ChatRoom";
import Statistics from "../pages/Statistics";
import Wave from "../pages/Wave";

import Header from '../components/common/Header';
import PrivateRoute from "./PrivateRoute";
import { getCookie } from '../components/social/Cookie';


const Router = () => {
  const token = getCookie('token')

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={EnumPages.HOME} element={<PrivateRoute component={<Home/>}/>}/>
        <Route path={EnumPages.INTRO} element={<Intro />} />
        <Route path={EnumPages.MAIN} element={<PrivateRoute component={<Main />}/>} />
        <Route path={EnumPages.CHATROOM} element={<PrivateRoute component={<ChatRoom />}/>} />
        <Route path={EnumPages.STATISTICS} element={<PrivateRoute component={<Statistics />}/>} />
        <Route path={EnumPages.LOGIN} element={<Login />} />
        <Route path={EnumPages.KAKAOLOGIN} element={<KakaoLogin />} />
        <Route path={EnumPages.NAVERLOGIN} element={<NaverLogin />} />
        <Route path={EnumPages.GOOGLELOGIN} element={<GoogleLogin />} />
        <Route path={EnumPages.WAVE} element={<Wave />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
