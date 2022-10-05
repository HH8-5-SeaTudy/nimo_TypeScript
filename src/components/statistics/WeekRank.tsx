import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/reduxHooks';

const WeekRank = () => {
  const weekRankData = useAppSelector((state) => state.rank.weekRank);
  return (
    <RankBox>
    {weekRankData?.map((list, index) => (
      <Rank key={index}>
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
  );
};

export default WeekRank;

const RankBox = styled.div`
  padding-left: 5px;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0096ff;
    height: 5px;
  }
  div {
    &:first-child {
      margin-top: 2px;
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