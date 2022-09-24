import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "./MiniCalendar.css"
import Calendar from "react-calendar";
import moment from "moment";
import { updateDate } from "../../redux/modules/searchDate";
import { useAppDispatch} from "../hooks/reduxHooks";


const MiniCalendar = () => {
  const dispatch = useAppDispatch();

  const [value, onChange] = useState(new Date());

  useEffect(() => {
    dispatch(updateDate(moment(value).format("YYYY-MM-DD")));
  }, [value]);



  return (

        <Calendar
          onChange={onChange}
          prev2Label={null}
          next2Label={null}
          value={value}
          calendarType={"US"}
          // showNeighboringMonth={false}
          formatDay={(locale: any, date: any) => moment(date).format("D")}
          
        />

  );
};

export default MiniCalendar;
