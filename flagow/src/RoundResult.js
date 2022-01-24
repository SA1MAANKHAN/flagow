import React from "react";
import "./RoundResult.css";
import ReplayIcon from "@material-ui/icons/Replay";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link, useParams } from "react-router-dom";
import Trophy from "./assets/Trophy.png"

function RoundResult() {
  const { message } = useParams();

  if (message.toLowerCase() === "won") {
    return (
      <div className="roundWon">
        <div className="roundWon__container">
          <div className="roundWon__message">
            <img
              className="roundWon__trophy"
              src={Trophy}
              alt=""
            />
          </div>
          <h1>Round Completed</h1>
          <div className="roundWon__navigation">
            <Link className="roundWon__icon" to="/Quiz">
              <ReplayIcon style={{ fontSize: 60 }} />
            </Link>
            <Link to="/Level" className="roundWon__icon">
              <NavigateNextIcon style={{ fontSize: 40 }} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (message.toLowerCase() === "lost") {
    return (
      <div className="roundWon">
        <div className="roundWon__container">
          <div className="roundWon__message">
            <h1>You Lost :(</h1>
            <h2>Better Luck next time!</h2>
          </div>
          <div className="roundWon__navigation">
            <Link className="roundWon__icon" to="/Quiz">
              <ReplayIcon style={{ fontSize: 60 }} />
            </Link>
            <Link to="/Level" className="roundWon__icon">
              <NavigateNextIcon style={{ fontSize: 40 }} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default RoundResult;
