import React from 'react'
import AnswerItem from './AnswerItem.jsx'

const AnswerList = ({ answers, selectAnswer }) => {
  answers = answers.map((answer) => {
    return (
      <AnswerItem
        answer={answer}
        key={answer.songID}
        selectAnswer={selectAnswer}
      />
    )
  })

  return (
    <div>
      {answers}
    </div>
  )
}

export default AnswerList
