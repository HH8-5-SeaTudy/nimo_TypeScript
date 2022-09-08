import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import wave1 from "../assets/Wave/wave1.svg";
import wave2 from "../assets/Wave/wave2.svg";
import wave3 from "../assets/Wave/wave3.svg";
import wave4 from "../assets/Wave/wave4.svg";
import wave5 from "../assets/Wave/wave5.svg";

const Wave = () => {
  const [scroll, setScroll] = useState(false);
  const [partTwo, setPartTwo] = useState(false);
  const [partThree, setSPartThree] = useState(false);
  const [partF, setPartF] = useState(false);

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
    if (window.scrollY >= 600) {
      setPartTwo(true);
    }
    if (window.scrollY >= 700) {
      setSPartThree(true);
    }
    if (window.scrollY >= 800) {
      setPartF(true);
    }
  };

  return (
    <>
      <Layer>
        <WavePart>
          <Ocean>
            <div></div>
            <div></div>
            <p>sadasdas</p>
          </Ocean>
        </WavePart>

        <WavePart1>
          <Ocean1 scroll={scroll}>
            <div></div>
            <div></div>
            <p>sss</p>
          </Ocean1>
        </WavePart1>

        <WavePart2>
          <Ocean2 partTwo={partTwo}>
            <div></div>
            <div></div>
            <p></p>
          </Ocean2>
        </WavePart2>

        {/* <WavePart3>
          <Ocean3 partThree={partThree}>
            <div></div>
            <div></div>
            <p></p>
          </Ocean3>
        </WavePart3>

        <WavePart4>
          <Ocean4 partF={partF}>
            <div></div>
            <div></div>
            <p></p>
            <Button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              위로
            </Button>
          </Ocean4>
        </WavePart4> */}
      </Layer>
    </>
  );
};

export default Wave;

interface ProfileLayerProps {
  scroll: boolean;
}
interface PartTwo {
  partTwo: boolean;
}
interface PartThree {
  partThree: boolean;
}
interface PartF {
  partF: boolean;
}

const waveAnimation = keyframes`
0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
`;
const swellAnimation = keyframes`
 0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
`;

const Layer = styled.section`
  width: 100%;
  height: 1800px;
  overflow: hidden;
`;

const WavePart = styled.div``;

const Ocean = styled.div`
  height: 900px;
  width: 1000%;
  position: relative;
  top: 400px;
  left: 0;
  background: #96e6fe;
  div {
    background: url(${wave1});
    position: absolute;
    top: -198px;
    width: 1000%;
    height: 700px;
    animation: ${waveAnimation} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
    &:nth-child(2) {
      top: -175px;
      animation: ${waveAnimation} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s
          infinite,
        ${swellAnimation} 7s ease -1.25s infinite;
      opacity: 1;
    }
  }
  &:nth-child(2) {
    top: 700px;
  }
  p {
    position: absolute;
    border: solid red 1px;
    width: 800px;
    height: 400px;
    top: 15%;
    left: 25%;
  }
`;

const WavePart1 = styled.div``;
const Ocean1 = styled.div<ProfileLayerProps>`
  height: 900px;
  width: 1000%;
  position: absolute;
  top: ${({ scroll }) => (scroll ? "500px" : "1300px")};
  transition: all 1s;
  left: 0;
  background: #69cef4;
  div {
    background: url(${wave2}) repeat-x;
    position: absolute;
    top: -198px;
    width: 1000%;
    height: 700px;
    animation: ${waveAnimation} 3s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
    &:nth-child(2) {
      top: -175px;
      animation: ${waveAnimation} 3s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s
          infinite,
        ${swellAnimation} 7s ease -1.25s infinite;
      opacity: 1;
    }
  }
  &:nth-child(2) {
    top: 700px;
  }
  p {
    position: absolute;
    border: solid red 1px;
    width: 800px;
    height: 400px;
    top: 15%;
    left: 25%;
  }
`;

const WavePart2 = styled.div``;

const Ocean2 = styled.div<PartTwo>`
  height: 900px;
  width: 1000%;
  position: absolute;
  top: ${({ partTwo }) => (partTwo ? "700px" : "1450px")};
  transition: all 1s;
  left: 0;
  background: #3fb5ea;
  div {
    background: url(${wave3}) repeat-x;
    position: absolute;
    top: -198px;
    width: 100%;
    height: 700px;
    animation: ${waveAnimation} 4s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
    &:nth-child(2) {
      top: -175px;
      animation: ${waveAnimation} 4s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s
          infinite,
        ${swellAnimation} 7s ease -1.25s infinite;
      opacity: 1;
    }
  }
  &:nth-child(2) {
    top: 700px;
  }
  p {
    position: absolute;
    border: solid red 1px;
    width: 800px;
    height: 400px;
    top: 15%;
    left: 25%;
  }
`;
const WavePart3 = styled.div``;

const Ocean3 = styled.div<PartThree>`
  height: 900px;
  width: 100%;
  position: absolute;
  top: ${({ partThree }) => (partThree ? "800px" : "1600px")};
  transition: all 1s;
  left: 0;
  background: #099ee1;
  div {
    background: url(${wave4}) repeat-x;
    position: absolute;
    top: -198px;
    width: 6400px;
    height: 700px;
    animation: ${waveAnimation} 2s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
    &:nth-child(2) {
      top: -175px;
      animation: ${waveAnimation} 2s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s
          infinite,
        ${swellAnimation} 7s ease -1.25s infinite;
      opacity: 1;
    }
  }
  &:nth-child(2) {
    top: 700px;
  }
  p {
    position: absolute;
    border: solid red 1px;
    width: 800px;
    height: 400px;
    top: 15%;
    left: 25%;
  }
`;
const WavePart4 = styled.div``;

const Ocean4 = styled.div<PartF>`
  height: 900px;
  width: 100%;
  position: absolute;
  top: ${({ partF }) => (partF ? "900px" : "1750px")};
  transition: all 1s;
  left: 0;
  background: #0086d8;
  div {
    background: url(${wave5}) repeat-x;
    position: absolute;
    top: -198px;
    width: 6400px;
    height: 700px;
    animation: ${waveAnimation} 5s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
    &:nth-child(2) {
      top: -175px;
      animation: ${waveAnimation} 5s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s
          infinite,
        ${swellAnimation} 7s ease -1.25s infinite;
      opacity: 1;
    }
  }
  &:nth-child(2) {
    top: 700px;
  }
  p {
    position: absolute;
    border: solid red 1px;
    width: 800px;
    height: 400px;
    top: 15%;
    left: 25%;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 80%;
  left: 50%;
`;
