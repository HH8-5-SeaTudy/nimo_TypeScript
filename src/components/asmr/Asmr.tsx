import React, { useState } from "react";
import styled from "styled-components";
import BirdIcon from "../../assets/icon/AsmrBird.svg";
import CloseIcon from "../../assets/icon/AsmrClose.svg";
import CompanyIcon from "../../assets/icon/AsmrCompany.svg";
import FireIcon from "../../assets/icon/AsmrFire.svg";
import WaterIcon from "../../assets/icon/AsmrWater.svg";
import WaveIcon from "../../assets/icon/AsmrWave.svg";

const Asmr = () => {
  const waveAudio = new Audio(
    "https://cdn.pixabay.com/download/audio/2022/03/12/audio_5b09815aa7.mp3?filename=black-sea-anapa-53651.mp3"
  );
  const rainAudio = new Audio(
    "https://cdn.pixabay.com/download/audio/2021/07/28/audio_ef43a9f6fd.mp3?filename=the-memory-of-water-meditation-5739.mp3"
  );
  const birdsAudio = new Audio(
    "https://cdn.pixabay.com/download/audio/2022/02/10/audio_7a07ee0e79.mp3?filename=birds-19624.mp3"
  );
  const gardenAudio = new Audio(
    "https://cdn.pixabay.com/download/audio/2021/12/04/audio_18efe9bcc6.mp3?filename=a-meditation-in-a-japanese-water-garden-11658.mp3"
  );
  const companyAudio = new Audio(
    "https://cdn.pixabay.com/audio/2022/03/09/audio_56b61d9f86.mp3"
  );

  const waveStart = () => {
    waveAudio.play();
    rainAudio.pause();
    birdsAudio.pause();
    gardenAudio.pause();
    companyAudio.pause();
    waveAudio.loop = true;
  };

  const rainStart = () => {
    rainAudio.play();
    waveAudio.pause();
    birdsAudio.pause();
    gardenAudio.pause();
    companyAudio.pause();
    rainAudio.loop = true;
  };

  const birdsStart = () => {
    birdsAudio.play();
    waveAudio.pause();
    rainAudio.pause();
    gardenAudio.pause();
    companyAudio.pause();
    birdsAudio.loop = true;
  };

  const gardenStart = () => {
    gardenAudio.play();
    waveAudio.pause();
    rainAudio.pause();
    birdsAudio.pause();
    companyAudio.pause();
    gardenAudio.loop = true;
  };

  const companyStart = () => {
    companyAudio.play();
    waveAudio.pause();
    rainAudio.pause();
    birdsAudio.pause();
    gardenAudio.pause();
    companyAudio.loop = true;
  };

  const pause = () => {
    waveAudio.pause();
    rainAudio.pause();
    birdsAudio.pause();
    gardenAudio.pause();
    companyAudio.pause();
  };

  return (
    <>
      <AsmrSelectBox>
        <BtnArrow></BtnArrow>
        <BtnGroup>
          <AsmrBtn onClick={waveStart}>
            <img src={WaveIcon} />
          </AsmrBtn>
          <AsmrBtn onClick={birdsStart}>
            <img src={BirdIcon} />
          </AsmrBtn>
          <AsmrBtn onClick={gardenStart}>
            <img src={FireIcon} />
          </AsmrBtn>
          <AsmrBtn onClick={rainStart}>
            <img src={WaterIcon} />
          </AsmrBtn>
          <AsmrBtn onClick={companyStart}>
            <img src={CompanyIcon} />
          </AsmrBtn>
          <AsmrBtn onClick={pause}>
            <img src={CloseIcon} />
          </AsmrBtn>
        </BtnGroup>
      </AsmrSelectBox>
    </>
  );
};

export default Asmr;

const AsmrSelectBox = styled.div`
  position: relative;
  top: 65px;
  right: 200px;
  width: 312px;
  height: 100%;
`;
const BtnArrow = styled.div`
  margin: auto;
  width: 0px;
  height: 0px;
  border-bottom: calc(20px * 1) solid rgba(40, 41, 58, 0.82);
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  text-align: center;
`;
const BtnGroup = styled.div`
  background: rgba(40, 41, 58, 0.82);
  border-radius: 20px;
  width: 312px;
  height: 72px;
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
