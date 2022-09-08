import React from "react";
import styled, { keyframes } from "styled-components";
import HeadFish from "../components/fish/HeadFish";

export default function Intro() {
  return (
    <IntroContainer>
      <IntroTitleContainer>
        <IntroTitleWrapper>
          <span>여기는 설명</span>
        </IntroTitleWrapper>
      </IntroTitleContainer>

      <WaveContainer>
        <WaveWrapper>
          <FirstWave>
            {/* wave animation */}
            {/* <div
              style={{
                overflow: "hidden",
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: "1",
              }}
            ></div> */}
            <div
              style={{
                height: "100%",
                paddingTop: "15%",
              }}
            >
              <FishSticky>
                <SeatudyContainer>
                  <span>
                    <i></i>S
                  </span>
                  <span>
                    <i></i>E
                  </span>
                  <span>
                    <i></i>A
                  </span>
                  <span>
                    <i></i>T
                  </span>
                  <span>
                    <i></i>U
                  </span>
                  <span>
                    <i></i>D
                  </span>
                  <span>
                    <i></i>Y
                  </span>
                </SeatudyContainer>
                {/* <FishContainer>
                  <HeadFish />
                </FishContainer> */}
              </FishSticky>
            </div>
            <div className="background-wrap">
              <div className="bubble x1" />
              <div className="bubble x2" />
              <div className="bubble x3" />
              <div className="bubble x4" />
              <div className="bubble x5" />
              <div className="bubble x6" />
              <div className="bubble x7" />
              <div className="bubble x8" />
              <div className="bubble x9" />
              <div className="bubble x10" />
            </div>
          </FirstWave>
        </WaveWrapper>
      </WaveContainer>
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  width: 100%;
  height: 500vh;
  position: relative;
`;

const IntroTitleContainer = styled.div`
  width: 100%;
  padding: 15% 10%;
  background-color: #ffff96;
  margin-top: 20%;
`;

const IntroTitleWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10%;
`;

const animateBubble = keyframes`
    0% {
        margin-top:100%;
    }
    100% {
        margin-top: -100%;
    }
`;

const sideWays = keyframes`
    0% { 
        margin-left:0px;
    }
    100% { 
        margin-left:50px;
    }
`;

const rotate = keyframes`
  0% {transform: translate(-50%, 0) rotateZ(0deg);}
  50% {transform: translate(-50%, -3%) rotateZ(180deg);}
  100% {transform: translate(-50%, 0%) rotateZ(360deg);}
`;

const WaveContainer = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
`;

const WaveWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .background-wrap {
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    z-index: 2;
    overflow: hidden;

    .x1 {
      animation: ${animateBubble} 25s linear infinite,
        ${sideWays} 2s ease-in-out infinite alternate;
      left: -5%;
      top: 5%;
      transform: scale(0.6);
    }

    .x2 {
      animation: ${animateBubble} 20s linear infinite,
        ${sideWays} 4s ease-in-out infinite alternate;
      left: 5%;
      top: 80%;
      transform: scale(0.4);
    }

    .x3 {
      animation: ${animateBubble} 28s linear infinite,
        ${sideWays} 2s ease-in-out infinite alternate;
      left: 10%;
      top: 40%;
      transform: scale(0.7);
    }

    .x4 {
      animation: ${animateBubble} 22s linear infinite,
        ${sideWays} 3s ease-in-out infinite alternate;
      left: 20%;
      top: 0;
      transform: scale(0.3);
    }

    .x5 {
      animation: ${animateBubble} 29s linear infinite,
        ${sideWays} 4s ease-in-out infinite alternate;
      left: 30%;
      top: 50%;
      transform: scale(0.5);
    }

    .x6 {
      animation: ${animateBubble} 21s linear infinite,
        ${sideWays} 2s ease-in-out infinite alternate;
      left: 50%;
      top: 0;
      transform: scale(0.8);
    }

    .x7 {
      animation: ${animateBubble} 20s linear infinite,
        ${sideWays} 2s ease-in-out infinite alternate;
      left: 65%;
      top: 70%;
      transform: scale(0.4);
    }

    .x8 {
      animation: ${animateBubble} 22s linear infinite,
        ${sideWays} 3s ease-in-out infinite alternate;
      left: 80%;
      top: 10%;
      transform: scale(0.3);
    }

    .x9 {
      animation: ${animateBubble} 29s linear infinite,
        ${sideWays} 4s ease-in-out infinite alternate;
      left: 90%;
      top: 50%;
      transform: scale(0.6);
    }

    .x10 {
      animation: ${animateBubble} 26s linear infinite,
        ${sideWays} 2s ease-in-out infinite alternate;
      left: 80%;
      top: 80%;
      transform: scale(0.3);
    }

    .bubble {
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      box-shadow: 0 20px 30px transparent,
        inset 0px 10px 30px 5px rgba(255, 255, 255, 0.3);

      height: 200px;
      position: absolute;
      width: 200px;
    }

    .bubble:after {
      background: -webkit-gradient(
        radial,
        center center,
        0px,
        center center,
        100%,
        color-stop(0%, transparent),
        color-stop(70%, rgba(255, 255, 255, 0))
      );
      background: -webkit-radial-gradient(
        center,
        ellipse cover,
        transparent 0%,
        rgba(255, 255, 255, 0) 70%
      );

      background: radial-gradient(
        ellipse at center,
        transparent 0%,
        rgba(255, 255, 255, 0) 70%
      );

      border-radius: 50%;

      box-shadow: inset 0 20px 30px rgba(26, 58, 94, 0.322);

      content: "";
      height: 180px;
      left: 10px;
      position: absolute;
      width: 180px;
    }
  }
`;

const FishContainer = styled.div`
  width: 20vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
  position: relative;
`;

const FirstWave = styled.div`
  position: relative;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    #79abdd,
    #709dce,
    #678ebe,
    #5f81af,
    #5673a0,
    #4e6993,
    #455f87,
    #3d557b,
    #334c6e,
    #2a4362,
    #213a55,
    #183149
  );
  /* overflow: hidden; */
  .wave1 {
    bottom: 55vh;
    border-radius: 55%;
    animation-duration: 10s;
    content: "";
    position: absolute;
    left: 0;
    top: -10%;
    width: 40vw;
    height: 70vh;
    background-color: white;
    animation-name: ${rotate};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border: 2px solid white;
  }

  .wave2 {
    bottom: 55vh;
    opacity: 0.5;
    top: -10%;
    border-radius: 47%;
    animation-duration: 10s;
    content: "";
    position: absolute;
    left: 0;
    width: 40vw;
    height: 70vh;
    background-color: white;
    animation-name: ${rotate};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border: 2px solid white;
  }
`;

const FishSticky = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  height: 50vh;
  background: transparent;
  border: 2px solid black;
  z-index: 5;
`;

const SeatudyContainer = styled.h2`
  position: relative;
  display: flex;
  padding-left: 2%;
  align-items: center;
  width: 100%;
  color: white;
  font-size: 4em;
  box-sizing: border-box;
  height: 100%;
  span {
    cursor: pointer;
    position: relative;
    filter: blur(5px);
    padding: 0.5px;
    transition: 0.5s;
    color: #225279;
    margin-right: 10px;

    i {
      position: absolute;
      inset: 0;
      background-color: transparent;
      left: -10px;
      top: 10px;
    }
    &:hover {
      filter: blur(0px);
      transition: 0.5s;
      i::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0px;
        width: 2px;
        height: 8px;
        background-color: white;
        box-shadow: 0px 63px #fff, 65px 63px #fff, 65px 0px #fff;
      }
      i::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0px;
        width: 8px;
        height: 2px;
        background-color: white;
        box-shadow: 0px 70px white, 59px 70px white, 59px 0 white;
      }
    }
  }
`;
