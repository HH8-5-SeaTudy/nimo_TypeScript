import React from "react";

const Kakao = () => {
  const restApiKey = process.env.REACT_APP_REST_API_KEY;

  const redirectUrl = process.env.REACT_APP_REDIRECT_URI;

  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUrl}&response_type=code`;

  const loginHandler = () => {
    window.location.href = kakaoAuthUrl;
  };
  return <button onClick={loginHandler}> 카카오로 로그인 </button>;
};

export default Kakao;
