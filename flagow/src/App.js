import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Level from "./pages/level/Level";
import Quiz from "./pages/quiz/Quiz";
import Type from "./pages/type/Type";

import RoundResult from "./RoundResult";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/RoundResult/:message">
            <RoundResult />
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
    </Router>
  );
}

export default App;
