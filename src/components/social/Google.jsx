import React from "react";

const Google = () => {
  const googleClientId =
    "464072093758-haopsod0lephjnaqkdel99qob47ivlp1.apps.googleusercontent.com";
  // const googleClientId = process.env.REACT_APP_GOOGLE_KEY;

  const googleRedirectUrl = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&scope=openid%20profile%20email&redirect_uri=${googleRedirectUrl}`;

  const loginHandler = () => {
    window.location.href = googleAuthUrl;
  };
  return <button onClick={loginHandler}> 구글로 로그인 </button>;
};

export default Google;
