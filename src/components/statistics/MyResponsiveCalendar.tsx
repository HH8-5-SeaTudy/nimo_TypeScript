import { ResponsiveCalendar } from '@nivo/calendar'
import axios from 'axios';
import { useEffect } from 'react';
import { getCookie } from '../social/Cookie';

const data = [
  {
    "value": 12,
    "day": "2022-06-16"
  },
  {
    "value": 2,
    "day": "2022-03-20"
  },
  {
    "value": 20,
    "day": "2022-12-21"
  },
  {
    "value": 6,
    "day": "2022-02-11"
  },
  {
    "value": 13,
    "day": "2022-10-23"
  },
  {
    "value": 24,
    "day": "2022-05-05"
  },
]

const MyResponsiveCalendar = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const token: string = getCookie("token") as string;
  const today = new Date();
  const year = today.getFullYear();
  const yearFirst = year + '-01-01'
  const yearLast = year + '-12-' +  (new Date(year, 12, 0)).getDate()


  const yearStudyData = async () => {
    return await axios
    .get(`${BASE_URL}/api/v1/weekStudies?year=${year}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res)
    })
  };
  
  useEffect(() => {
    yearStudyData();
  }, []);


  return(
  <ResponsiveCalendar
      data={data}
      from={yearFirst}
      to={yearLast}
      emptyColor="#eeeeee"
      colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
      minValue={0}
      margin={{ top: 30, right: 10, bottom: 10, left: 10 }}
      yearSpacing={40}
      yearLegendOffset={5}
      monthBorderColor="#0096FF"
      dayBorderWidth={2}
      dayBorderColor="#0096FF"
      legends={[
          {
              anchor: 'bottom-right',
              direction: 'row',
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: 'right-to-left'
          }
      ]}
  />
)}

export default MyResponsiveCalendar;