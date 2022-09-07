import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Intro from "../pages/Intro";
import Main from "../pages/Main";
import KakaoLogin from "../pages/KakaoLogin";
import NaverLogin from "../pages/NaverLogin";
import GoogleLogin from "../pages/GoogleLogin";
import Login from "../pages/Login";
import { EnumPages } from "../enum/EnumPages";
import ChatRoom from "../pages/ChatRoom";
// import Test from "./pages/Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={EnumPages.HOME} element={<Home />}>
          <Route path={EnumPages.INTRO} element={<Intro />} />
          <Route path={EnumPages.MAIN} element={<Main />} />
          <Route path={EnumPages.CHATROOM} element={<ChatRoom />} />
        </Route>
        <Route path={EnumPages.LOGIN} element={<Login />} />
        <Route path={EnumPages.KAKAOLOGIN} element={<KakaoLogin />} />
        <Route path={EnumPages.NAVERLOGIN} element={<NaverLogin />} />
        <Route path={EnumPages.GOOGLELOGIN} element={<GoogleLogin />} />
        {/* <Route path="test" element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
