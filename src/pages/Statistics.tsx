import React from 'react';
import styled from 'styled-components';

const Statistics = () => {
  return (
    <StatisticsLayer>
      <LeftSide>
        <TimeBox>
          <p>9월 2022년</p>
          <table>
            <th></th>
            <th>전체시간</th>
            <th>평균시간</th>
            <tr>
                <td>일</td>
                <td>01:15</td>
                <td>01:15</td>
            </tr>
            <tr>
                <td>주</td>
                <td>01:15</td>
                <td>01:15</td>
            </tr>
        </table>
        </TimeBox>
        <PointBox>
          <Point>
            <p>누적포인트</p>
            <div>1,1111Point</div>
          </Point>
          <Fish>
            <p>해금물고기</p>
            <FishLock>
              <p>물고기사진</p>
              <p>해금완료</p>
            </FishLock>
            <FishLock>
              <p>물고기사진</p>
              <p>해금완료</p>
            </FishLock>
            <FishLock>
              <p>물고기사진</p>
              <p>해금완료</p>
            </FishLock>
            <FishLock>
              <p>물고기사진</p>
              <p>해금완료</p>
            </FishLock>
            
          </Fish>
          <button>상점으로이동</button>
        </PointBox>
      </LeftSide>
      <RightSide>
        <Chart></Chart>
        <Graph></Graph>
      </RightSide>
    </StatisticsLayer>
  );
};

export default Statistics;

const StatisticsLayer = styled.section`
  position: absolute;
  width:100%;
  height:954px;
  top: 67px;
  padding: 19px;
  background: #D0DEEA;
  display:flex;
`

const LeftSide = styled.div`
  position:relative;
  border: solid red 1px;
  width: 407px;
  height: 100%;
`

const TimeBox = styled.div`
  position:absolute;
  width: 407px;
  height: 244px;
  background: rgba(255, 255, 255, 0.71);
  border-radius: 20px;
  padding:10px;
  p{
    margin:0;
  }
`

const PointBox = styled.div`
 position:absolute;
 bottom:0px;
width: 407px;
height: 654px;
background: rgba(255, 255, 255, 0.71);
border-radius: 20px;
padding:10px;
`
const Point = styled.div`
    border: solid red 1px;
    height: 15%;
    p {
      font-size:20px;
      margin:0;
    }
    div {
      text-align:center;
      height: 50%;
    }
`

const Fish = styled.div`
  border: solid red 1px;
  p {
    font-size:20px;
      margin:0;
  }
`
const FishLock =styled.div`
  display:flex;
  justify-content:space-between;
  padding-right:20px;
  margin-top: 10px;

  p{
    &:first-child{
      width: 163px;
height: 48px;
background: rgba(217, 217, 217, 0.8);
border-radius: 20px
    }
  }
`
const RightSide = styled.div`
  border: solid red 1px;
  position: relative;
  width: 961px;
  height: 100%;
  margin-left: 25px;
  
`

const Chart = styled.div`
  border: solid red 1px;
  height: 65%;
  width:100%;
  background: rgba(255, 255, 255, 0.71);
  border-radius: 20px 20px 0 0;
`

const Graph = styled.div`
border: solid red 1px;
position:absolute;
bottom: 0px;
  height: 33%;
  width:100%;
  background: rgba(255, 255, 255, 0.71);
  border-radius: 0 0 20px 20px ;
`