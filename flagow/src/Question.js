import React from "react";

function Question({ arrayCounrties, correctIndex, quizType }) {
  console.log(quizType);
  if (quizType === "Flags") {
    return (
      <div className="quiz__question">
        <div className="quiz__hints">
          <div className="quiz__hint">
            <h2>{arrayCounrties[correctIndex].currencies[0].name}</h2>
            <p>currency</p>
          </div>
          <div className="quiz__hint">
            <h2>{arrayCounrties[correctIndex].capital}</h2>
            <p>capital</p>
          </div>
        </div>
        <div className="quiz__question__text">
          <h2>Find the flag of </h2>
          <h1>{arrayCounrties[correctIndex].name}</h1>
        </div>
      </div>
    );
  }

  if (quizType === "Capitals") {
    return (
      <div className="quiz__question">
        <div className="quiz__hints">
          <div className="quiz__hint">
            <h2>
              {(arrayCounrties[correctIndex].population / 10000000).toFixed(2)}M
            </h2>
            <p>Population</p>
          </div>
          <div className="quiz__hint">
            <h2>{arrayCounrties[correctIndex].region}</h2>
            <p>Region</p>
          </div>
        </div>
        <div className="quiz__question__text">
          <h1>{arrayCounrties[correctIndex].capital}</h1>
          <h2>is the capital of </h2>
        </div>
      </div>
    );
  }

  if (quizType === "Currency") {
    return (
      <div className="quiz__question">
        <div className="quiz__hints">
          <div className="quiz__hint">
            <h2>{arrayCounrties[correctIndex].region}</h2>
            <p>Region</p>
          </div>
          <div className="quiz__hint">
            <h2>{arrayCounrties[correctIndex].capital}</h2>
            <p>capital</p>
          </div>
        </div>
        <div className="quiz__question__text">
          <h1>{arrayCounrties[correctIndex].currencies[0].name}</h1>
          <h2>is the currency of </h2>
        </div>
      </div>
    );
  }
}

export default Question;
