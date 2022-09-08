import React from "react";
import styled, { keyframes } from "styled-components";

export default function Intro() {
  return (
    <IntroContainer>
      <IntroTitleContainer>
        <IntroTitleWrapper>
          <span>여기는 설명</span>
        </IntroTitleWrapper>
      </IntroTitleContainer>
      {/* <div
        style={{
          width: "100%",
          height: "50%",
          border: "2px solid green",
        }}
      > */}
      <WaveContainer>
        <WaveWrapper>
          <FirstWave className="wave wave1"></FirstWave>
        </WaveWrapper>
        <WaveWrapper>
          <SecondeWave className="wave wave2"></SecondeWave>
        </WaveWrapper>

        {/* <SecondeWave></SecondeWave> */}
      </WaveContainer>
      <WaveContainer></WaveContainer>
      {/* </div> */}
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  width: 100%;
  height: 500vh;
  border: 15px solid black;
  /* position: relative; */
`;

const IntroTitleContainer = styled.div`
  width: 100%;
  padding: 15% 10%;
`;

const IntroTitleWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 5px solid black;
  padding: 10%;
`;

const wave = keyframes`
  from { transform: rotate(0deg);}
  from { transform: rotate(360deg);}
`;
const swell = keyframes`
 0%,
  100% {
    transform: translate3d(0, -25px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
`;
const rotate = keyframes`
 0% {transform: translate(-50%, 0) rotateZ(0deg);}
  50% {transform: translate(-50%, -3%) rotateZ(180deg);}
  100% {transform: translate(-50%, 0%) rotateZ(360deg);}
`;

const WaveContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  height: 100%;
`;

const WaveWrapper = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  height: 100vh;
`;

const FirstWave = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background: linear-gradient(#3e606f, #1b343f);
  overflow: hidden;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    min-width: 180vw;
    min-height: 350vh;
    background-color: white;
    animation-name: ${rotate};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &:before {
    bottom: 55vh;
    border-radius: 55%;
    animation-duration: 10s;
  }

  &:after {
    bottom: 55vh;
    opacity: 0.5;
    border-radius: 47%;
    animation-duration: 10s;
  }
`;

const SecondeWave = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: black;
  overflow: hidden;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    min-width: 200vw;
    min-height: 200vw;
    background-color: transparent;
    animation-name: ${rotate};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &:before {
    bottom: 35vh;
    border-radius: 45%;
    animation-duration: 10s;
  }

  &:after {
    bottom: 35vh;
    opacity: 0.5;
    border-radius: 47%;
    animation-duration: 10s;
  }
`;
