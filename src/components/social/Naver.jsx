import React from "react";

const Naver = () => {
  //지역변수로 빼서 보안관리.

  const clientID = process.env.REACT_APP_CLIENT_ID;

  const stateString = process.env.REACT_APP_STATE_STRING;

  const callbackUrl = process.env.REACT_APP_CALLBACK_URL;

  const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${clientID}&response_type=code&redirect_uri=${callbackUrl}&state=${stateString}`;

  const loginHandler = () => {
    window.location.href = naverAuthUrl;
  };
  return <button onClick={loginHandler}> 네이버로 로그인 </button>;
};

export default Naver;
