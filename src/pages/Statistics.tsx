import React from 'react';
import styled from 'styled-components';

const Statistics = () => {
  return (
    <StatisticsLayer>
    <Layer>
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
        <Chart>랭킹</Chart>
        <Graph>뭘넣어야지</Graph>
      </RightSide>
    </Layer>
       

     
    </StatisticsLayer>
  );
};

export default Statistics;

const StatisticsLayer = styled.section`
  border: solid red 1px;
  width:100%;
  height:100vh;
  padding: 130px 100px 100px 100px;
  background: #D0DEEA;
`
const Layer = styled.div`
border: solid blue 1px;
  width: 1800px;
  height: 1000px;
  display: flex;
  margin: auto;
`

const LeftSide = styled.div`
  border: solid red 1px;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TimeBox = styled.div`
  width: 100%;
  height: 30%;
  background: rgba(255, 255, 255, 0.71);
  border-radius: 20px;
  padding:20px;
  margin-bottom:20px;
  p{
    margin:0;
  }
`

const PointBox = styled.div`
width: 100%;
height: 70%;
background: rgba(255, 255, 255, 0.71);
border-radius: 20px;
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
  width: 70%;
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