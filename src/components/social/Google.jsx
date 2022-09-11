import React from "react";
import {
  GoogleLoginButtonContainer,
  GoogleLogo,
  GoogleKor,
} from "./LoginButtonStyle";
const Google = () => {
  const googleClientId = process.env.REACT_APP_GOOGLE_KEY;

  const googleRedirectUrl = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&scope=openid%20profile%20email&redirect_uri=${googleRedirectUrl}`;

  const loginHandler = () => {
    window.location.href = googleAuthUrl;
  };
  return (
    <GoogleLoginButtonContainer onClick={loginHandler}>
      <GoogleLogo />
      <GoogleKor>구글 로그인</GoogleKor>
    </GoogleLoginButtonContainer>
  );
};

export default Google;
