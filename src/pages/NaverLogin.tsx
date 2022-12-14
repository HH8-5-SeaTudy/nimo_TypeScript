import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { setCookie } from "../components/social/Cookie";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../components/hooks/reduxHooks";
import { updateUser } from "../redux/modules/userData";

const NaverLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const code = new URL(window.location.href).searchParams.get("code");
  const state = new URL(window.location.href).searchParams.get("state");
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  
  useEffect(() => {
    const naver = async () => {
      return await axios
        .get(
          `${BASE_URL}/api/v1/members/naverLogin?code=${code}&state=${state}`
        )
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
      naver();
    }
  }, [code,navigate]);
  return <div></div>;
};

export default NaverLogin;
