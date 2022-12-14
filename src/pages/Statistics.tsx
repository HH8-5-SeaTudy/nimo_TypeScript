import { useEffect } from "react";
import styled from "styled-components";
import FishBowl from "../components/statistics/FishBowl";
import Month from "../components/statistics/Month";
import MyResponsiveCalendar from "../components/statistics/MyResponsiveCalendar";
import Weekly from "../components/statistics/Weekly";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { __getUserProfile } from "../redux/modules/userData";
import { getCookie } from "../components/social/Cookie";
import { useNavigate } from "react-router-dom";
import DayRank from "../components/statistics/DayRank";
import WeekRank from "../components/statistics/WeekRank";

const Statistics = () => {
  const userData = useAppSelector((state) => state.userData.userProfile);
  const userPoint = userData.point;
  const dispatch = useAppDispatch();

  const token: string = getCookie("token") as string;
  const navigate = useNavigate();

  useEffect(() => {
    if (token === undefined) {
      navigate("/login");
      alert("로그인이 필요한 페이지입니다.");
    }
    dispatch(__getUserProfile());
  }, [token]);

  return (
    <>
      {/* <Header/> */}
      <StatisticsLayer>
        <Layer>
          <TopLayer>
            <RankSide>
              <RankTitle>
                <p>
                  TODAY
                  <br />
                  RANKING
                </p>
              </RankTitle>
              <DayRank />
            </RankSide>
            <RankSide>
              <RankTitle>
                <p>
                  LAST WEEK
                  <br />
                  RANKING
                </p>
              </RankTitle>
              <WeekRank />
            </RankSide>
            <TotalSide>
              <TopBox>
                <TotalTime>
                  <Title>TOTAL POINT</Title>
                  <P>{userPoint}</P>
                </TotalTime>
              </TopBox>
              <BottomBox>
                <NextFish>
                  <NextFishTitle>
                    <p>NEXT LEVEL</p>
                  </NextFishTitle>
                  <NextFishBody>
                    <FishBowl />
                  </NextFishBody>
                </NextFish>
                <Week>
                  <WeekTitle>
                    <p>WEEKLY TIME</p>
                  </WeekTitle>
                  <WeekBody>
                    <Weekly />
                  </WeekBody>
                </Week>
                <MonthBox>
                  <MonthTitle>
                    <p>
                      MONTHLY
                      <br />
                      TIME
                    </p>
                  </MonthTitle>
                  <MonthBody>
                    <Month />
                  </MonthBody>
                </MonthBox>
              </BottomBox>
            </TotalSide>
          </TopLayer>
          <BottomLayer>
            <MyResponsiveCalendar />
          </BottomLayer>
        </Layer>
      </StatisticsLayer>
    </>
  );
};

export default Statistics;

const StatisticsLayer = styled.section`
  width: 100%;
  height: 90vh;
  background: #0096ff;
`;
const Layer = styled.div`
  width: 100vw;
  height: 100%;
  margin: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TopLayer = styled.div`
  height: 70%;
  margin-bottom: 10px;
  display: flex;
`;

const BottomLayer = styled.div`
  background-color: #0096ff;
  height: 30%;
  background-color: white;
  border-radius: 6px;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`;

const RankSide = styled.div`
  width: 25%;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 6px;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`;

const RankTitle = styled.div`
  border-radius: 6px 6px 0 0;
  height: 120px;
  background: #0096ff;
  font-size: 50px;
  line-height: 40px;
  padding: 0 20px;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 100%;
    text-align: center;
    border-bottom: solid black 2px;
  }
`;

const TotalSide = styled.div`
  width: 70%;
`;
const TopBox = styled.div`
  height: 30%;
  padding-bottom: 10px;
`;
const TotalTime = styled.div`
  height: 100%;
  border-radius: 6px;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;
const Title = styled.div`
  width: 35%;
  height: 50%;
  font-size: 50px;
  text-align: center;
`;
const P = styled.p`
  color: white;
  height: 100%;
  width: 70%;
  font-size: 10em;
  text-align: end;
  line-height: 1em;
`;
const BottomBox = styled.div`
  height: 70%;
  display: flex;
`;
const NextFish = styled.div`
  width: 35%;
  margin: 0 5px 0 0;
  background-color: #ff9100;
  border-radius: 6px;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`;

const NextFishTitle = styled.div`
  height: 25%;
  font-size: 50px;
  padding: 0 20px;
  background-color: #ff9100;
  border-radius: 6px;
  line-height: 40px;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 100%;
    text-align: center;
    border-bottom: solid black 2px;
  }
`;
const NextFishBody = styled.div`
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Week = styled.div`
  width: 35%;
  margin: 0 5px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`;

const WeekTitle = styled.div`
  background-color: #0096ff;
  height: 25%;
  font-size: 50px;
  line-height: 40px;
  padding: 0 20px;
  border-radius: 6px 6px 0 0;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 100%;
    text-align: center;
    border-bottom: solid black 2px;
  }
`;
const WeekBody = styled.div`
  height: 75%;
`;
const MonthBox = styled.div`
  width: 35%;
  margin: 0 0 0 5px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`;
const MonthTitle = styled.div`
  background: #0096ff;
  border-radius: 6px 6px 0 0;
  height: 25%;
  font-size: 50px;
  line-height: 40px;
  padding: 0 20px;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 100%;
    text-align: center;
    border-bottom: solid black 2px;
  }
`;
const MonthBody = styled.div`
  height: 75%;
`;
