import { ResponsivePie } from "@nivo/pie";
import axios from 'axios';
import { useEffect } from 'react';
import { getCookie } from '../social/Cookie';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    id: "Mon",
    value: 12,
  },
  {
    id: "Tue",
    value: 5,
  },
  {
    id: "Wen",
    value: 12,
  },
  {
    id: "Thu",
    value: 2,
  },
  {
    id: "Fri",
    value: 8,
  },
  {
    id: "Sat",
    value: 16,
  },
  {
    id: "Sun",
    value: 9,
  },
];
const Month = () => {
  
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
         console.log(res)
        })
    };

  useEffect(() => {
    weekStudyData();
  }, []);
  
  return(
  <ResponsivePie
    enableArcLinkLabels={false}
    data={data}
    margin={{ top: 35, right: 35, bottom: 35, left: 35 }}
    innerRadius={0.5}
    padAngle={2}
    cornerRadius={7}
    activeOuterRadiusOffset={8}
    colors={{ scheme: "blues" }}
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
        itemWidth: 40,
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
export default Month;
