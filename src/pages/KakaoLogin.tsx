import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { setCookie } from "../components/social/Cookie";

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../components/hooks/reduxHooks";
import { __getUserProfile } from "../redux/modules/userData";
const KakaoLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const code: string | null = new URL(window.location.href).searchParams.get(
    "code"
  );
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const kakao = async () => {
      return await axios
        .get(`${BASE_URL}/api/v1/members/kakaoLogin?code=${code}`)

        .then((res) => {
          setCookie("token", res.headers.authorization);
          navigate("/");
        })
        .catch((error)=>{
          alert(error.response.data.error.message)
          navigate("/login");
        })
    };
    if (code) {
      kakao();
    }
  }, [code, navigate]);

  return <div></div>;
};

export default KakaoLogin;
