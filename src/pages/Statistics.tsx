import React from 'react';
import styled from 'styled-components';
import FishBowl from '../components/statistics/FishBowl';
import Month from '../components/statistics/Month';
import MyResponsiveCalendar from '../components/statistics/MyResponsiveCalendar';
import Weekly from '../components/statistics/Weekly';

const Statistics = () => {
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
              <p>TotalTime</p>
              <span>777,777,777</span>
            </TotalTime>
          </TopBox>
          <BottomBox>
            <NextFish>
              <FishBowl></FishBowl>
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
  height:100vh;
  padding: 65px 0 0 0;
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
  border-left: solid #1975F8 3px; 
  border-right: solid #1975F8 3px; 
  height: 100%;
  box-shadow:inset 0 0 5px #b3e5fc,inset 0 0 25px #03e9f4,inset 0 0 50px #03e9f4,
  inset 0 0 100px #b3e5fc, inset 1px 1px 1px 0px rgba(255, 255, 255, 0.819);
`
const Rank = styled.div`
  height: 50px;
  display: flex;
  justify-content:space-between;
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
  width:50px;
`
const RankInfo =styled.div`
  border: solid red 1px;
  width:200px;
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
  display:flex;
  flex-direction:column;
  text-align:center;
  justify-content: center;
  p{
    font-size: 50px;
  }
  span {
    font-size : 100px;
  }
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