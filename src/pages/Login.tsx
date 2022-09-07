import React from "react";
import Google from "../components/social/Google";
import Kakao from "../components/social/Kakao";
import Naver from "../components/social/Naver";
import Header from "../components/common/Header";
// import TodoModal from './TodoModal';
import BurgerSidebar from '../components/sidebar/BurgerSidebar';
import CalendarSidebar from '../components/sidebar/CalendarSidebar';
import ProfileSidebar from '../components/sidebar/ProfileSidebar';
import TodoSidebar from '../components/sidebar/TodoSidebar';
import styled from "styled-components";
import TodoModal from "./TodoModal";

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
  )
}

const LoginContainer = styled.div`
`