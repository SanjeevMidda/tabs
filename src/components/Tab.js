import React, { useState } from "react";
import Circle from "./Circle";

const Tab = ({ colorOne, colorTwo, title, text }) => {
  const [status, setStatus] = useState(false);

  return (
    <div
      className="tab"
      style={{ top: status ? `${-75}%` : `${0}%` }}
      onClick={() => {
        setStatus(!status);
      }}
    >
      <div className="text">
        <h1>{title}</h1>
        <h3>A / {text}</h3>
      </div>

      <Circle colorOne={colorOne} colorTwo={colorTwo} />
    </div>
  );
};

export default Tab;
