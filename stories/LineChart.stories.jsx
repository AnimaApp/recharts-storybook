import React from "react";
import * as Recharts from "recharts";
import data from "../data";

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

export const Simple = Template.bind({});
Simple.args = {
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
  data: data,
};
