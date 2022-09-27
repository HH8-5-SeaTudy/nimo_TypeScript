import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { setCookie } from "../components/social/Cookie";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../components/hooks/reduxHooks";
import { __getUserProfile } from "../redux/modules/userData";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const code: string | null = new URL(window.location.href).searchParams.get(
    "code"
  );
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    const google = async () => {
      return await axios
        .get(`${BASE_URL}/api/v1/members/googleLogin?code=${code}`)
        .then((res) => {
          setCookie("token", res.headers.authorization);
          setCookie("userData", res.data.data);
          dispatch(__getUserProfile(res.data.data));
        })
        .then(() => {
          navigate("/home");
        });
    };
    if (code) {
      google();
    }
  }, [code, navigate]);
  return <div>로딩페이지컴포넌트</div>;
};

export default GoogleLogin;
