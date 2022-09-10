import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import HeadFish from "../components/fish/HeadFish";
import tree from "../assets/tree/tree.png";
import wave5 from "../assets/Wave/wave5.svg";
import Wave from "./Wave";

export default function Intro() {
  const [scroll, setScroll] = useState(false);
  const [bubble, setBubble] = useState(false);
  const [bubble1, setBubble1] = useState(false);
  const [bubble2, setBubble2] = useState(false);
  const [bubble3, setBubble3] = useState(false);
  const [bubble4, setBubble4] = useState(false);
  const [bubble5, setBubble5] = useState(false);
  const [bubble6, setBubble6] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 500) {
      setScroll(true);
      console.log(window.scrollY);
    }
  };

  return (
    <IntroContainer>
      <IntroTitleContainer>
        <IntroTitleWrapper>
          <TreeIconContainer>
            <TreeIcon />
          </TreeIconContainer>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "yellow",
              border: "1px solid black",
            }}
          >
            asfasf
          </div>
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
              <SeatudySticky>
                <SeatudyContainer>
                  <span>
                    <SeatudyContainerBubble
                      boxshadow={bubble}
                      onClick={() => setBubble(true)}
                    />
                    S
                  </span>
                  <span>
                    <SeatudyContainerBubble
                      boxshadow={bubble1}
                      onClick={() => setBubble1(true)}
                    />
                    E
                  </span>
                  <span>
                    <SeatudyContainerBubble
                      boxshadow={bubble2}
                      onClick={() => setBubble2(true)}
                    />
                    A
                  </span>
                  <span>
                    <SeatudyContainerBubble
                      boxshadow={bubble3}
                      onClick={() => setBubble3(true)}
                    />
                    T
                  </span>
                  <span>
                    <SeatudyContainerBubble
                      boxshadow={bubble4}
                      onClick={() => setBubble4(true)}
                    />
                    U
                  </span>
                  <span>
                    <SeatudyContainerBubble
                      boxshadow={bubble5}
                      onClick={() => setBubble5(true)}
                    />
                    D
                  </span>
                  <span>
                    <SeatudyContainerBubble
                      boxshadow={bubble6}
                      onClick={() => setBubble6(true)}
                    />
                    Y
                  </span>
                </SeatudyContainer>
                {/* <FishContainer>
                  <HeadFish />
                </FishContainer> */}
              </SeatudySticky>
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
interface IboxshadowProps {
  boxshadow: boolean;
}

const IntroContainer = styled.div`
  width: 100%;
  height: 500vh;
  position: relative;
`;

const IntroTitleContainer = styled.div`
  width: 100%;
  padding: 15% 10%;
  transform: perspective(750px) translate3d(0px, 0px, -250px) rotateX(27deg)
    scale(0.9, 0.9);
  border-radius: 20px;
  border: 5px solid #e6e6e6;
  box-shadow: 0 70px 40px -20px rgba(0, 0, 0, 0.2);
  transition: 0.4s ease-in-out transform;
  margin-top: 10%;
`;

const IntroTitleWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 2px solid black;
`;

const TreeIconContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TreeIcon = styled.div`
  background: url(${tree});
  background-position: center;
  background-size: cover;
  width: 500px;
  height: 800px;
  z-index: 5;
  transform: perspective(750px) translate3d(0px, 0px, 0px) rotateX(27deg)
    scale(0.9, 0.2);
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
      box-shadow: 0 10px 20px #99c0f9, inset 0px 10px 30px 5px #8dd7f755;
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

const SeatudySticky = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  height: 50vh;
  background: transparent;
  z-index: 5;
`;

const textBounce = keyframes`
  0%   { transform: scale(1,1) translateY(0); }
  10%  { transform: scale(1.1,.9) translateY(0); }
  30%  { transform: scale(.9,1.1)   translateY(-55px);}
  50%  { transform: scale(1.05,.95) translateY(0); }
  58%  { transform: scale(1,1) translateY(-7px);}
  65%  { transform: scale(1,1) translateY(0);}
  100% { transform: scale(1,1) translateY(0);} 

`;

const SeatudyContainer = styled.h2`
  position: relative;
  display: flex;
  padding-left: 2%;
  align-items: center;
  width: 100%;
  font-size: 4em;
  box-sizing: border-box;
  height: 100%;
  transform: perspective(700px) rotateX(-15deg);
  border-radius: 6px;
  span {
    cursor: pointer;
    position: relative;
    filter: blur(5px);
    padding: 0.5px;
    transition: 0.5s;
    color: rgba(255, 255, 255, 0.4);
    margin-right: 20px;
    text-align: center;
    &:nth-child(1) {
      animation: ${textBounce} 4s ease infinite 0.5s;
    }
    &:nth-child(2) {
      animation: ${textBounce} 4s ease infinite 1s;
    }
    &:nth-child(3) {
      animation: ${textBounce} 4s ease infinite 1.5s;
    }
    &:nth-child(4) {
      animation: ${textBounce} 4s ease infinite 2s;
    }
    &:nth-child(5) {
      animation: ${textBounce} 4s ease infinite 2.5s;
    }
    &:nth-child(6) {
      animation: ${textBounce} 4s ease infinite 3s;
    }
    &:nth-child(7) {
      animation: ${textBounce} 4s ease infinite 3.5s;
    }
    i {
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
        left: 10px;
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
        left: 10px;
        background-color: white;
        box-shadow: 0px 70px white, 59px 70px white, 59px 0 white;
      }
    }
  }
`;

const SeatudyContainerBubble = styled.i<IboxshadowProps>`
  position: absolute;
  inset: 0;
  background-color: transparent;
  display: flex;
  left: -20px;
  top: 10px;
  height: 80px;
  width: 80px;
  border-radius: 9999px;
  box-shadow: ${({ boxshadow }) =>
    boxshadow
      ? "none"
      : "0 5px 20px #99c0f9, inset 0px 10px 10px 0px #8dd7f755"};
`;
