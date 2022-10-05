import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import KakaoLogin from "./pages/KakaoLogin";
import NaverLogin from "./pages/NaverLogin";
import GoogleLogin from "./pages/GoogleLogin";
import Login from "./pages/Login";
import { EnumPages } from "./enum/EnumPages";
import ChatRoom from "./pages/ChatRoom";
import Statistics from "./pages/Statistics";
import Header from "./components/common/Header";
import Unlock from "./pages/Unlock";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={EnumPages.HOME} element={<Home />} />
        <Route path={EnumPages.CHATROOM} element={<ChatRoom />} />
        <Route path={EnumPages.STATISTICS} element={<Statistics />} />
        <Route path={EnumPages.UNLOCK} element={<Unlock />} />
        <Route path={EnumPages.LOGIN} element={<Login />} />
        <Route path={EnumPages.KAKAOLOGIN} element={<KakaoLogin />} />
        <Route path={EnumPages.NAVERLOGIN} element={<NaverLogin />} />
        <Route path={EnumPages.GOOGLELOGIN} element={<GoogleLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
