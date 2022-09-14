import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as onAsmrIcon } from "../../assets/icon/onAsmr.svg";
import Asmr from "../asmr/Asmr";
import StopWatch from "../stopwatch/StopWatch";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [asmrShow, setAsmrShow] = useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    setIsLogin(!isLogin);
  };

  if (window.location.pathname === "/intro") return null;
  if (window.location.pathname === "/login") return null;
  if (window.location.pathname === "kakaoLogin") return null;
  if (window.location.pathname === "naverLogin") return null;
  if (window.location.pathname === "googleLogin") return null;

  return (
    <>
      <HeaderContainer>
        <HeaderLogoContainer>
          <HeaderLogo onClick={() => navigate("/")}>Logo</HeaderLogo>
        </HeaderLogoContainer>
        {isLogin && (
          <HeaderTimerContainer>
            <HeaderTimer>
              <StopWatch />
            </HeaderTimer>
          </HeaderTimerContainer>
        )}
        <OnAsmrBtn onClick={() => setAsmrShow(!asmrShow)} />
        {asmrShow && <Asmr />}
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  position: absolute;
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
