import React from 'react';
import styled,{keyframes} from 'styled-components';


const FishBowl = (props:any) => {
  const waterPercent = 100 - props.nextPercent;
  console.log(waterPercent)
  return (
    <BowlLayer>
      <Bowl>
        <BowlInner>
          <Percent>{props.nextPercent}%</Percent>
          <Water style={{top:`${waterPercent}%`}}></Water>
          <Glare></Glare>
        </BowlInner>
      </Bowl>
    </BowlLayer>
  );
};

export default FishBowl;


const BowlLayer = styled.div `
    box-sizing: border-box;
    display: block;
    font-family: sans-serif;
    font-size: 15px;
    color: #ccc;
    line-height: 1.15;
    box-sizing:border-box;

`
const Bowl = styled.div`
  transition: all 1s ease;
  box-shadow: 0 0 20px #028695;
  border: 5px solid #53ebfc;
  width: 200px;
  height: 200px;
  position: relative;
  border-radius: 50%;
  
`
const BowlInner = styled.div`
  transition: all 1s ease;
  border: 5px solid white;
  width: 190px;
  height: 190px;
  position: absolute;
  overflow: hidden;
  z-index: 2;
  border-radius: 50%;
`
const Percent = styled.div`
  text-shadow: 0 0 10px #028695;
  color: #53ebfc;
  line-height: 220px;
    font-size: 80px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-weight: bold;
    text-align: center;
`
const spin = keyframes`
0% {
  transform: rotate(0deg);
   }
100% {
  transform: rotate(360deg);
 }
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
`
const Glare = styled.div`
    background-color: rgba(255,255,255,0.15);
    position: absolute;
    top: -120%;
    left: -120%;
    z-index: 5;
    width: 200%;
    height: 200%;
    transform: rotate(45deg);
    border-radius: 50%;
    `