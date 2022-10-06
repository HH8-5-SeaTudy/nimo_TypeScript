import React from "react";
import { 
  KaKaoLoginButtonContainer,
  KaKaoLogo,
  KaKaoKor,
} from "./LoginButtonStyle";

const Kakao = () => {
  const restApiKey = process.env.REACT_APP_REST_API_KEY;

  const redirectUrl = process.env.REACT_APP_REDIRECT_URL;

  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUrl}&response_type=code`;

  function loginHandler  ()  {
    window.location.href = kakaoAuthUrl;
  };
  return (
    <KaKaoLoginButtonContainer onClick={loginHandler} >
      <KaKaoLogo/>
      <KaKaoKor>KAKAOTALK</KaKaoKor>
    </KaKaoLoginButtonContainer>
  )
};


export default React.memo(Kakao);
