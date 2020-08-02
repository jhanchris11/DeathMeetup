import React from "react";
import { Space } from "antd";

export const CustomIcon = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
