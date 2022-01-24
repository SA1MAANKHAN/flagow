import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import { getFourRandomCountries } from "../../helper";
import Loading from "../../components/loading/Loading";
import Navbar from "../../components/nav/Navbar";
import { numOfLives, numOfQuestion } from "../../config";
import { Howl } from "howler";
import "./Quiz.css";

import wrong from "../../assets/wrong.mp3"
import right from "../../assets/right.mp3"
import win from "../../assets/win.mp3"
import loose from "../../assets/loose.mp3"

import FavoriteIcon from "@material-ui/icons/Favorite";
import Question from "../../Question";

function Quiz() {
  const [arrayCounrties, setCountries] = useState([]);
  const [correctIndex, setCorrectIndex] = useState();
  const [lives, setLives] = useState(numOfLives);
  const [currentQuesNumber, setCurrentQuesNumber] = useState(1);

  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);

  const { level } = useParams();
  const { quizType } = useParams();

  // Setup the new Howl.
  const wrongPlay = new Howl({
    src: [
     wrong
    ],
    volume: 1,
  });

  const correctPlay = new Howl({
    src: [
     right
    ],
    volume: 1,
  });

  const loosePlay = new Howl({
    src: [
     loose
    ],
    volume: 1,
  });

  const winPlay = new Howl({
    src: [
     win
    ],
    volume: 1,
  });

  const startGame = function () {
    
    const options = getFourRandomCountries(level);
    setCorrectIndex(options.correctOption);
    
    // clearing before calling again
    setCountries([]);
    options.optionsArray.forEach((country) => {
      fetchCountries(country);
    });
  };

  const fetchCountries = async function (countryCode) {
    const response = await fetch(
      `https://restcountries.com/v2/alpha/${countryCode}`
    );

    const data = await response.json();
    setCountries((arrayCounrties) => [...arrayCounrties, data]);
  };

  useEffect(() => {
    startGame();
  }, []);

  const gameLostNow = function () {
    loosePlay.play();
    console.log("GameOver BUDDy");
    setGameLost(true);
  };

  const gameWonNow = function () {
    winPlay.play();
    console.log("You won the game");
    setGameWon(true);
  };

  const correctAnswer = function () {
    // Play the sound.
    correctPlay.play();

    if (currentQuesNumber >= 5) {
      gameWonNow();
      return;
    }
    setCountries([]);
    setCurrentQuesNumber(currentQuesNumber + 1);
    startGame();
    return;
  };

  const wrongAnswer = function () {
    wrongPlay.play();
    if (lives === 1) {
      gameLostNow();
      return;
    }
    setLives(lives - 1);
    return;
  };

  const onClickAnsCheck = function (e) {
    e.preventDefault();

    if (e.target.id.split(" ")[1] === `${correctIndex}`) {
      console.log("correct");
      // ans is correct
      correctAnswer();
    } else {
      console.log("wrong");
      // ans is wrong
      wrongAnswer();
    }
  };

  while (!(arrayCounrties.length >= 4 && correctIndex + 1 && quizType)) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (gameWon) {
    return (
      <div>
        <Redirect to="/RoundResult/Won" />
      </div>
    );
  }

  if (gameLost) {
    return (
      <div>
        <Redirect to="/RoundResult/Lost" />
      </div>
    );
  }

  if (quizType === "Flags") {
    return (
      <>
      <Navbar />
      <div className="quiz">
       
        <div className="ques__info">
          <div className="quiz__lives">
            {Array(lives)
              .fill()
              .map((_, i) => (
                <FavoriteIcon
                  key={`heart${i}`}
                  style={{ fontSize: 40, color: "#23ecaf" }}
                />
              ))}
          </div>

          <div className="quiz__progress__info">
            {currentQuesNumber} / {numOfQuestion}
          </div>
        </div>

        <Question
          arrayCounrties={arrayCounrties}
          correctIndex={correctIndex}
          quizType={quizType}
        />

        <div className="quiz__options">
          {arrayCounrties.map((country, i) => (
      
              <img
                onClick={onClickAnsCheck}
              className="quiz__option"
              key={`flag${i}`}
                id={`option ${i}`}
               
                src={country.flag}
                alt=""
              />
         
          ))}
        </div>
      </div>
      </>
    );
  }

  if (quizType === "Capitals") {
    return (
      <>
        <Navbar />
      <div className="quiz">

        <div className="quiz__timer"></div>
        <div className="ques__info">
          <div className="quiz__lives">
            {Array(lives)
              .fill()
              .map((_, i) => (
                <FavoriteIcon
                key={`heart${i}`}
                style={{ fontSize: 35, color: "#23ecaf" }}
                />
                ))}
          </div>

          <div className="quiz__progress__info">
            {currentQuesNumber} / {numOfQuestion}
          </div>
        </div>

        <Question
          arrayCounrties={arrayCounrties}
          correctIndex={correctIndex}
          quizType={quizType}
          />

        <div className="quiz__options">
          {arrayCounrties.map((country, i) => (
          <img
                onClick={onClickAnsCheck}
              className="quiz__option"
              key={`flag${i}`}
                id={`option ${i}`}
               
                src={country.flag}
                alt=""
              />
          ))}
        </div>
      </div>
  </>
    );
  }

  if (quizType === "Currency") {
    return (
      <>
        <Navbar />
      <div className="quiz">

        <div className="quiz__timer"></div>
        <div className="ques__info">
          <div className="quiz__lives">
            {Array(lives)
              .fill()
              .map((_, i) => (
                <FavoriteIcon
                key={`heart${i}`}
                style={{ fontSize: 40, color: "#23ecaf" }}
                />
                ))}
          </div>

          <div className="quiz__progress__info">
            {currentQuesNumber} / {numOfQuestion}
          </div>
        </div>

        <Question
          arrayCounrties={arrayCounrties}
          correctIndex={correctIndex}
          quizType={quizType}
          />

        <div className="quiz__options">
          {arrayCounrties.map((country, i) => (
           <img
                onClick={onClickAnsCheck}
              className="quiz__option"
              key={`flag${i}`}
                id={`option ${i}`}
               
                src={country.flag}
                alt=""
              />
          ))}
        </div>
      </div>
          </>
    );
  }

  return <div>test</div>;
}

export default Quiz;
