import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { setCookie } from "../components/social/Cookie";
import { useNavigate } from 'react-router-dom';

const KakaoLogin = () => {
  const navigate = useNavigate()
  const code : string | null = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const kakao = async () => {
      return await axios
        .get(`http://43.200.115.252/api/v1/members/kakaoLogin?code=${code}`)
        .then((res) => setCookie("token", res.headers.authorization))
          .then(() => {
            navigate("/");
          })

    };
    if (code) {
      kakao();
    }
  }, [
    code,
    navigate
  ]);

  return <div>로딩페이지컴포넌트</div>;
};

export default KakaoLogin;
