import React from "react";
import * as Recharts from "recharts";

export default {
  title: "LineChart",
  component: Recharts.LineChart,
};

const Template = (args) => (
  <Recharts.LineChart
    {...args}
  >
    <Recharts.CartesianGrid strokeDasharray="3 3" />
    <Recharts.XAxis dataKey="name" />
    <Recharts.YAxis />
    <Recharts.Tooltip />
    <Recharts.Legend />
    <Recharts.Line type="monotone" dataKey={args.line1Key} stroke={args.line1Color} activeDot={{ r: 8 }} />
    <Recharts.Line type="monotone" dataKey={args.line2Key} stroke={args.line2Color} />
  </Recharts.LineChart>
);

export const TwoLines = Template.bind({});
TwoLines.args = {
  height: 300,
  width: 500,
  margin: {
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  },
  line1Color: '#82ca9d',
  line2Color: '#8884d8',
  line1Key: 'uv',
  line2Key: 'pv',
  data: [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ],
};
