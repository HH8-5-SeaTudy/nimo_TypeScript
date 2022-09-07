import React from "react";
import Google from "../components/social/Google";
import Kakao from "../components/social/Kakao";
import Naver from "../components/social/Naver";
import Header from "../components/common/Header";

import styled from "styled-components";

export default function Login() {
  return (
    <div>
      {/* <TodoModal/> */}
      <Kakao />
      <Naver />
      <Google />
      <ProfileSidebar/>
      <BurgerSidebar/>
      <TodoSidebar/>
      <CalendarSidebar/>
    </div>
}

const LoginContainer = styled.div`
`