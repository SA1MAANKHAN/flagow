import React from "react";
import "./Option.css";

export default function Option({ optionName }) {
  return (
    <div className="option">
      <h2>{optionName}</h2>
    </div>
  );
}
