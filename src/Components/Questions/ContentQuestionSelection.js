import React, { useState } from 'react'

function ContentQuestionSelection({question, selectAnswer, selectedAnswer}) {
  return (
    <div className='contentQuestion'>
        <div className='contentTitle'>
          <img src={question.character} />
          <h1>{question.question}</h1>
        </div>
        <div>
          {question.answers.map((item) => (
            <a className={`contentAnswer ${selectedAnswer === item ? "activeAnswer" : ""} `} onClick={() => selectAnswer(item)}>
              <p>{item}</p>
              <input type={"radio"} checked={item === selectedAnswer} />
            </a>
          ))}
        </div>
    </div>
  )
}

export default ContentQuestionSelection