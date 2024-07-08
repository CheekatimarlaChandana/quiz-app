import React from 'react'

const Result = ({questions,userAnswers,resetQuiz}) => {
    const CorrectAnswers = userAnswers.filter(answer => answer).length
  return (
    <div className='results'>
        <h2>Result</h2>
        <p>You Have answered {CorrectAnswers} out of {questions.length} questions
            <span onClick={resetQuiz}>Click here to restart</span>
        </p>
        <ul>
            {questions.map((question,index)=>{
                return(
                    <li key={index} data-correct={userAnswers[index]}>Q{index+1}. {question.question} </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Result

