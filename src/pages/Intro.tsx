import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import HeadFish from "../components/fish/HeadFish";
import tree from "../assets/tree/tree.png";
export default function Intro() {
  const [scroll, setScroll] = useState(false);
  const [bubble, setBubble] = useState(false);
  const [bubble1, setBubble1] = useState(false);
  const [bubble2, setBubble2] = useState(false);
  const [bubble3, setBubble3] = useState(false);
  const [bubble4, setBubble4] = useState(false);
  const [bubble5, setBubble5] = useState(false);
  const [bubble6, setBubble6] = useState(false);
  const [button, setButton] = useState(false);

  const [info, setInfo] = useState(false);
  const [info2, setInfo2] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    console.log(window.scrollY);
    if (window.scrollY >= 400) {
      setInfo(true);
    }
    if (window.scrollY >= 1000) {
      // setBubble1(true);
      setInfo2(true);
    }
    if (window.scrollY >= 1800) {
      setButton(true);
      setBubble(true);
    }
    if (window.scrollY >= 1900) {
      setBubble1(true);
    }
    if (window.scrollY >= 2000) {
      setBubble2(true);
    }
    if (window.scrollY >= 2100) {
      setBubble3(true);
    }
    if (window.scrollY >= 2200) {
      setBubble4(true);
    }
    if (window.scrollY >= 2300) {
      setBubble5(true);
    }
    if (window.scrollY >= 2400) {
      setBubble6(true);
    }
  };

  return (
    <IntroContainer>
      {/* <IntroTitleContainer>
        <IntroTitleWrapper>
          <TreeIconContainer></TreeIconContainer>
          <TreeIcon></TreeIcon>
        </IntroTitleWrapper>
      </IntroTitleContainer> */}
      <WaveContainer>
        <WaveWrapper>
          <FirstWave>
            {/* wave animation */}

            <div
              style={{
                height: "100%",
                paddingTop: "15%",
              }}
            >
              <TitleContainer>
                <SetudyWrapper scroll={bubble}>
                  <span>
                    <SeatudyContainerBubble />S
                  </span>
                </SetudyWrapper>
                <SetudyWrapper scroll={bubble1}>
                  <span>
                    <SeatudyContainerBubble />E
                  </span>
                </SetudyWrapper>
                <SetudyWrapper scroll={bubble2}>
                  <span>
                    <SeatudyContainerBubble />A
                  </span>
                </SetudyWrapper>
                <SetudyWrapper scroll={bubble3}>
                  <span>
                    <SeatudyContainerBubble />T
                  </span>
                </SetudyWrapper>
                <SetudyWrapper scroll={bubble4}>
                  <span>
                    <SeatudyContainerBubble />U
                  </span>
                </SetudyWrapper>
                <SetudyWrapper scroll={bubble5}>
                  <span>
                    <SeatudyContainerBubble />D
                  </span>
                </SetudyWrapper>
                <SetudyWrapper scroll={bubble6}>
                  <span>
                    <SeatudyContainerBubble />Y
                  </span>
                </SetudyWrapper>
              </TitleContainer>
              <FirstInfoContainer scroll={info}>
                <span>SeaTudy란?</span>
                <span>사람들이 함께 모여서 공부를 하는 사이트 입니다.</span>
              </FirstInfoContainer>
              <SecondInfoContainer scroll={info2}>
                <span>공부도 하고 물고기도 모아봐요!</span>
                <span>
                  SeaTudy 시작해보기
                  <div className="scroll-downs">
                    <div className="mousey">
                      <div className="scroller"></div>
                    </div>
                  </div>
                </span>
              </SecondInfoContainer>
              <SeatudySticky scroll={button}>
                <SeatudyContainer>
                  <SetudyWrapper scroll={bubble}>
                    <span>
                      <SeatudyContainerBubble />S
                    </span>
                  </SetudyWrapper>
                  <span>
                    <SetudyWrapper scroll={bubble1}>
                      <SeatudyContainerBubble />E
                    </SetudyWrapper>
                  </span>
                  <span>
                    <SetudyWrapper scroll={bubble2}>
                      <SeatudyContainerBubble />A
                    </SetudyWrapper>
                  </span>
                  <span>
                    <SetudyWrapper scroll={bubble3}>
                      <SeatudyContainerBubble />T
                    </SetudyWrapper>
                  </span>
                  <span>
                    <SetudyWrapper scroll={bubble4}>
                      <SeatudyContainerBubble />U
                    </SetudyWrapper>
                  </span>
                  <span>
                    <SetudyWrapper scroll={bubble5}>
                      <SeatudyContainerBubble />D
                    </SetudyWrapper>
                  </span>
                  <span>
                    <SetudyWrapper scroll={bubble6}>
                      <SeatudyContainerBubble />Y
                    </SetudyWrapper>
                  </span>
                </SeatudyContainer>
                {/* <FishContainer>
                  <HeadFish />
                </FishContainer> */}
              </SeatudySticky>
            </div>
            <div className="background-wrap">
              <div className="bubble x1"></div>
              <div className="bubble x2"></div>
              <div className="bubble x3"></div>
              <div className="bubble x4"></div>
              <div className="bubble x5"></div>
              <div className="bubble x6"></div>
              <div className="bubble x7"></div>
              <div className="bubble x8"></div>
              <div className="bubble x9"></div>
              <div className="bubble x10"></div>
            </div>
          </FirstWave>
        </WaveWrapper>
      </WaveContainer>
    </IntroContainer>
  );
}
interface IboxshadowProps {
  info: boolean;
}

interface IscrollTextProps {
  scroll: boolean;
}

const IntroContainer = styled.div`
  width: 100%;
  height: 500vh;
  position: relative;
`;

const IntroTitleContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SunContainer = styled.div`
  width: 100%;
  height: 70vh;
  /* background: #22c4ffb9; */
  margin: 0, 5%;
  background-image: linear-gradient(to bottom, #0984e3, #81ecec);
`;

const Cloud = styled.div`
  width: 10%;
  height: 1%;
`;

const Sun = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 10%;
  margin-left: 10%;
  box-shadow: 0px 20px 250px #f10707;
  background-color: #c75f19;
`;

const IntroTitleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin-top: 30%;
`;

const TreeIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TreeIcon = styled.div`
  position: relative;
  width: 100%;
  height: 120vh;
  /* background-color: #32fbff; */
  /* transform-style: preserve-3d;
  perspective: 100px; */
  /* transform: rotateX(50deg); */
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
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

const infoslide = keyframes`
0%{
    opacity: 0;
    transform:scale(0);
  }
  100%{
    opacity: 1;
        transform:scale(1);
  }
`;

const textslide = keyframes`
  0%{
    opacity: 0;
    transform:translate(50%, 0);
  }
  100%{
    opacity: 1;
    transform:translate(0%, 0);
  }
`;

const borderslide = keyframes`
  0%{
    opacity: 0;
    display:none;
    border:none;
  }
  100%{
    display:flex;
    opacity: 1;
    border: 5px solid white;
    border-radius: 9999px;

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
    z-index: 2;
    overflow: hidden;

    .x1 {
      animation: ${animateBubble} 25s linear infinite,
        ${sideWays} 2s ease-in-out infinite alternate;
      left: -5%;
      top: 45%;
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
      top: 54%;
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
      top: 60%;
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
      top: 56%;
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
      box-shadow: 0 0px 20px #fff, inset 0px 10px 30px 5px #add9ec54;
      height: 200px;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      border: solid rgba(255, 255, 255, 0.5) 1px;
      span {
        cursor: pointer;
        position: relative;
        filter: blur(5px);
        padding: 0.5px;
        transition: 0.5s;
        color: rgba(255, 255, 255, 0.4);
        text-align: center;
        font-size: 4em;
      }
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
        rgba(255, 255, 255, 0) 90%
      );

      border-radius: 50%;

      box-shadow: inset 0 -20px -30px rgba(26, 58, 94, 0.322);

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
    #ffffff68,
    #e7c9a5,
    #42f4f7d1,
    #07b4ff,
    #0195fe,
    #4939d0,
    #15385d
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

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 27%;
  position: relative;
  span {
    z-index: 15;
    cursor: pointer;
    position: relative;
    filter: blur(2px);
    text-align: center;
    font-size: 8em;
    /* background-image: linear-gradient(to bottom, #e7c9a5, #42f4f7d1); */
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px white;
    &:hover {
      filter: blur(0px);
      transition: 0.5s;
      color: white;
      background-color: white;
      i::before {
        content: "";
        position: absolute;
        top: 30px;
        width: 2px;
        height: 8px;
        left: 12px;
        background-color: white;
        box-shadow: 0px 93px #fff, 95px 93px #fff, 95px 0px #fff;
      }
      i::after {
        content: "";
        position: absolute;
        top: 30px;
        width: 8px;
        height: 2px;
        left: 12px;
        background-color: white;
        box-shadow: 0px 100px white, 89px 100px white, 89px 0 white;
      }
    }
  }
`;

const FirstInfoContainer = styled.div<IscrollTextProps>`
  width: 80vw;
  height: 70vh;
  margin-top: 40%;
  z-index: 1;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  display: ${({ scroll }) => (scroll ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${infoslide} 1s linear alternate;

  span {
    font-size: 2em;
    margin-top: 5%;
    color: #eee;
  }
`;

const scroll = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
`;

const SecondInfoContainer = styled.div<IscrollTextProps>`
  width: 80vw;
  height: 70vh;
  margin-top: 30%;
  z-index: 1;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  display: ${({ scroll }) => (scroll ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${infoslide} 1s linear alternate;
  .scroll-downs {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    width: 34px;
    height: 55px;
  }
  .mousey {
    width: 3px;
    padding: 10px 15px;
    height: 35px;
    border: 4px solid #fff;
    border-radius: 25px;
    opacity: 0.75;
    box-sizing: content-box;
  }
  .scroller {
    width: 4px;
    height: 10px;
    border-radius: 25%;
    background-color: #fff;
    animation-name: ${scroll};
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
    animation-iteration-count: infinite;
  }
`;

const SeatudySticky = styled.div<IscrollTextProps>`
  position: sticky;
  position: -webkit-sticky;
  top: 30%;
  width: 100%;
  height: 50vh;
  background: transparent;
  z-index: 5;
  display: ${({ scroll }) => (scroll ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const SeatudyContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  font-size: 7em;
  box-sizing: border-box;
  z-index: 3;
  border: none;
  /* background-color: #40649b; */
  animation: ${borderslide} 1s forwards;
  span {
    cursor: pointer;
    position: relative;
    filter: blur(5px);
    padding: 0.5px;
    transition: 0.5s;
    color: rgba(255, 255, 255, 0.4);
    text-align: center;
    &:hover {
      filter: blur(0px);
      transition: 0.5s;
      i::before {
        content: "";
        position: absolute;
        top: 20px;
        width: 2px;
        height: 8px;
        left: 12px;
        background-color: white;
        box-shadow: 0px 93px #fff, 95px 93px #fff, 95px 0px #fff;
      }
      i::after {
        content: "";
        position: absolute;
        top: 20px;
        width: 8px;
        height: 2px;
        left: 12px;
        background-color: white;
        box-shadow: 0px 100px white, 89px 100px white, 89px 0 white;
      }
    }
  }
`;

const SetudyWrapper = styled.div<IscrollTextProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${({ scroll }) => (scroll ? "flex" : "none")};
  animation: ${textslide} 3s linear alternate;
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
