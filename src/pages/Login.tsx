import React from "react";
import styled, { keyframes } from "styled-components";
import scuba from "../assets/pixel/scuba.png";
import cloud1 from "../assets/pixel/cloud1.png";
import cloud2 from "../assets/pixel/cloud2.png";
import cloud3 from "../assets/pixel/cloud3.png";
import background from "../assets/pixel/loginBackground.jpg";
import wave from "../assets/pixel/wave.png";

import Google from "../components/social/Google";
import Kakao from "../components/social/Kakao";
import Naver from "../components/social/Naver";
import Grid from "../elements/Grid";

export default function Login() {
  return (
    <Layer>
      <Grid height="100%" display="flex">
        <Left></Left>
        <Right>
          <LoginBtn>
            <SocialLoginTitle>SOCIAL LOGIN</SocialLoginTitle>
            <Grid padding="5%">
              <Kakao />
            </Grid>
            <Grid padding="5%">
              <Naver />
            </Grid>
            <Grid padding="5%">
              <Google />
            </Grid>
          </LoginBtn>
        </Right>
      </Grid>
    </Layer>
  );
}
const Layer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const CloudContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
`;

const Cloud1Img = styled.image`
  width: 100%;
  height: 100%;
  background: url(${cloud1});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const Cloud2Img = styled.image`
  width: 110%;
  height: 110%;
  background: url(${cloud2});
  background-size: 110% 110%;
  background-repeat: no-repeat;
`;

const Cloud3Img = styled.image`
  width: 110%;
  height: 110%;
  background: url(${cloud3});
  background-size: 110% 110%;
  background-repeat: no-repeat;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: rgba;
`;
const TitleBox = styled.div`
  h1 {
    font-size: 80px;
    text-align: center;
  }
`;
const ScubaBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ScubaDiving = styled.image`
  width: 100%;
  height: 100%;
  background-image: url(${scuba});
  background-size: 100% 100%;
  border: none;
  outline: none;
  position: absolute;
  right: -20%;
  bottom: 0;
`;

const LoginBtn = styled.div`
  /* height: 100%; */
  padding: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid red;
`;

const SocialLoginTitle = styled.span`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 5%;
  color: white;
`;

const WaveContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid black;
`;

const Wave = styled.image`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: 120% 120%;
  border: 1px solid black;
`;
