import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "../../assets/icon/AsmrClose.svg";
import asmrfire from "../../assets/pixel/asmrfire.png";
import asmrgreen from "../../assets/pixel/asmrgreen.png";
import asmrwave from "../../assets/pixel/asmrwave.png";
import asmrrain from "../../assets/pixel/asmrrain.png";

const Asmr = () => {
  const [waveAudio] = useState(
    new Audio(
      "https://cdn.pixabay.com/download/audio/2022/03/12/audio_5b09815aa7.mp3?filename=black-sea-anapa-53651.mp3"
    )
  );
  const [greenAudio] = useState(
    new Audio(
      "https://cdn.pixabay.com/download/audio/2022/02/10/audio_9080c6f74e.mp3?filename=ambience_lake_morning_water_birds_crickets-19255.mp3"
    )
  );
  const [fireAudio] = useState(
    new Audio(
      "https://cdn.pixabay.com/download/audio/2022/01/18/audio_2c362dfa75.mp3?filename=aachen_burning-fireplace-crackling-fire-soundswav-14561.mp3"
    )
  );
  const [rainAudio] = useState(
    new Audio(
      "https://cdn.pixabay.com/download/audio/2022/07/04/audio_f52a5754b1.mp3?filename=light-rain-ambient-114354.mp3"
    )
  );

  function waveStart() {
    waveAudio.play();
    waveAudio.loop = true;
    greenAudio.pause();
    fireAudio.pause();
    rainAudio.pause();
  }

  function greenStart() {
    greenAudio.play();
    greenAudio.loop = true;
    waveAudio.pause();
    fireAudio.pause();
    rainAudio.pause();
  }

  function fireStart() {
    fireAudio.play();
    fireAudio.loop = true;
    waveAudio.pause();
    rainAudio.pause();
    greenAudio.pause();
  }

  function rainStart() {
    rainAudio.play();
    rainAudio.loop = true;
    waveAudio.pause();
    greenAudio.pause();
    fireAudio.pause();
  }

  function pause() {
    waveAudio.pause();
    rainAudio.pause();
    greenAudio.pause();
    fireAudio.pause();
  }

  return (
    <>
      <AsmrSelectBox>
        <BtnArrow></BtnArrow>
        <BtnGroup>
          <AsmrBtn onClick={waveStart}>
            <img src={asmrwave} alt="" />
          </AsmrBtn>
          <AsmrBtn onClick={greenStart}>
            <img src={asmrgreen} alt="" />
          </AsmrBtn>
          <AsmrBtn onClick={fireStart}>
            <img src={asmrfire} alt="" />
          </AsmrBtn>
          <AsmrBtn onClick={rainStart}>
            <img src={asmrrain} alt="" />
          </AsmrBtn>
          <AsmrBtn onClick={pause}>
            <img src={CloseIcon} alt="" />
          </AsmrBtn>
        </BtnGroup>
      </AsmrSelectBox>
    </>
  );
};

export default React.memo(Asmr);

const BtnArrow = styled.div`
  margin: auto;
  width: 0px;
  height: 0px;
  border-bottom: calc(20px * 1) solid #1569ab;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  text-align: center;
`;
const AsmrSelectBox = styled.div`
  position: absolute;
  left: calc(-15vw / 2 + 30px);
  top: 8.5vh;
  width: 15vw;
  z-index: 3;
`;

const BtnGroup = styled.div`
  background: #1569ab;
  border-radius: 30px;
  width: 100%;
  height: 5.5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const AsmrBtn = styled.div`
  width: 35px;
  height: 35px;
  background: #ffffff;
  border-radius: 50%;
  ${({ theme }) => theme.common.flexCenter};
  opacity: 0.8;
  img {
    width: 24px;
    height: 24px;
  }
  &:hover {
    width: 40px;
    height: 40px;
    opacity: 1;
    img {
      width: 28px;
      height: 28px;
    }
  }
  &:last-child {
    background: #6f8aa9;
  }
`;
