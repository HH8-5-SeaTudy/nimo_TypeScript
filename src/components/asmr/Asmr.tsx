import React,{ useState } from 'react';
import styled from 'styled-components';
import  BirdIcon  from "../../assets/icon/AsmrBird.svg";
import  CloseIcon from "../../assets/icon/AsmrClose.svg";
import  CompanyIcon from "../../assets/icon/AsmrCompany.svg";
import  FireIcon from "../../assets/icon/AsmrFire.svg";
import  WaterIcon from "../../assets/icon/AsmrWater.svg";
import  WaveIcon from "../../assets/icon/AsmrWave.svg";



const Asmr = () => {

  const [onWave,setOnWave] = useState(false)
  
  const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/12/audio_5b09815aa7.mp3?filename=black-sea-anapa-53651.mp3')
  const start = () => { 
    audio.play()
    audio.loop = true}
  const pause = () => { 
    audio.pause()
  }
  
  return (
    <>
      <AsmrSelectBox>
        <BtnArrow></BtnArrow>
        <BtnGroup>
          <AsmrBtn onClick={start}><img src={WaveIcon}/></AsmrBtn>
          <AsmrBtn><img src={BirdIcon}/></AsmrBtn>
          <AsmrBtn><img src={FireIcon}/></AsmrBtn>
          <AsmrBtn><img src={WaterIcon}/></AsmrBtn>
          <AsmrBtn><img src={CompanyIcon}/></AsmrBtn>
          <AsmrBtn onClick={pause}><img src={CloseIcon}/></AsmrBtn>
        </BtnGroup>
    </AsmrSelectBox>
    </>
  );
};

export default Asmr;

const AsmrSelectBox = styled.div`
position: relative;
top: 100px;
width: 312px;
height:100%;
`
const BtnArrow = styled.div`
    margin: auto;
  width: 0px;
  height: 0px;
  border-bottom: calc( 20px * 1 ) solid rgba(40, 41, 58, 0.82);;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  text-align: center;
  
`
const BtnGroup =styled.div`
    background: rgba(40, 41, 58, 0.82);
border-radius: 20px;
  width: 312px;
height: 72px;
display:flex;
justify-content:space-around;
align-items:center;
`
const AsmrBtn = styled.div`
width:35px;
height:35px;
background: #FFFFFF;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
opacity:0.8;
 img {
  width: 24px;
height: 24px;
 }
 &:hover {
  width:40px;
  height:40px;
  opacity:1;
    img {
      width: 28px;
    height: 28px;
    }
}
 &:last-child{
  background: #6F8AA9;
 }

`