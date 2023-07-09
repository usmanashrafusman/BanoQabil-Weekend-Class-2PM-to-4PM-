import React from 'react'
import { useState, useEffect, useRef } from 'react'
import quizData from "./questions"
import QuizResult from './components/QuizResult';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null)

  const currentQuestion = quizData[currentQuestionIndex];
  const isLastQuestion = quizData.length === currentQuestionIndex + 1;

  const handleSelect = (id) => {
    setSelectedOption(id)
  }

  const initializeTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((t) => t + 1)
    }, 1000)
  }


  const nextQuestion = () => {
    if (currentQuestion.answer === selectedOption) {
      setScore((pre) => pre + 1);
    }
    setCurrentQuestionIndex((pre) => pre + 1);
    setSelectedOption(null);
    initializeTimer();
    if (isLastQuestion) {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    setShowResult(true)
  }

  const tryAgain = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null)
    setScore(0)
    setShowResult(false)
  }

  useEffect(() => {
    if (intervalRef.current === null) {
      initializeTimer();
    }
  }, []);

  useEffect(() => {
    if (timer === 10) {
      setTimer(0)
      clearInterval(intervalRef.current);
      nextQuestion();
    }
  }, [timer]);

  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      {showResult ? <QuizResult score={score} tryAgain={tryAgain} totalScore={quizData.length} /> : <div className="container">
        <div className="question">
          <span className='question-number'> {currentQuestionIndex + 1} .</span>
          <span className='question-txt'>{currentQuestion.question}</span>
          <span className='question-txt'>{timer}</span>
        </div>
        <div className="option-container">
          {currentQuestion.options.map(({ id, option }) => {
            return (
              <button className={`option-btn ${selectedOption == id ? "checked" : null}`}
                key={id} onClick={() => handleSelect(id)}
              >
                {option}
              </button>
            )
          })}
        </div>
        <input disabled={selectedOption === null} type="button" value={isLastQuestion ? "Submit" : "Next"} id="next-button" onClick={nextQuestion} />
      </div>}
    </div>
  )
}

export default App