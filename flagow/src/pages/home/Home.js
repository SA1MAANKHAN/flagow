import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Option from "../../components/option/Option";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="options">
        <Link className="link" to="/Level/Flags">
          <Option optionName="Flags" />
        </Link>
        <Link className="link" to="/Level/Capitals">
          <Option optionName="Capitals" />
        </Link>
        <Link className="link" to="/Level/Currency">
          <Option optionName="Currency" />
        </Link>

        <a className="link" href="https://itssalmaank.web.app/">
          <Option optionName="About" />
        </a>
      </div>
    </div>
  );
}

export default Home;
