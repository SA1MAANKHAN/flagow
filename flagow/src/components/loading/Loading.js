import React from "react";
import "./Loading.css";
import earth from  "../../assets/earth.png"

function Loading() {
  return (
    <div className="loading">
      <div className="page__initate">
        <img
          className="page__loading"
          src={earth}
          alt=""
        />
      </div>
    </div>
  );
}

export default Loading;
