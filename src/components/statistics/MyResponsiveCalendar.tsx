import { ResponsiveCalendar } from '@nivo/calendar'

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

const MyResponsiveCalendar = () => (
  <ResponsiveCalendar
      data={data}
      from="2022-01-01"
      to="2022-12-31"
      emptyColor="#eeeeee"
      colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
      minValue={0}
      margin={{ top: 30, right: 10, bottom: 10, left: 10 }}
      yearSpacing={40}
      yearLegendOffset={5}
      monthBorderColor="#00D7FF"
      dayBorderWidth={2}
      dayBorderColor="#00D7FF"
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
)

export default MyResponsiveCalendar