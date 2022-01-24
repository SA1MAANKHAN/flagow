import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/nav/Navbar";
import Option from "../../components/option/Option";
import "./Type.css";

function Type() {
  // const typesOfQuiz = {
  //   flag: ["flag from country", "country from flag"],
  //   capital: ["country from capital", "capital from country"],
  //   currency: ["currency from country", "country from currency"],
  // };

  return (
    <div className="type">
      <Navbar />
      <h1>Type of Quiz</h1>
      <div className="type__options">
        <Link to="/Level">
          <Option optionName="City from capital" />
        </Link>
        <Link to="/Level">
          <Option optionName="City from capital" />
        </Link>
      </div>
    </div>
  );
}

export default Type;
