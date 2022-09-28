import React, { useEffect } from 'react';
import styled from 'styled-components';
import FishBowl from '../components/statistics/FishBowl';
import Month from '../components/statistics/Month';
import MyResponsiveCalendar from '../components/statistics/MyResponsiveCalendar';
import Weekly from '../components/statistics/Weekly';
import fishImages from "../components/fish/FishImages";
import { useAppDispatch, useAppSelector } from "../components/hooks/reduxHooks";
import { __getUserProfile } from '../redux/modules/userData';
import { __getDayRank, __getWeekRank } from '../redux/modules/rank';

const Statistics = () => {
  const userData = useAppSelector((state) => state.userData.userProfile);
  const dayRankData = useAppSelector((state) => state.rank.dayRank);
  const weekRankData= useAppSelector((state) => state.rank.weekRank);
  const fishPoint = fishImages.map((data) => data.point);
  const userPoint = userData.point;
  const dispatch = useAppDispatch();
  const nextFishPoint =  fishPoint.filter((x)=> x > userPoint)[0]
  const nextPercent = userPoint / nextFishPoint * 100
  const nextFishImg = fishImages.find((x)=>x.point === nextFishPoint)?.image


  console.log('일랭',dayRankData)
  console.log('주랭',weekRankData)

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
          <RankTitle>주간랭킹</RankTitle>
          <RankBox>
            <Rank>
              <RankNum><Num></Num></RankNum>
              <RankProfile></RankProfile>
              <RankInfo>
                <NickName>이중표</NickName>
                <Point>10000P</Point>
              </RankInfo>
            </Rank>
          </RankBox>
          <NextBtn>스크롤버튼</NextBtn>
        </RankSide>
        <RankSide>
          <RankTitle>월간랭킹</RankTitle>
          <RankBox>
            <Rank>
              <RankNum><Num></Num></RankNum>
              <RankProfile></RankProfile>
              <RankInfo>
                <NickName>이중표</NickName>
                <Point>10000P</Point>
              </RankInfo>
            </Rank>
          </RankBox>
          <NextBtn>스크롤버튼</NextBtn>
        </RankSide>
        <TotalSide>
          <TopBox>
            <TotalTime>
              <Title>
              <p>Total Point</p>
              <span>1H = 1P</span>
              </Title>
              <P>{userPoint}P</P>
            </TotalTime>
          </TopBox>
          <BottomBox>
            <NextFish>
              <FishBowl nextPercent={nextPercent} nextFishImg={nextFishImg}></FishBowl>
            </NextFish>
            <Week>
              <Weekly/>
            </Week>
            <MonthBox>
              <Month/>
            </MonthBox>
          </BottomBox>
        </TotalSide>
        </TopLayer>
        <BottomLayer><MyResponsiveCalendar/></BottomLayer>
      </Layer>
    </StatisticsLayer>
  );
};

export default Statistics;

const StatisticsLayer = styled.section`
  width:100%;
  height:90vh;
  padding: 15px 0 0 0;
  background: #0096FF;
  
`
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

height: 30%;
background-color:#0096FF;
border-radius: 8px;
box-shadow: 5px 5px 5px 5px rgba(1,1,1,0.5);`

const RankSide =styled.div`

  width: 25%;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0096FF;
  border-radius: 8px;
    box-shadow: 5px 5px 5px 5px rgba(1,1,1,0.5);
`

const RankTitle = styled.div`
  border-radius: 8px 8px 0 0;
  height: 70px;
  background-color: #0096FF;

`
const NextBtn =styled.div `
border-radius:  0 0 8px 8px;
  height: 30px;
  background-color: #0096FF;

`

const TotalSide = styled.div`
  width: 70%;
`
const RankBox = styled.div`
  border-left: solid #0096FF 3px; 
  border-right: solid #0096FF 3px; 
  height: 100%;
  box-shadow:inset 0 0 5px #b3e5fc,inset 0 0 25px #03e9f4,inset 0 0 50px #03e9f4,
  inset 0 0 100px #b3e5fc, inset 1px 1px 1px 0px rgba(255, 255, 255, 0.819);
`
const Rank = styled.div`
border: solid 2px #0096FF;
  height: 50px;
  display: flex;
`
const RankNum =styled.div`
  border: solid red 1px;
  width:50px;
  display:flex;
  justify-content:center;
`
const Num =styled.div`
  border: solid red 1px;
  height:40px;
  width:40px;
  margin: auto;
  border-radius:50%;
`
const RankProfile =styled.div`
  border: solid red 1px;
  width:60px;
`
const RankInfo =styled.div`
  border: solid red 1px;
  width:65%;
  display:flex;
`
const NickName =styled.div`
  border: solid red 1px;
  width:50%;
  text-align: center;
`
const Point = styled.div`
  border: solid red 1px;
  width:50%;
  text-align: center;
`
const TopBox =styled.div`
  height:50%;
  padding-bottom:10px;
`
const TotalTime =styled.div`
  height:100%;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 5px rgba(1,1,1,0.5);
  color: white;
`
const  Title = styled.div`

  height:50%;
  font-size: 50px;
  display:flex;
  flex-direction:column;
 justify-content:center;   
    align-items:center;
    text-align:center;
    line-height: 50px;
    
  span {
    color: #ff9100;
  }
`
const P = styled.p`

    height:50%;
    display:flex;
   justify-content:center;   
    align-items:center;
    font-size: 90px;
`
const BottomBox =styled.div`

  height:50%;
  display:flex;
`
const NextFish =styled.div`
  width:35%;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0 5px 0 0;
  background-color:#0096FF;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 5px rgba(1,1,1,0.5);
`
const Week =styled.div`

  width:35%;
  margin:0 5px;
  background-color:#ff9100;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 5px rgba(1,1,1,0.5);
`
const MonthBox =styled.div`

  width:35%;
  margin:0 0 0 5px;
  background-color:#00D7FF;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 5px rgba(1,1,1,0.5);
`