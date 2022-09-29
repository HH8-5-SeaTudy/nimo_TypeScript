import React from "react";
import styled, { keyframes } from "styled-components";
import background from "../assets/background/loginBack.png";

import Google from "../components/social/Google";
import Kakao from "../components/social/Kakao";
import Naver from "../components/social/Naver";
import Grid from "../elements/Grid";

export default function Login() {
  return (
    <Layer>
      <Grid height="100%" display="flex">
        <Left>
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
              <HowToTitle>같이 공부하고 물고기도 모아봐요!!</HowToTitle>
              <Grid
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                width="100%"
              >
                <HowToSubTitle>
                  1. 체크인 시간에 따라 물고기가 해제됩니다.
                </HowToSubTitle>
                <HowToSubTitle>
                  2. 일간 주간 랭킹 확인이 가능합니다.
                </HowToSubTitle>
                <HowToSubTitle>
                  3. 투두리스트를 작성해서 스케줄을 확인해요.
                </HowToSubTitle>
                <HowToSubTitle>4. 물고기를 모아서 배경을 꾸며요.</HowToSubTitle>
              </Grid>
            </HowTo>
          </HowToContainer>
        </Left>
        <Right>
          <LoginContainer>
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
          </LoginContainer>
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

const Left = styled.div`
  width: 50%;
  height: 100%;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 2%;
`;

const HowToTitle = styled.span`
  font-size: 2.5em;
  color: #ffffffa2;
`;

const HowToSubTitle = styled.span`
  font-size: 1.6em;
  margin-top: 5%;
  color: #ffffffa2;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  padding: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 2%;
`;

const SocialLoginTitle = styled.span`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 5%;
  color: white;
`;

const TitleContainer = styled.div`
  width: 100%;
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
    -webkit-text-stroke: 2px white;
    letter-spacing: 10px;
    &:hover {
      filter: blur(0px);
      transition: 0.5s;
      color: white;
      background-color: white;
      i::before {
        content: "";
        position: absolute;
        top: 35px;
        width: 2px;
        height: 8px;
        left: 5px;
        background-color: white;
        box-shadow: 0px 93px #fff, 95px 93px #fff, 95px 0px #fff;
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
