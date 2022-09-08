import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useCounter } from "../../pages/CheckIn";
import { ReactComponent as onAsmrIcon } from "../../assets/icon/onAsmr.svg";
import Asmr from '../asmr/Asmr';

interface props {
  start? : ()=>void,
  stop? : ()=>void
}

const Header = ({start, stop}:props) => {
  const [isLogin, setIsLogin] = useState(false);
  const { count } = useCounter(0, 1000);
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  // 타이머 기능
  const timer = () => {
    const checkMinutes = Math.floor(count / 60);
    const hours = Math.floor(count / 3600);
    const minutes = checkMinutes % 60;
    const seconds = count % 60;

    setCurrentHours(hours);
    setCurrentMinutes(minutes);
    setCurrentSeconds(seconds);
  };

  const onClick = () => {
    setIsLogin(!isLogin);
  };
  useEffect(timer, [count]);
  return (
    <>  <HeaderContainer>
      <HeaderLogoContainer>
        <HeaderLogo>Logo</HeaderLogo>
      </HeaderLogoContainer>
      {isLogin && (
        <HeaderTimerContainer>
          <HeaderTimer>
            <h1>
              {currentHours < 10 ? `0${currentHours}` : currentHours} :
              {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes} :
              {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
            </h1>
          </HeaderTimer>
          {/* <CheckIn /> */}
        </HeaderTimerContainer>
      )}
      <OnAsmrBtn />
      <Asmr/>
    </HeaderContainer> 
 </>
  
  );
};

const HeaderContainer = styled.div`
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
