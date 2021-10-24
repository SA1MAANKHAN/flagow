import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

import "./Home.css";
import Option from "./Option";

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
        {/* <Link className="link" to="/More">
          <Option optionName="More" />
        </Link> */}

        <a className="link" href="https://salmaan.netlify.app/">
          <Option optionName="About" />
        </a>
      </div>
    </div>
  );
}

export default Home;
