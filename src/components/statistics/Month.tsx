import { ResponsivePie } from "@nivo/pie";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getCookie } from '../social/Cookie';

const data2 = [
  {
    id: "Empty1",
    value: 10,
  },
  {
    id: "Empty2",
    value: 10,
  },
  {
    id: "Empty3",
    value: 10,
  },
  {
    id: "Empty4",
    value: 10,
  },
];
const Month = () => {
  const [resData,setResData] = useState<any>([])
  
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const token: string = getCookie("token") as string;

    const weekStudyData = async () => {
      return await axios
      .get(`${BASE_URL}/api/v1/weekStudies`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((res) => {
          setResData(res.data.data)
        })
    };
  const data = resData?.map((item:any)=> {
    return {id: item.weekNum + '주차', value:item.weekHour}
  })



  useEffect(() => {
    weekStudyData();
  }, []);
  
  return(
  <ResponsivePie
    enableArcLinkLabels={false}
    data={data.length === 0 ? data2 : data}
    margin={{ top: 35, right: 35, bottom: 35, left: 35 }}
    innerRadius={0.5}
    padAngle={2}
    cornerRadius={7}
    activeOuterRadiusOffset={8}
    colors={{ scheme: "yellow_orange_red" }}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="black"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 30,
        itemsSpacing: 2,
        itemWidth: 50,
        itemHeight: 20,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 10,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
)};
export default React.memo(Month);
