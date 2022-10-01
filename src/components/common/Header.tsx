import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import shell from "../../assets/pixel/shell.png";
import calendar from "../../assets/pixel/calendar.png";
import Asmr from "../asmr/Asmr";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  __getCheckInTimer,
  __getCheckOutTimer,
  __getUserinquire,
} from "../../redux/modules/timer";
import logo from "../../assets/logo/seatudyLogo.png";
import CalendarVer2 from "../calendar/CalendarVer2";
import { __getDayMyRank, __getWeekMyRank } from "../../redux/modules/rank";
import Grid from "../../elements/Grid";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const time = useAppSelector((state) => state.timer);
  // const dayMyRank = useAppSelector((state) => state.rank.dayMyRank.myRank);
  const weekMyRank = useAppSelector((state) => state.rank.WeekMyRank.myRank);
  const nickname = useAppSelector((state) => state.rank.WeekMyRank.nickname);
  const [asmrShow, setAsmrShow] = useState(false);
  const [showTodo, setShowTodo] = useState(false);
  const [hh, mm, ss] = String(time.dayStudyTime)
    .split(":")
    .map((v) => +v);

  const [timeSS, setTimeSS] = useState<number>(0);
  const [timeMM, setTimeMM] = useState<number>(0);
  const [timeHH, setTimeHH] = useState<number>(0);

  useEffect(() => {
    dispatch(__getUserinquire());
    dispatch(__getDayMyRank());
    dispatch(__getWeekMyRank());

    return () => {
      dispatch(__getCheckOutTimer());
    };
  }, []);

  useEffect(() => {
    setTimeSS(ss);
    setTimeMM(mm);
    setTimeHH(hh);
  }, [time]);

  useEffect(() => {
    let interval: any = null;
    if (time.isStudy) {
      interval = setInterval(() => {
        setTimeSS((ss) => ss + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (timeSS % 60 == 0 && timeSS !== 0) {
      setTimeMM((mm) => mm + 1);
    }

    return () => clearInterval(interval);
  }, [JSON.stringify(time), timeSS]);

  useEffect(() => {
    if (timeMM % 60 == 0 && timeMM !== 0) {
      setTimeHH((hh) => hh + 1);
    }
  }, [timeMM]);

  if (window.location.pathname === "/intro") return null;
  if (window.location.pathname === "/") return null;
  if (window.location.pathname === "/kakaoLogin") return null;
  if (window.location.pathname === "/naverLogin") return null;
  if (window.location.pathname === "/googleLogin") return null;
  if (window.location.pathname === "/main") return null;

  return (
    <>
      <HeaderContainer>
        {showTodo && <CalendarVer2 />}
        {/* 로고 */}
        <HeaderLogoContainer>
          <HeaderLogo src={logo} onClick={() => navigate("/home")} />
        </HeaderLogoContainer>

        {/* 캘린더 소라 버튼 */}
        <HeaderButtonContainer>
          <AsmrBtn>
            <OnAsmr src={shell} onClick={() => setAsmrShow(!asmrShow)} />
            {asmrShow && <Asmr />}
          </AsmrBtn>
          <CalendarBtn>
            <Calendar src={calendar} onClick={() => setShowTodo(!showTodo)} />
          </CalendarBtn>
        </HeaderButtonContainer>

        {/* 내 순위 들어가는 부분 */}
        <RankContainer>
          <Grid
            // width="30%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Nickname>{nickname}</Nickname>
          </Grid>
          <Grid>
            <Grid display="flex" flexDirection="column" alignItems="center">
              {/* <DayRank>일간랭킹: {dayMyRank}</DayRank> */}
            </Grid>
            <Grid display="flex" flexDirection="column" alignItems="center">
              <WeekRank>주간랭킹: {weekMyRank}</WeekRank>
            </Grid>
          </Grid>
        </RankContainer>
        <HeaderTimerContainer>
          <HeaderTimer>
            <Layer>
              <Link to="/statistics" style={{ textDecoration: "none" }}>
                <span>{("0" + Math.floor(timeHH % 24)).slice(-2)}:</span>
                <span>
                  {timeMM === undefined
                    ? "00"
                    : ("0" + Math.floor(timeMM % 60)).slice(-2)}
                  :
                </span>
                <span>
                  {timeSS === undefined
                    ? "00"
                    : ("0" + Math.floor(timeSS % 60)).slice(-2)}
                </span>
              </Link>
            </Layer>
          </HeaderTimer>
        </HeaderTimerContainer>
      </HeaderContainer>
    </>
  );
};
const Layer = styled.div`
  span {
    color: white;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  padding: 0px 56px;
  height: 10vh;

  background: #ff9100;
`;

const HeaderLogoContainer = styled.div`
  display: flex;
`;

const HeaderLogo = styled.img`
  width: 150px;
  height: 130px;
`;

const HeaderTimerContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const HeaderTimer = styled.span`
  color: #fff;
  font-size: 50px;
`;

const HeaderButtonContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 20%;
`;

const AsmrBtn = styled.button`
  position: relative;
  width: 60px;
  height: 60px;
  padding: 8px;
  border-radius: 9999px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const OnAsmr = styled.img`
  width: 100%;
  height: 100%;
`;

const CalendarBtn = styled.button`
  width: 60px;
  height: 60px;
  padding: 8px;
  border-radius: 9999px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Calendar = styled.img`
  width: 100%;
  height: 100%;
`;

const RankContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
`;

const Nickname = styled.span`
  font-size: 1.2em;
  color: black;
`;

const DayRank = styled.span`
  font-size: 1.2em;
  color: black;
`;

const WeekRank = styled.span`
  font-size: 1.2em;
  color: black;
`;

export default Header;
