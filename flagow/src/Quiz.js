import React, { useEffect, useState } from "react";
import { getFourRandomCountries } from "./helper";
import Loading from "./Loading";
import Navbar from "./Navbar";
import { numOfLives, numOfQuestion } from "./config";
import "./Quiz.css";
import { Howl } from "howler";

import { Redirect, useParams } from "react-router";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Question from "./Question";

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
      "https://freesound.org/people/tim.kahn/sounds/62298/download/62298__tim-kahn__tangel.wav",
    ],
    volume: 1,
  });

  const correctPlay = new Howl({
    src: [
      "https://freesound.org/people/rhodesmas/sounds/320775/download/320775__rhodesmas__win-02.wav",
    ],
    volume: 1,
  });

  const loosePlay = new Howl({
    src: [
      "https://freesound.org/people/TaranP/sounds/362205/download/362205__taranp__horn-fail-wahwah-2.wav",
    ],
    volume: 1,
  });

  const winPlay = new Howl({
    src: [
      "https://freesound.org/people/sergeeo/sounds/202577/download/202577__sergeeo__xylophone-for-cartoon-1.wav",
    ],
    volume: 1,
  });

  // console.log(">>>>> ", quizType == "Flags", " Flags  <<<<<<<<");
  // console.log(">>>>> ", quizType == "Capitals", " Capitals  <<<<<<<<");

  // console.log(">>>>> ", quizType == "Currency", " Currency  <<<<<<<<");
  const startGame = function () {
    const options = getFourRandomCountries(level);
    setCorrectIndex(options.correctOption);
    options.optionsArray.forEach((country) => {
      fetchCountries(country);
    });
  };

  const fetchCountries = async function (countryCode) {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${countryCode}`
    );

    const data = await response.json();

    setCountries((arrayCounrties) => [...arrayCounrties, data]);
  };

  useEffect(() => {
    startGame();
  }, []);

  console.log("array   >>>", arrayCounrties);
  // console.log("arraylength   >>>", arrayCounrties.length);
  // console.log("correct >>>", correctIndex);

  const gameLostNow = function () {
    loosePlay.play();
    console.log("GameOver BUDDy");
    setGameLost(true);
    //
  };

  const gameWonNow = function () {
    winPlay.play();
    console.log("You won the game");
    setGameWon(true);
  };

  const correctAnswer = function () {
    // Play the sound.
    correctPlay.play();

    if (currentQuesNumber == 5) {
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
    if (lives == 1) {
      gameLostNow();
      return;
    }
    setLives(lives - 1);
    return;
  };

  const onClickAnsCheck = function (e) {
    e.preventDefault();

    if (e.target.id.split(" ")[1] == correctIndex) {
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
        <Redirect to="/RoundWon/Won" />
      </div>
    );
  }

  if (gameLost) {
    return (
      <div>
        <Redirect to={`/RoundWon/Lost`} />
      </div>
    );
  }

  if (quizType == "Flags") {
    return (
      <div className="quiz">
        <Navbar />

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
            <div
              onClick={onClickAnsCheck}
              className="quiz__option"
              key={`flag${i}`}
            >
              <img
                id={`option ${i}`}
                className="quiz__flagImg"
                src={country.flag}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (quizType == "Capitals") {
    return (
      <div className="quiz">
        <Navbar />

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
            <div
              onClick={onClickAnsCheck}
              className="quiz__option"
              key={`flag${i}`}
            >
              <img
                id={`option ${i}`}
                className="quiz__flagImg"
                src={country.flag}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (quizType == "Currency") {
    return (
      <div className="quiz">
        <Navbar />

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
            <div
              onClick={onClickAnsCheck}
              className="quiz__option"
              key={`flag${i}`}
            >
              <img
                id={`option ${i}`}
                className="quiz__flagImg"
                src={country.flag}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>test</div>;
}

export default Quiz;
