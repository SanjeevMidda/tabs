import React from "react";

const Circle = ({ colorOne, colorTwo }) => {
  return (
    <div
      className="circle"
      style={{ background: `linear-gradient(${colorOne}, ${colorTwo})` }}
    ></div>
  );
};

export default Circle;
