import React from 'react'

const Question = ({questions,onAnswerClick}) => {
  return (
    <div className='question'>
        <h2>{questions.question}</h2>
        <ul className="options">
            {questions.answerOptions.map((option)=>{
                return (
                    <li key={option.text}>
                        <button onClick={()=>onAnswerClick(option.isCorrect)}>{option.text}</button>
                    </li>
                )
            })}
        </ul>

    </div>
  )
}

export default Question


