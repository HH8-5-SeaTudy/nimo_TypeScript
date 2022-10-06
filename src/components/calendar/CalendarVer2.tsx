import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getAllTodo } from "../../redux/modules/dateTodos";
import left from "../../assets/pixel/left.png";
import right from "../../assets/pixel/right.png";
import { updateDate } from "../../redux/modules/updateDate";
import TodoListPart from "./TodoListPart";

interface MyComponentProps {
  setShowTodo: any;
}
export type Iresault = {
  result: [];
};

const CalendarVer2 = ({ setShowTodo }: MyComponentProps) => {
  const dispatch = useAppDispatch();
  const allTodos = useAppSelector((state) => state.dateTodos.allTodos);
  const DdayData = useAppSelector((state) => state.dday.DdayData);
  const DdayRed = DdayData.map((d) => d.targetDay);
  const date = useAppSelector((state) => state.updateDate.date);
  //오늘 날짜 저장
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();
  const radius = 48;
  const diameter = 2 * Math.PI * radius;

  function dateSubmitHandler(selectDD: string) {
    dispatch(updateDate(selectDD));
  }

  function onHiddenShow() {
    setShowTodo();
  }

  //useEffect
  useEffect(() => {
    dispatch(updateDate(today.format("YYYY-MM-DD"))); //컴포넌트분리시사용
    dispatch(getAllTodo());
  }, []);

  const calendarArr = () => {
    let result: any = [];

    for (let week = firstWeek; week <= lastWeek; week++) {
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
                  //오늘
                  <CalendarCel
                    key={index}
                    onClick={() => dateSubmitHandler(days.format("YYYY-MM-DD"))}
                  >
                    {allTodos.find(
                      (list) => list.selectDate === days.format("YYYY-MM-DD")
                    ) &&
                      allTodos
                        .filter(
                          (x) => x.selectDate === days.format("YYYY-MM-DD")
                        )
                        .map((y) => y.todoList.length)
                        .reduce((a, b) => a + b, 0) !== 0 && (
                        <svg width="75" height="75" viewBox="0 0 200 200">
                          <circle
                            cx="100"
                            cy="100"
                            r="48"
                            fill="transparent"
                            stroke="beige"
                            strokeWidth="90"
                          />
                          <AnimatedCircle
                            cx="100"
                            cy="100"
                            r="48"
                            fill="transparent"
                            stroke={
                              DdayRed.find(
                                (d) => d === days.format("YYYY-MM-DD")
                              ) === days.format("YYYY-MM-DD")
                                ? "red"
                                : "#ff9100"
                            }
                            strokeWidth="90"
                            strokeDasharray={`${
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done === 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                              allTodos
                                .filter(
                                  (x) =>
                                    x.selectDate === days.format("YYYY-MM-DD")
                                )
                                .map((y) => y.todoList.length)
                                .reduce((a, b) => a + b, 0)
                            } ${
                              diameter -
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done === 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList.length)
                                  .reduce((a, b) => a + b, 0)
                            }`}
                            strokeDashoffset={diameter * 0.25}
                          />
                        </svg>
                      )}
                    <P
                      style={{
                        backgroundColor:
                          DdayRed.find(
                            (d) => d === days.format("YYYY-MM-DD")
                          ) === days.format("YYYY-MM-DD")
                            ? "red"
                            : "#ff9100",
                        color:
                          date === days.format("YYYY-MM-DD")
                            ? "black"
                            : "white",
                      }}
                    >
                      {days.format("D")}
                    </P>
                  </CalendarCel>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  //이전달//다음달
                  <CalendarCel
                    key={index}
                    onClick={() => dateSubmitHandler(days.format("YYYY-MM-DD"))}
                  >
                    {allTodos.find(
                      (list) => list.selectDate === days.format("YYYY-MM-DD")
                    ) &&
                      allTodos
                        .filter(
                          (x) => x.selectDate === days.format("YYYY-MM-DD")
                        )
                        .map((y) => y.todoList.length)
                        .reduce((a, b) => a + b, 0) !== 0 && (
                        <svg width="75" height="75" viewBox="0 0 200 200">
                          <circle
                            cx="100"
                            cy="100"
                            r="48"
                            fill="transparent"
                            stroke="beige"
                            strokeWidth="90"
                          />
                          <AnimatedCircle
                            cx="100"
                            cy="100"
                            r="48"
                            fill="transparent"
                            stroke={
                              DdayRed.find(
                                (d) => d === days.format("YYYY-MM-DD")
                              ) === days.format("YYYY-MM-DD")
                                ? "red"
                                : "#00D7FF"
                            }
                            strokeWidth="90"
                            strokeDasharray={`${
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done === 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                              allTodos
                                .filter(
                                  (x) =>
                                    x.selectDate === days.format("YYYY-MM-DD")
                                )
                                .map((y) => y.todoList.length)
                                .reduce((a, b) => a + b, 0)
                            } ${
                              diameter -
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done === 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList.length)
                                  .reduce((a, b) => a + b, 0)
                            }`}
                            strokeDashoffset={diameter * 0.25}
                          />
                        </svg>
                      )}
                    <P
                      style={{
                        backgroundColor:
                          DdayRed.find(
                            (d) => d === days.format("YYYY-MM-DD")
                          ) === days.format("YYYY-MM-DD")
                            ? "red"
                            : "#00D7FF",
                        color:
                          date === days.format("YYYY-MM-DD")
                            ? "black"
                            : "white",
                      }}
                    >
                      {days.format("D")}
                    </P>
                  </CalendarCel>
                );
              } else {
                //전체날짜
                return (
                  <CalendarCel
                    key={index}
                    onClick={() => dateSubmitHandler(days.format("YYYY-MM-DD"))}
                  >
                    {allTodos.find(
                      (list) => list.selectDate === days.format("YYYY-MM-DD")
                    ) &&
                      allTodos
                        .filter(
                          (x) => x.selectDate === days.format("YYYY-MM-DD")
                        )
                        .map((y) => y.todoList.length)
                        .reduce((a, b) => a + b, 0) !== 0 && (
                        <svg width="75" height="75" viewBox="0 0 200 200">
                          <circle
                            cx="100"
                            cy="100"
                            r="48"
                            fill="transparent"
                            stroke="beige"
                            strokeWidth="90"
                          />
                          <AnimatedCircle
                            cx="100"
                            cy="100"
                            r="48"
                            fill="transparent"
                            stroke={
                              DdayRed.find(
                                (d) => d === days.format("YYYY-MM-DD")
                              ) === days.format("YYYY-MM-DD")
                                ? "red"
                                : "#1175f8"
                            }
                            strokeWidth="90"
                            strokeDasharray={`${
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done === 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                              allTodos
                                .filter(
                                  (x) =>
                                    x.selectDate === days.format("YYYY-MM-DD")
                                )
                                .map((y) => y.todoList.length)
                                .reduce((a, b) => a + b, 0)
                            } ${
                              diameter -
                              (diameter *
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList)
                                  .filter((z) => z.length)
                                  .map(
                                    (a) => a.filter((b) => b.done === 1).length
                                  )
                                  .reduce((a, b) => a + b, 0)) /
                                allTodos
                                  .filter(
                                    (x) =>
                                      x.selectDate === days.format("YYYY-MM-DD")
                                  )
                                  .map((y) => y.todoList.length)
                                  .reduce((a, b) => a + b, 0)
                            }`}
                            strokeDashoffset={diameter * 0.25}
                          />
                        </svg>
                      )}
                    <Cel></Cel>
                    <P
                      style={{
                        backgroundColor:
                          DdayRed.find(
                            (d) => d === days.format("YYYY-MM-DD")
                          ) === days.format("YYYY-MM-DD")
                            ? "red"
                            : "#1175f8",
                        color:
                          date === days.format("YYYY-MM-DD")
                            ? "black"
                            : "white",
                      }}
                    >
                      {days.format("D")}
                    </P>
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
      <Layer onClick={() => onHiddenShow()}></Layer>
      <Wrapper>
        <CalendarTitle>
          <ATtile>CALENDAR</ATtile>
          <BTtile>TO DO LIST</BTtile>
        </CalendarTitle>
        <Calendar>
          {/* 달력 */}
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
              <YearBox>
                <PrevBtn
                  src={left}
                  onClick={() => {
                    setMoment(getMoment.clone().subtract(1, "year"));
                  }}
                ></PrevBtn>
                <TodayYear>{today.format("YYYY")}</TodayYear>
                <NextBtn
                  src={right}
                  onClick={() => {
                    setMoment(getMoment.clone().add(1, "year"));
                  }}
                ></NextBtn>
              </YearBox>
              <Month>
                <PrevBtn
                  src={left}
                  onClick={() => {
                    setMoment(getMoment.clone().subtract(1, "month"));
                  }}
                ></PrevBtn>
                <TodayMon> {today.format("MMMM")}</TodayMon>
                <NextBtn
                  src={right}
                  onClick={() => {
                    setMoment(getMoment.clone().add(1, "month"));
                  }}
                ></NextBtn>
              </Month>
            </MonthYear>
            <TodoListPart />
          </LeftLayer>
        </Calendar>
      </Wrapper>
    </>
  );
};

export default React.memo(CalendarVer2);

const Layer = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  height: 90vh;
  width: 100vw;
  color: #ffffff;
  z-index: 5;
`;

const MonthYear = styled.div`
  background-color: #0096ff;
  height: 70px;
  border-radius: 6px;
  margin: 20px 20px 0 20px;
  display: flex;
  justify-content: space-around;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
`;

const Month = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;
const TodayMon = styled.div`
  font-size: 23px;
  font-weight: 700;
`;
const YearBox = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  width: 150px;
`;
const TodayYear = styled.div`
  font-size: 23px;
  font-weight: 700;
`;
const PrevBtn = styled.img`
  width: 20px;
  height: 30px;
  cursor: pointer;
`;
const NextBtn = styled.img`
  width: 20px;
  height: 30px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  background-color: #0096ff;
  position: absolute;
  left: 17%;
  top: 10vh;
  display: block;
  max-width: 1100px;
  height: 680px;
  width: 100%;
  margin: 0 auto;
  color: #ffffff;
  border-radius: 6px;
  border: solid black 2px;
  z-index: 10;
`;
const CalendarTitle = styled.div`
  width: 100%;
  height: 11%;
  display: flex;
  justify-content: space-between;
  padding: 0 40px 0 40px;
`;
const ATtile = styled.div`
  background-color: #0096ff;
  color: black;
  width: 580px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  border-bottom: solid black 2px;
`;
const BTtile = styled.div`
  background-color: #0096ff;
  border-bottom: solid black 2px;
  color: black;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

const Calendar = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  height: 600px;
`;

const CalendarRight = styled.div`
  position: relative;
  width: calc(80% - 300px);
  padding-bottom: 65%;
  overflow: hidden;
  margin: 20px;
  padding: 10px;
  background-color: #0096ff;
  box-shadow: 5px 5px 5px 5px rgba(1, 1, 1, 0.5);
  border-radius: 6px;
  display: block;
`;
const Main = styled.div`
  left: -0.00070796%;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const CalendarRow = styled.div`
  display: flex;
  justify-content: flex-start;
  font-weight: 700;
  font-size: 20px;
`;
const CalendarCol = styled.div`
  color: black;
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
  height: 75px;
  text-align: center;
  cursor: pointer;
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
  background: #1175f8;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 3px 3px 3px 0.5px rgba(1, 1, 1, 0.5);
  font-weight: 700;
`;

const LeftLayer = styled.div`
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
  animation: ${animation} 3s ease;
`;
