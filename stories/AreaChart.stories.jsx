import React from "react";
import * as Recharts from "recharts";
import data from "../data";

export default {
  title: "AreaChart",
  component: Recharts.AreaChart,
};

const Template = (args) => (
  <Recharts.AreaChart {...args}>
    <Recharts.CartesianGrid strokeDasharray="3 3" />
    <Recharts.XAxis dataKey={args.xAxisDataKey} />
    <Recharts.YAxis />
    <Recharts.Tooltip />
    <Recharts.Area
      type="monotone"
      dataKey={args.dataKey}
      stroke={args.strokeColor}
      fill={args.fillColor}
    />
  </Recharts.AreaChart>
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
  fillColor: "#8884d8",
  strokeColor: "8884d8",
  dataKey: "uv",
  xAxisDataKey: "name",
  data: data,
};
