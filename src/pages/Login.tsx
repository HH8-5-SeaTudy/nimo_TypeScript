import React from "react";
import styled, { keyframes } from "styled-components";
import TodoModal from "./TodoModal";
import BurgerSidebar from "../components/sidebar/BurgerSidebar";
import CalendarSidebar from "../components/sidebar/CalendarSidebar";
import ProfileSidebar from "../components/sidebar/ProfileSidebar";
import TodoSidebar from "../components/sidebar/TodoSidebar";
import Google from "../components/social/Google";
import Kakao from "../components/social/Kakao";
import Naver from "../components/social/Naver";

export default function Login() {
  return (
    <Body>
      {/* <Bubbles>
    <Bubble></Bubble>
    <Bubble></Bubble>
    <Bubble></Bubble>
    <Bubble></Bubble>
    <Bubble></Bubble>
    <Bubble></Bubble>
    <Bubble></Bubble>
    <Bubble></Bubble>
    <Bubble></Bubble>
    <Bubble></Bubble>
  </Bubbles> */}

      <div>
        <TodoModal />
        <Kakao />
        <Naver />
        <Google />
        <ProfileSidebar />
        <BurgerSidebar />
        <TodoSidebar />
        <CalendarSidebar />
      </div>
    </Body>
  );
}
const Body = styled.section`
  background: #29b6f6;
`;

const bubbleAnimation = keyframes`
  0%{
    bottom:-100px;
    transform:translateX(0);
  }
  50%{
    transform:translate(100px);
  }
  100%{
    bottom:1080px;
    transform:translateX(-200px);
  }
`;

const Bubbles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  top: 0;
  left: 0;
`;

const Bubble = styled.div`
  position: absolute;
  bottom: -100px;
  width: 40px;
  height: 40px;
  background: #f1f1f1;
  border-radius: 50%;
  opacity: 0.5;
  animation: ${bubbleAnimation} 10s infinite ease-in;
  &:nth-child(1) {
    width: 40px;
    height: 40px;
    left: 10%;
    animation-duration: 8s;
  }
  &:nth-child(2) {
    width: 20px;
    height: 20px;
    left: 20%;
    animation-duration: 5s;
    animation-delay: 1s;
  }
  &:nth-child(3) {
    width: 50px;
    height: 50px;
    left: 35%;
    animation-duration: 7s;
    animation-delay: 2s;
  }
  &:nth-child(4) {
    width: 80px;
    height: 80px;
    left: 50%;
    animation-duration: 11s;
    animation-delay: 0s;
  }
  &:nth-child(5) {
    width: 35px;
    height: 35px;
    left: 55%;
    animation-duration: 6s;
    animation-delay: 1s;
  }
  &:nth-child(6) {
    width: 45px;
    height: 45px;
    left: 65%;
    animation-duration: 8s;
    animation-delay: 3s;
  }
  &:nth-child(7) {
    width: 90px;
    height: 90px;
    left: 70%;
    animation-duration: 12s;
    animation-delay: 2s;
  }
  &:nth-child(8) {
    width: 25px;
    height: 25px;
    left: 80%;
    animation-duration: 6s;
    animation-delay: 2s;
  }
  &:nth-child(9) {
    width: 15px;
    height: 15px;
    left: 70%;
    animation-duration: 5s;
    animation-delay: 1s;
  }
  &:nth-child(10) {
    width: 90px;
    height: 90px;
    left: 25%;
    animation-duration: 10s;
    animation-delay: 4s;
  }
`;
