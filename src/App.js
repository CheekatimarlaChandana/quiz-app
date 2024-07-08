import React, { useState } from "react";
// import MemoHook from "./components/hookscomponent/MemoHook";
import questions from "./constants/questions.json"
import './App.css'
import Question from "./quizcomponents/Question";
import Result from "./quizcomponents/Result";

function App() {
  const[currentquestion,setCurrentuestion] = useState(0)
  const[userAnswers,setUserAnswers] = useState([])

  const handleNextQuestion = (isCorrect) => {
    setCurrentuestion(currentquestion + 1);
    setUserAnswers([...userAnswers,isCorrect])

  }

  const handleReset = () => {
    setCurrentuestion(0); //making to initaial question start
    setUserAnswers([]); //make answers array empty
  }
  return (
    <div className="App">
      <h1>World Quiz</h1>
      {
        currentquestion < questions.length && (
          <Question questions={questions[currentquestion]} onAnswerClick={handleNextQuestion}/>

        )
      }
{
  currentquestion === questions.length && (
    <Result
      questions={questions}
      userAnswers={userAnswers}
      resetQuiz={handleReset}
      />

  )
      }
    
      
  
     {/* <MemoHook/> */}
    </div>
  );
}

export default App;


