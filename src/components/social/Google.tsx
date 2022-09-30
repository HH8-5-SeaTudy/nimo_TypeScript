import React from "react";
import Grid from "../../elements/Grid";
import {
  GoogleLoginButtonContainer,
  GoogleLogo,
  GoogleKor,
} from "./LoginButtonStyle";
const Google = () => {
  const googleClientId = process.env.REACT_APP_GOOGLE_KEY;

  const googleRedirectUrl = process.env.REACT_APP_GOOGLE_REDIRECT_URL;

  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&scope=openid%20profile%20email&redirect_uri=${googleRedirectUrl}`;

  const loginHandler = () => {
    window.location.href = googleAuthUrl;
  };
  return (
    <Grid
      border={"1px solid #dee2e6"}
      borderRadius={"5px"}
      width={"458px"}
      height={"80px"}
      display={"flex"}
      alignItems={"center"}
      cursor={"pointer"}
      onClick={loginHandler}
      background={"#dee2e6"}
    >
      <GoogleLogo />
      <GoogleKor>GOOGLE</GoogleKor>
    </Grid>
  );
};

export default Google;
