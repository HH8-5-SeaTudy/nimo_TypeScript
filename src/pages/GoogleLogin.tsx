import React from "react";
import { useEffect } from "react";
import axios from "axios";

const GoogleLogin = () => {
  const code: string | null = new URL(window.location.href).searchParams.get(
    "code"
  );
  useEffect(() => {
    const google = async () => {
      return await axios
        .get(`http://43.200.115.252/api/v1/members/googleLogin?code=${code}`)
        .then((res) => console.log(res));
      // .then(() => {
      //   navigate("/projectList");
      // })
      // .catch(() => {
      //   navigate("/");
      // });
    };
    if (code) {
      google();
    }
  }, [
    code,
    // navigate
  ]);
  return <div>로딩페이지컴포넌트</div>;
};

export default GoogleLogin;
