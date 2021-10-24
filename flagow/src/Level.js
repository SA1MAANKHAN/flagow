import React from "react";
import Option from "./Option";
import "./Level.css";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function Level() {
  const { quizType } = useParams();

  return (
    <div className="level">
      <Navbar />
      <h1>Select Your Level</h1>
      <div className="levels">
        <Link className="link" to={`/Quiz/level1/${quizType}`}>
          <Option optionName="huh, Easy Pesy" />
        </Link>
        <Link className="link" to={`/Quiz/level2/${quizType}`}>
          <Option optionName="Umm, it's ok" />
        </Link>
        <Link className="link" to={`/Quiz/level3/${quizType}`}>
          <Option optionName="Woo, that tough" />
        </Link>
        <Link className="link" to={`/Quiz/level4/${quizType}`}>
          <Option optionName="Are you kiddin' " />
        </Link>
        <Link className="link" to={`/Quiz/level5/${quizType}`}>
          <Option optionName="What the heck " />
        </Link>
        <Link className="link" to={`/Quiz/level6/${quizType}`}>
          <Option optionName="Oh my God! " />
        </Link>
      </div>
    </div>
  );
}

export default Level;
