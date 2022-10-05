import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import shell from "../../assets/pixel/shell.png";
import calendar from "../../assets/pixel/calendar.png";
import ranking from "../../assets/pixel/ranking.png";
import server from "../../assets/pixel/server.png";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  __getCheckOutTimer,
  __getUserinquire,
} from "../../redux/modules/timer";
import logo from "../../assets/logo/seatudyLogo.png";
import CalendarVer2 from "../calendar/CalendarVer2";
import { __getDayMyRank, __getWeekMyRank } from "../../redux/modules/rank";
import { __getUserProfile } from "../../redux/modules/userData";
import fishImages from "../fish/FishImages";
import { getCookie } from "../social/Cookie";
import axios from "axios";
import Asmr from "../asmr/Asmr";

const Header = () => {
  const token: string = getCookie("token") as string;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const dateString = year + "-" + month + "-" + day;

  const [todayDday, setTodayDday] = useState<any>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const time = useAppSelector((state) => state.timer);
  const dayMyRank = useAppSelector((state) => state.rank.dayMyRank.myRank);
  const weekMyRank = useAppSelector((state) => state.rank.WeekMyRank.myRank);
  const Dday = useAppSelector((state) => state.dday.DdayData);
  const userData = useAppSelector((state) => state.userData.userProfile);
  const fishPoint = fishImages.map((data) => data.point);
  const userPoint = userData.point;
  const prevFishPoint = fishPoint.filter((x) => x < userPoint).slice(-1)[0];
  const nextFishPoint = fishPoint.filter((x) => x > userPoint)[0];
  const totalFishPoint = nextFishPoint - prevFishPoint;
  const myPoint = userPoint - prevFishPoint;
  const nextPercent = (myPoint / totalFishPoint) * 100;
  const nextFishImg = fishImages.find((x) => x.point === nextFishPoint)?.image;

  const [playing, setPlaying] = useState(false);

  const TodayStudyData = async () => {
    return await axios
      .get(`${BASE_URL}/api/v1/ddays/dates?selectDate=${dateString}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setTodayDday(res.data.data);
      });
  };

  const NextDay = todayDday
    ?.filter((x: any) => x.targetDay >= dateString)
    .sort((a: any, b: any) => b.dday - a.dday)[0];

  useEffect(() => {
    TodayStudyData();
  }, [Dday]);

  const [showTodo, setShowTodo] = useState(false);
  const [hh, mm, ss] = String(time.dayStudyTime)
    .split(":")
    .map((v) => +v);

  const [timeSS, setTimeSS] = useState<number>(0);
  const [timeMM, setTimeMM] = useState<number>(0);
  const [timeHH, setTimeHH] = useState<number>(0);

  const roomId1 = process.env.REACT_APP_ROOMID1;
  const roomId2 = process.env.REACT_APP_ROOMID2;
  const roomId3 = process.env.REACT_APP_ROOMID3;
  const roomId4 = process.env.REACT_APP_ROOMID4;
  const roomId5 = process.env.REACT_APP_ROOMID5;

  useEffect(() => {
    dispatch(__getUserinquire());
    dispatch(__getDayMyRank());
    dispatch(__getWeekMyRank());
    dispatch(__getUserProfile());
    return () => {
      dispatch(__getCheckOutTimer());
    };
  }, [token]);

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
    if (timeSS % 60 === 0 && timeSS !== 0) {
      setTimeMM((mm) => mm + 1);
    }

    return () => clearInterval(interval);
  }, [JSON.stringify(time), timeSS]);

  useEffect(() => {
    if (timeMM % 60 === 0 && timeMM !== 0) {
      setTimeHH((hh) => hh + 1);
    }
  }, [timeMM]);

  if (window.location.pathname === "/login") return null;
  if (window.location.pathname === "/kakaoLogin") return null;
  if (window.location.pathname === "/naverLogin") return null;
  if (window.location.pathname === "/googleLogin") return null;

  return (
    <>
      <HeaderContainer>
        {showTodo && <CalendarVer2 />}
        {/* 로고 */}
        <HeaderLogoContainer>
          <HeaderLogo src={logo} onClick={() => navigate("/home")} />
        </HeaderLogoContainer>
        {/* 소라버튼 */}
        <AsmrBtn>
          <OnAsmr src={shell} onClick={() => setPlaying(!playing)} />
          {playing && <Asmr />}
        </AsmrBtn>
        {/* 캘린더버튼 */}
        <CalendarBtn>
          <Calendar src={calendar} onClick={() => setShowTodo(!showTodo)} />
        </CalendarBtn>
        {/* 다음물고기 */}
        <FishBtn>
          <Calendar src={nextFishImg} onClick={() => navigate("/unlock")} />
          <p>
            {String(nextPercent).slice(0, 2) === 'Na' ? '0' : String(nextPercent).slice(0, 2) }%
          </p>

        </FishBtn>
        {/* 랭킹 */}
        <RankBtn>
          <Calendar src={ranking} onClick={() => navigate("/statistics")} />
          <p>
            {dayMyRank === 0 ? "D:기록없음" : "D:" + dayMyRank + "위"}
            {weekMyRank === 0 ? "W:기록없음" : "W:" + weekMyRank + "위"}
          </p>
        </RankBtn>
        {/* 서버 */}
        <ServerBtn>
          <Calendar src={server} />
          <ServerBox>
            <div
              onClick={() => {
                navigate("/chat", {
                  state: {
                    id: roomId1,
                  },
                });
                window.location.reload();
              }}
            >
              인도양
            </div>
            <div
              onClick={() => {
                navigate("/chat", {
                  state: {
                    id: roomId2,
                  },
                });
                window.location.reload();
              }}
            >
              태평양
            </div>
            <div
              onClick={() => {
                navigate("/chat", {
                  state: {
                    id: roomId3,
                  },
                });
                window.location.reload();
              }}
            >
              대서양
            </div>
            <div
              onClick={() => {
                navigate("/chat", {
                  state: {
                    id: roomId4,
                  },
                });
                window.location.reload();
              }}
            >
              북극해
            </div>
            <div
              onClick={() => {
                navigate("/chat", {
                  state: {
                    id: roomId5,
                  },
                });
                window.location.reload();
              }}
            >
              남극해
            </div>
          </ServerBox>
        </ServerBtn>
        {/* 제일빠른디데이 */}
        {NextDay && (
          <DdayBtn>
            <DdayTitle>
              D-
              <br />
              {NextDay?.dday === 0 ? "Day" : String(NextDay?.dday).slice(1)}
            </DdayTitle>
            <DdayContent>
              {NextDay?.targetDay}
              <br />
              {NextDay?.title}
            </DdayContent>
          </DdayBtn>
        )}
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
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  padding: 0px 55px;
  height: 10vh;
  box-shadow: 1px 1px 3px 1px #dadce0;
  background: #ff9100;
`;

const HeaderLogoContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const HeaderLogo = styled.img`
  width: 120px;
  height: 66.5px;
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

const AsmrBtn = styled.button`
  position: absolute;
  left: 20%;
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
  position: absolute;
  left: 30%;
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

const FishBtn = styled.button`
  position: absolute;
  left: 40%;
  width: 80px;
  height: 60px;
  padding: 8px;
  border-radius: 9999px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  p {
    color: black;
    font-weight: 700;
  }
`;
const RankBtn = styled.button`
  position: absolute;
  left: 50%;
  width: 60px;
  height: 60px;
  padding: 8px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  p {
    position: absolute;
    color: black;
    font-weight: 700;
    width: 140px;
    left: -32px;
  }
`;
const ServerBtn = styled.div`
  position: absolute;
  left: 60%;
  width: 65px;
  height: 65px;
  padding: 8px;
  border-radius: 9999px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    div {
      display: flex;
    }
  }
`;
const ServerBox = styled.div`
  border: solid red 1px;
  position: absolute;
  width: 65px;
  height: 120px;
  left: 0.2px;
  font-size: 14px;
  z-index: 3;
  display: none;
  flex-direction: column;
  border: solid white 2px;
  border-radius: 6px;
  div {
    height: calc(120px / 5);
    text-align: center;
    background-color: #b2e2ff;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #259fea;
    }
    &:first-child {
      border-radius: 3.5px 3.5px 0 0;
    }
    &:last-child {
      border-radius: 0 0 3.5px 3.5px;
    }
  }
`;

const DdayBtn = styled.div`
  position: absolute;
  left: 70%;
  width: 60px;
  height: 60px;
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    p {
      display: flex;
      position: absolute;
      left: -10px;
    }
  }
`;

const DdayTitle = styled.div`
  width: 100%;
  height: 100%;
  font-size: 25px;
  line-height: 17px;
  font-weight: 700;
  border: solid black 2px;
  background-color: #7dccff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;
const DdayContent = styled.p`
  position: absolute;
  width: 140%;
  border-radius: 6px;
  font-size: 14px;
  z-index: 3;
  line-height: 15px;
  padding: 3px 5px;
  background-color: #b2e2ff;
  display: none;
  text-align: center;
  border: solid white 2px;
`;

const Calendar = styled.img`
  width: 100%;
  height: 100%;
`;

export default Header;
