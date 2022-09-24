import React from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import {
  NaverLoginButtonContainer,
  NaverLogo,
  NaverKor,
} from "./LoginButtonStyle";

const Naver = () => {
  //지역변수로 빼서 보안관리.

  const clientID = process.env.REACT_APP_CLIENT_ID;

  const stateString = process.env.REACT_APP_STATE_STRING;

  const callbackUrl = process.env.REACT_APP_CALLBACK_URL;

  const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${clientID}&response_type=code&redirect_uri=${callbackUrl}&state=${stateString}`;

  const loginHandler = () => {
    window.location.href = naverAuthUrl;
  };
  return (
    <NaverLoginButtonContainer onClick={loginHandler}>
      <NaverLogo />
      <NaverKor>네이버 로그인</NaverKor>
    </NaverLoginButtonContainer>
  );
};

export default Naver;
