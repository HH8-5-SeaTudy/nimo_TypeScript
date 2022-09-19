import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import moment from "moment";

 export type Iresault = {
  result: [];
    };

const CalendarVer2 = () => {
  const [getMoment, setMoment] = useState(moment());
  const [dd, setDD] = useState("");
  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const [todayShow,setTodayShow] = useState()

    const radius = 48;
    const diameter = 2 * Math.PI * radius;

   
    const calendarArr = () => {
      let result:any = [];
      let week = firstWeek;
  
      for (week; week <= lastWeek; week++) {
        result = result.concat(
          <CalendarRow key={week}>
            {Array(7)
              ?.fill(0)
              ?.map((data, index) => {
                let days = today
                  .clone()
                  .startOf("year")
                  .week(week)
                  .startOf("week")
                  .add(index, "day");
                if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                  return (
                    <CalendarCel
                      key={index}
                      onClick={() => setDD(days.format("YYYYMMDD"))}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 200 200">
                        <circle
                          cx="100"
                          cy="100"
                          r="48"
                          fill="transparent"
                          stroke="beige"
                          strokeWidth="70"
                        />
                        <AnimatedCircle
                          cx="100"
                          cy="100"
                          r="48"
                          fill="transparent"
                          stroke="#f6730e"
                          strokeWidth="70"
                          strokeDasharray={`${diameter * 0.55} ${
                            diameter - diameter * 0.55
                          }`}
                          strokeDashoffset={diameter * 0.25}
                        />
                      </svg>
                      <P  style={{ backgroundColor: "#2267ac"}}  >{days.format("D")}</P>
                    </CalendarCel>
                  );
                } else if (days.format("MM") !== today.format("MM")) {
                  return (
                    //이전달//다음달
                    <CalendarCel
                      key={index}
                      onClick={() => setDD(days.format("YYYYMMDD"))}
                    >
                      <P  style={{ backgroundColor: "#2267ac" }} >
                        {days.format("D")}</P>
                    </CalendarCel>
                  );
                } else {
                  //전체날짜
                  return (
                    <CalendarCel
                      key={index}
                      onClick={() => setDD(days.format("YYYYMMDD"))}
                    >
                      <Cel></Cel>
                      <P>{days.format("D")}</P>
                    </CalendarCel>
                  );
                }
              })}
          </CalendarRow>
        );
      }
      return result;
    };
    return (
      <>
        <Layer>
          <Wrapper>
            <Calendar>
              <CalendarRight>
                <Main>
                  <CalendarRow>
                    <CalendarCol>SUN</CalendarCol>
                    <CalendarCol>MON</CalendarCol>
                    <CalendarCol>TUE</CalendarCol>
                    <CalendarCol>WED</CalendarCol>
                    <CalendarCol>THU</CalendarCol>
                    <CalendarCol>FRI</CalendarCol>
                    <CalendarCol>SAT</CalendarCol>
                  </CalendarRow>
                  {calendarArr()}
                </Main>
              </CalendarRight>
              <LeftLayer>
                <MonthYear>
                  <YearBox>{today.format("YYYY")}</YearBox>
                  <Month>
                    <PrevBtn onClick={() => {
                        setMoment(getMoment.clone().subtract(1, "month"));
                      }}>버튼</PrevBtn>
                    <p> {today.format("MMMM")}</p>
                    <NextBtn onClick={() => {
                        setMoment(getMoment.clone().add(1, "month"));
                      }}>버튼</NextBtn>
                  </Month>
                  <YearBox> {today.format("DD")} </YearBox>
                </MonthYear>
                <CalendarLeft>
                  <AddEventBtn>
                    add event 
                    <AddEventBtnPlus>+</AddEventBtnPlus>
                  </AddEventBtn>
                  <LeftSideDay>
                    <LeftSideDayNum>
                      asdasd
                    </LeftSideDayNum>
                  </LeftSideDay>
                  <LeftSideEventList>ddd</LeftSideEventList>
                </CalendarLeft>
              </LeftLayer>
            </Calendar>
          </Wrapper>
        </Layer>
      </>
    );
  };
  
  export default CalendarVer2;
  const Layer = styled.div`
    /* border: solid red 7px;
    height: 90vh;
    width: 90vw;
    color: #ffffff; */
  `;
  
  const MonthYear = styled.div`
    background-color: #004b8f;
    border: solid red 1px;
    height: 70px;
    border-radius: 6px;
    margin: 20px 20px 0 20px;
    display: flex;
    justify-content:space-between;
  `;
  
  const Month = styled.div`
    border: solid red 1px;
    width: 150px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
  `;

  const YearBox = styled.div`
    border: solid red 1px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 70px;
  `
  const PrevBtn =styled.div`
        border: solid red 1px;

  `
  const NextBtn =styled.div`
        border: solid red 1px;
  `
  
  const Wrapper = styled.div`
    border: solid red 1px;
    display: block;
    position: relative;
    max-width: 1150px;
    width: 100%;
    margin: 0 auto;
    color: #ffffff;
  `;
  
  const Calendar = styled.div`
    border: solid red 1px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    height: 75vh;
  `;
  
  const CalendarLeft = styled.div`
    width: 350px;
    padding: 20px;
    background-color: #00407b;
    margin: 20px;
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 18%);
    border-radius: 6px;
    display: block;
    height: 700px;
  `;
  
  const AddEventBtn = styled.div`
    display: inline-block;
    padding: 0 10px;
    line-height: 30px;
    height: 30px;
    background-color: #004b8f;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 15px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    color: #ffffff;
    text-decoration: none;
  `;
  
  const AddEventBtnPlus = styled.div`
    border: solid red 1px;
    line-height: 30px;
    width: 30px;
    height: 30px;
    color: inherit;
    display: inline-block;
    font-size: inherit;
    text-rendering: auto;
    text-align: center;
  `;
  
  const LeftSideDay = styled.div`
    font-size: 28px;
    margin: 50px 0;
    display: flex;
  `;
  const LeftSideDayNum = styled.div`
    font-weight: 900;
  `;
  
  const LeftSideEventList = styled.div`
    border: solid red 1px;
  `;
  const CalendarRight = styled.div`
    border: solid red 3px;
    position: relative;
    width: calc(80% - 300px);
    padding-bottom: 65%;
    overflow: hidden;
    background-color: #00407b;
    margin: 20px;
    padding: 10px;
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 18%);
    border-radius: 6px;
    display: block;
  `;
  const Main = styled.div`
    border: solid red 3px;
    left: -0.00070796%;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  `;
  
  const CalendarRow = styled.div`
    border: solid red 1px;
    display: flex;
    justify-content: flex-start;
  `;
  const CalendarCol = styled.div`
    border: solid red 1px;
    width: calc(100% / 7);
    text-align: center;
    height: 50px;
    line-height: 50px;
    letter-spacing: 2px;
    text-transform: uppercase;
  `;
  const CalendarCel = styled.div`
    position: relative;
    width: calc(100% / 7);
    text-align: center;
    cursor: pointer;
    &:active {
      background-color: #004b8f;
    }
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  `;
  
  const Cel = styled.div`
    display: block;
    padding-top: 100%;
  `;
  
  const P = styled.p`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: #004585;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);
  `;
  
  const LeftLayer = styled.div`
    border: solid red 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  const animation = keyframes`
   0% {
        stroke-dasharray: 0 ${2 * Math.PI * 48};
      }
  `;
  
  const AnimatedCircle = styled.circle`
    animation: ${animation} 5s ease;
  `;
  