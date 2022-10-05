import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  __getUserinquire,
} from "../../redux/modules/timer";
import styled from 'styled-components';

const StopWatch = () => {
  const dispatch = useAppDispatch();
  const time = useAppSelector((state) => state.timer);
  const [timeSS, setTimeSS] = useState<number>(0);
  const [timeMM, setTimeMM] = useState<number>(0);
  const [timeHH, setTimeHH] = useState<number>(0);

  const [hh, mm, ss] = String(time.dayStudyTime)
  .split(":")
  .map((v) => +v);


  useEffect(() => {
    dispatch(__getUserinquire());
  }, []);

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

  return (
    <Layer>
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
  </Layer>
  );
};

export default StopWatch;

const Layer = styled.div`
  span {
     color: white;
     text-decoration: "none" 
  }
 
`