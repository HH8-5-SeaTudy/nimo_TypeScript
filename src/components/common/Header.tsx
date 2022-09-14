import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Itime } from '../../api';
import { ReactComponent as onAsmrIcon } from "../../assets/icon/onAsmr.svg";
import Asmr from '../asmr/Asmr';
import { Link } from 'react-router-dom';



const Header = ({ timeHH, timeMM, timeSS }:Itime) => {

  const [asmrShow, setAsmrShow] = useState(false)

  if (window.location.pathname === '/intro') return null;
  if (window.location.pathname === '/login') return null;
  if (window.location.pathname === '/kakaoLogin') return null;
  if (window.location.pathname === '/naverLogin') return null;
  if (window.location.pathname === '/googleLogin') return null;

  return (
    <>  
    <HeaderContainer>
      <HeaderLogoContainer>
        <HeaderLogo>Logo</HeaderLogo>
      </HeaderLogoContainer>
        <HeaderTimerContainer>
          <HeaderTimer>
          <Layer>
            <Link to='/statistics' style={{ textDecoration: 'none' }}>    
            <span>{("0" + Math.floor(timeHH % 24)).slice(-2)}:</span>
            <span>{("0" + Math.floor(timeMM % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor(timeSS % 60)).slice(-2)}</span>
            </Link>
          </Layer>
          </HeaderTimer>
        </HeaderTimerContainer>
      <OnAsmrBtn onClick={()=>setAsmrShow(!asmrShow)}/>
      {asmrShow && <Asmr/>}
    </HeaderContainer> 
 </>
  

  );
};
const Layer = styled.div`
  span {
     color: white;
  }
`

const HeaderContainer = styled.div`
  position:relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  background-color: #28293a;
  padding: 0px 56px;
`;

const HeaderLogoContainer = styled.div`
  display: flex;
`;

const HeaderLogo = styled.span`
  font-weight: 700;
  font-size: 32px;
  width: 118px;
  height: 47px;
  color: #fff;
`;

const HeaderTimerContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const HeaderTimer = styled.span`
  color: #fff;
  font-size: 32px;
`;

const OnAsmrBtn = styled(onAsmrIcon)`
  position: absolute;
  right: 400px;
`;

export default Header;
