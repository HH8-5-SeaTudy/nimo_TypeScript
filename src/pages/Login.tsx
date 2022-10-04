import React from "react";
import styled, { keyframes } from "styled-components";
import background from "../assets/background/loginBack.png";

import Google from "../components/social/Google";
import Kakao from "../components/social/Kakao";
import Naver from "../components/social/Naver";
import LoginSwiper from "../components/Swiper/LoginSwiper";
import Grid from "../elements/Grid";

export default function Login() {
  return (
    <Layer>
      <Grid height="100%" display="flex">
        <Left>
          <Title>
            <HowToContainer>
              <HowTo>
                <TitleContainer>
                  <SetudyWrapper>
                    <span>
                      <SeatudyContainerBubble />H
                    </span>
                  </SetudyWrapper>
                  <SetudyWrapper>
                    <span>
                      <SeatudyContainerBubble />O
                    </span>
                  </SetudyWrapper>
                  <SetudyWrapper>
                    <span style={{ marginRight: "30px" }}>
                      <SeatudyContainerBubble />W
                    </span>
                  </SetudyWrapper>
                  <SetudyWrapper>
                    <span>
                      <SeatudyContainerBubble />T
                    </span>
                  </SetudyWrapper>
                  <SetudyWrapper>
                    <span style={{ marginRight: "30px" }}>
                      <SeatudyContainerBubble />O
                    </span>
                  </SetudyWrapper>
                  <SetudyWrapper>
                    <span>
                      <SeatudyContainerBubble />U
                    </span>
                  </SetudyWrapper>
                  <SetudyWrapper>
                    <span>
                      <SeatudyContainerBubble />S
                    </span>
                  </SetudyWrapper>
                  <SetudyWrapper>
                    <span>
                      <SeatudyContainerBubble />E
                    </span>
                  </SetudyWrapper>
                </TitleContainer>
              </HowTo>
            </HowToContainer>
          </Title>
          <Slide>
            <LoginSwiper></LoginSwiper>
          </Slide>
        </Left>
        <Right>
          <LoginText>LOGIN</LoginText>
          <LoginBtnBox>
            <NaverBtn>
              <Naver />
            </NaverBtn>
            <KaKaoBtn>
              <Kakao />
            </KaKaoBtn>
            <GoggleBtn>
              <Google />
            </GoggleBtn>
          </LoginBtnBox>
        </Right>
      </Grid>
    </Layer>
  );
}
const Layer = styled.section`
  padding: 50px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Left = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
const Title = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Slide = styled.div`
  width: 100%;
  height: 85%;
  padding: 40px 50px;
`;

const HowToContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const HowTo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Right = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LoginText = styled.div`
  height: 10%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 80px;
`;
const LoginBtnBox = styled.div`
  height: 50%;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const NaverBtn = styled.div`
  height: 20%;
`;
const KaKaoBtn = styled.div`
  height: 20%;
`;
const GoggleBtn = styled.div`
  height: 20%;
`;

const TitleContainer = styled.div`
  width: 80%;
  display: flex;
  height: 100%;
  ${({ theme }) => theme.common.flexCenter};
  position: relative;
  span {
    cursor: pointer;
    position: relative;
    filter: blur(2px);
    text-align: center;
    font-size: 8em;
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px black;
    letter-spacing: 10px;
    &:hover {
      filter: blur(0px);
      transition: 0.5s;
      color: black;
      background-color: black;
      i::before {
        content: "";
        position: absolute;
        top: 35px;
        width: 2px;
        height: 8px;
        left: 5px;
        background-color: white;
        box-shadow: 0px 93px white, 95px 93px white, 95px 0px white;
      }
      i::after {
        content: "";
        position: absolute;
        top: 35px;
        width: 8px;
        height: 2px;
        left: 5px;
        background-color: white;
        box-shadow: 0px 100px white, 89px 100px white, 89px 0 white;
      }
    }
  }
`;

const SetudyWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter};
`;

const SeatudyContainerBubble = styled.i`
  position: absolute;
  inset: 0;
  background-color: transparent;
  display: flex;
  left: -20px;
  top: 10px;
  height: 80px;
  width: 80px;
  border-radius: 9999px;
`;
