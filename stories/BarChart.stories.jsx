import React from "react";
import * as Recharts from "recharts";
import data from "../data";

export default {
  title: "BarChart",
  component: Recharts.BarChart,
};


const Template = (args) => (
  <Recharts.BarChart
    {...args}
  >
    <Recharts.CartesianGrid strokeDasharray="3 3" />
    <Recharts.XAxis dataKey="name" />
    <Recharts.YAxis />
    <Recharts.Tooltip />
    <Recharts.Legend />
    <Recharts.Bar dataKey={args.data1Key} fill={args.data1Color} />
    <Recharts.Bar dataKey={args.data2Key} fill={args.data2Color} />
  </Recharts.BarChart>
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
  data1Color: '#82ca9d',
  data2Color: '#8884d8',
  data1Key: 'uv',
  data2Key: 'pv',
  data: data,
};
