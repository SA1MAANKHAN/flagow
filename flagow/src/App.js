import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Level from "./Level";
import Quiz from "./Quiz";
import Type from "./Type";

import RoundWon from "./RoundWon";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/RoundWon/:message">
            <RoundWon />
          </Route>

          <Route path="/Quiz/:level/:quizType">
            <Quiz />
          </Route>

          <Route path="/Level/:quizType">
            <Level />
          </Route>
          <Route path="/Type">
            <Type />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
