import { ResponsiveCalendar } from "@nivo/calendar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCookie } from "../social/Cookie";

const MyResponsiveCalendar = () => {
  const [resData, setResData] = useState<any>([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const token: string = getCookie("token") as string;
  const today = new Date();
  const year = today.getFullYear();
  const yearFirst = year + "-01-01";
  const yearLast = year + "-12-" + new Date(year, 12, 0).getDate();

  const yearStudyData = async () => {
    return await axios
      .get(`${BASE_URL}/api/v1/dayStudies?year=${year}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((res) => {
        setResData(res.data.data);
      });
  };

  const data = resData?.map((item: any) => {
    return { value: item.hour, day: item.date };
  });

  useEffect(() => {
    yearStudyData();
  }, []);

  return (
    <ResponsiveCalendar
      data={data}
      from={yearFirst}
      to={yearLast}
      emptyColor="#eeeeee"
      colors={["#90D4FF", "#26A4FF", "#e8c1a0", "#FB9100"]}
      minValue={0}
      margin={{ top: 30, right: 10, bottom: 10, left: 10 }}
      yearSpacing={40}
      yearLegendOffset={5}
      monthBorderColor="#0096FF"
      dayBorderWidth={2}
      dayBorderColor="#0096FF"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
        },
      ]}
    />
  );
};

export default React.memo(MyResponsiveCalendar);
