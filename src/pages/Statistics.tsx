import React, { useEffect } from "react";
import styled from "styled-components";
import FishBowl from "../components/statistics/FishBowl";
import Month from "../components/statistics/Month";
import MyResponsiveCalendar from "../components/statistics/MyResponsiveCalendar";
import Weekly from "../components/statistics/Weekly";
import fishImages from "../components/fish/FishImages";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { __getUserProfile } from "../redux/modules/userData";
import { __getDayRank, __getWeekRank } from "../redux/modules/rank";

const Statistics = () => {
  const userData = useAppSelector((state) => state.userData.userProfile);
  const dayRankData = useAppSelector((state) => state.rank.dayRank);
  const weekRankData = useAppSelector((state) => state.rank.weekRank);
  const fishPoint = fishImages.map((data) => data.point);
  const userPoint = userData.point;
  const dispatch = useAppDispatch();
  const nextFishPoint = fishPoint.filter((x) => x > userPoint)[0];
  const nextPercent = (userPoint / nextFishPoint) * 100;
  const nextFishImg = fishImages.find((x) => x.point === nextFishPoint)?.image;


  useEffect(() => {
    dispatch(__getUserProfile());
    dispatch(__getDayRank());
    dispatch(__getWeekRank());
  }, []);

  return (
    <StatisticsLayer>
      <Layer>
        <TopLayer>
          <RankSide>
            <RankTitle><p>DAILY<br/>RANKING</p></RankTitle>
            <RankBox>
              {dayRankData?.map((list, index) => (
                <Rank>
                  <RankNum>
                    <Num>{index + 1}.</Num>
                  </RankNum>
                  <RankProfile src={list.fish}></RankProfile>
                  <RankInfo>
                    <NickName>{list.nickname}</NickName>
                    <Point>{list.dayStudy}</Point>
                  </RankInfo>
                </Rank>
              ))}
            </RankBox>
          </RankSide>
          <RankSide>
            <RankTitle><p>WEEKLY<br/>RANKING</p></RankTitle>
            <RankBox>
              {weekRankData?.map((list, index) => (
                <Rank>
                  <RankNum>
                    <Num>{index + 1}.</Num>
                  </RankNum>
                  <RankProfile src={list.fish}></RankProfile>
                  <RankInfo>
                    <NickName>{list.nickname}</NickName>
                    <Point>{list.weekStudy}</Point>
                  </RankInfo>
                </Rank>
              ))}
            </RankBox>
          </RankSide>
          <TotalSide>
            <TopBox>
              <TotalTime>
                <Title>
                TOTAL POINT
                </Title>
                <P>{userPoint}</P>
              </TotalTime>
            </TopBox>
            <BottomBox>
              <NextFish>
                <NextFishTitle><p>NEXT LEVEL</p></NextFishTitle>
                <NextFishBody>    
                  <FishBowl
                  nextPercent={nextPercent}
                  nextFishImg={nextFishImg}
                ></FishBowl></NextFishBody>
            
              </NextFish>
              <Week>
                <WeekTitle><p>WEEKLY TIME</p></WeekTitle>
                <WeekBody><Weekly/></WeekBody>
              </Week>
              <MonthBox>
                <MonthTitle><p>MONTHLY<br/>TIME</p></MonthTitle>
                <MonthBody><Month/></MonthBody>
              </MonthBox>
            </BottomBox>
          </TotalSide>
        </TopLayer>
        <BottomLayer>
          <MyResponsiveCalendar />
        </BottomLayer>
      </Layer>
    </StatisticsLayer>
  );
};

export default Statistics;

const StatisticsLayer = styled.section`
  width: 100%;
  height: 90vh;
  background: #0096FF;
`;
const Layer = styled.div`
  
  width: 100vw;
  height: 100%;
  margin: auto;
  padding: 30px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`
const TopLayer =styled.div`
height: 70%;
margin-bottom:10px;
display:flex;
`

const BottomLayer =styled.div`
background-color: #0096FF;
height: 30%;
background-color:white;
border-radius: 6px;
box-shadow: 5px 5px 5px 5px rgba(1,1,1,0.5);`

const RankSide =styled.div`
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
  background: #0096FF;
  font-size: 50px;
  line-height: 40px;
  padding: 0 20px;
  p {
    display:flex;
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
const RankBox = styled.div`
  padding-left: 5px;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0096FF;
    height: 5px;
  }
  div{
    &:first-child{
      margin-top:2px;
    }
  }
`;
const Rank = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5px;
  background-color: white;
  border-bottom: solid black 1px;
`;
const RankNum = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
`;
const Num = styled.div`
  height: 40px;
  width: 40px;
  margin: auto;
  display: flex;
  font-size: 25px;
  justify-content: center;
  align-items: center;
`;
const RankProfile = styled.img`
  width: 60px;
  height: 40px;
`;
const RankInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const NickName = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
  line-height: 17px;
`;
const Point = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
  line-height: 17px;
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
  padding:  0 10px;
`;
const Title = styled.div`
  width: 35%;
  height: 50%;
  font-size: 50px;
  text-align:center;
`;
const P = styled.p`
  color: white;
  height: 100%;
  width: 70%;
  font-size:10em;
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
    display:flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 100%;
    text-align: center;
    border-bottom: solid black 2px;
  }
`
const NextFishBody = styled.div`
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Week = styled.div`
  width: 35%;
  margin: 0 5px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`;

const WeekTitle = styled.div`
  background-color: #0096FF;
  height: 25%;
  font-size: 50px;
  line-height: 40px;
  padding: 0 20px;
  border-radius: 6px 6px 0 0;
  p {
    display:flex;
  align-items: center;
  justify-content: center;
    height: 90%;
    width: 100%;
    text-align: center;
    border-bottom: solid black 2px;
  }
`
const WeekBody = styled.div`
  height: 75%;
`
const MonthBox = styled.div`
  width: 35%;
  margin: 0 0 0 5px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`;
const MonthTitle =styled.div`
background: #0096FF;
border-radius: 6px 6px 0 0;
  height: 25%;
  font-size: 50px;
  line-height: 40px;
  padding: 0 20px;
  p {
    display:flex;
  align-items: center;
  justify-content: center;
    height: 90%;
    width: 100%;
    text-align: center;
    border-bottom: solid black 2px;
  }
`
const MonthBody =styled.div`
  height: 75%;
`