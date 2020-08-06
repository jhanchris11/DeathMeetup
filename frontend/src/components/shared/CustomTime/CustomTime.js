import React from "react";
import { TimerContainer } from "./CustomTimeStyled";

const CustomTime = ({ children }) => {
  return (
    <TimerContainer>
      <p style={{ margin: 0,textAlign: "center", fontSize: "1.5em", fontWeight: "bold" }}>
        {children}
      </p>
    </TimerContainer>
  );
};

export default CustomTime;
