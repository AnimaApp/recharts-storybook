import React from "react";
import * as Recharts from "recharts";
import data from "../data";

export default {
  title: "PieChart",
  component: Recharts.PieChart,
};

const Template = (args) => (
  <Recharts.PieChart {...args}>
    <Recharts.Pie
      data={args.data}
      dataKey={args.data1Key}
      cx="50%"
      cy="50%"
      outerRadius={args.data1OuterRadius}
      fill={args.data1FillColor}
      label
    />
  </Recharts.PieChart>
);

export const SinglePie = Template.bind({});
SinglePie.args = {
  height: 300,
  width: 500,
  margin: {
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  },
  data1FillColor: "#8884d8",
  data1OuterRadius: 60,
  data1Key: "uv",
  data: data,
};
