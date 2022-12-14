import React from 'react';
import styled, { keyframes } from "styled-components";
import fishImages from '../fish/FishImages';
import { useAppSelector } from '../hooks/reduxHooks';


const FishBowl = () => {
  const userData = useAppSelector((state) => state.userData.userProfile);
  const fishPoint = fishImages.map((data) => data.point);
  const userPoint = userData.point;
  const prevFishPoint = fishPoint.filter((x) => x < userPoint).slice(-1)[0];
  const nextFishPoint = fishPoint.filter((x) => x > userPoint)[0];
  const totalFishPoint = nextFishPoint - prevFishPoint;
  const myPoint = userPoint - prevFishPoint;
  const nextPercent = (myPoint / totalFishPoint) * 100;
  const nextFishImg = fishImages.find((x) => x.point === nextFishPoint)?.image;
  const waterPercent = 100 - nextPercent;

  return (
    <BowlLayer>
      <Bowl>
        <BowlInner>
          <Percent>{String(nextPercent).slice(0, 2) === 'Na' ? '0' : String(nextPercent).slice(0, 2) }%</Percent>
          <Water style={{ top: `${waterPercent}%` }}></Water>
          <Glare></Glare>
          <FishBox>
            <NextFish src={nextFishImg}></NextFish>
          </FishBox>
        </BowlInner>
      </Bowl>
    </BowlLayer>
  );
};

export default React.memo(FishBowl);

const BowlLayer = styled.div`
  box-sizing: border-box;
  display: block;
  font-family: sans-serif;
  font-size: 15px;
  color: #ccc;
  line-height: 1.15;
  box-sizing: border-box;
`;
const Bowl = styled.div`
  transition: all 1s ease;
  box-shadow: 0 0 20px #028695;
  border: 5px solid #53ebfc;
  width: 210px;
  height: 210px;
  position: relative;
  border-radius: 50%;
`;
const BowlInner = styled.div`
  transition: all 1s ease;
  border: 5px solid white;
  width: 200px;
  height: 200px;
  position: absolute;
  overflow: hidden;
  z-index: 2;
  border-radius: 50%;
`;
const Percent = styled.div`
  text-shadow: 0 0 10px #028695;
  color: white;
  line-height: 220px;
  font-size: 60px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: bold;
  text-align: center;
  z-index: 2;
`;
const spin = keyframes`
0% {
  transform: rotate(0deg);
   }
100% {
  transform: rotate(360deg);
 }
`;

const NextFish = styled.img`
  z-index: -1;
`;
const Water = styled.div`
  box-shadow: 0 0 20px #03a9bc;
  transition: all 1s ease;
  background: #53e3fc7f;
  position: absolute;
  z-index: 1;
  width: 200%;
  height: 200%;
  left: -50%;
  border-radius: 40%;
  animation: ${spin} 10s linear infinite;
  z-index: 1;
`;
const Glare = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  position: absolute;
  top: -120%;
  left: -120%;
  z-index: 5;
  width: 200%;
  height: 200%;
  transform: rotate(45deg);
  border-radius: 50%;
  z-index: 1;
`;

const FishBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 20px 0 20px;
`;
