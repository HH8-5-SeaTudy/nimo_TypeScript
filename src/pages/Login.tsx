import React from "react";
import Calendars from '../components/calendar/Calendars';
import BurgerSidebar from '../components/sidebar/BurgerSidebar';
import CalendarSidebar from '../components/sidebar/CalendarSidebar';
import ProfileSidebar from '../components/sidebar/ProfileSidebar';
import TodoSidebar from '../components/sidebar/TodoSidebar';
import Google from "../components/social/Google";
import Kakao from "../components/social/Kakao";
import Naver from "../components/social/Naver";
import Modal from './Modal';
import TodoList from './TodoList';

export default function Login() {
  return (
    <div>
      <Kakao />
      <Naver />
      <Google />
      {/* <ProfileSidebar/>
      <BurgerSidebar/> */}

      <Calendars />
      <TodoList/>
      <Modal/>
      <TodoSidebar/>
      <CalendarSidebar/>
    </div>
  );
}
