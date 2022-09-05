import React from "react";
import Google from "../components/social/Google";
import Kakao from "../components/social/Kakao";
import Naver from "../components/social/Naver";

export default function Login() {
  return (
    <div>
      <Kakao />
      <Naver />
      <Google />
    </div>
  );
}
