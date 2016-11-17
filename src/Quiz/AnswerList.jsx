import React from 'react'
import AnswerItem from './AnswerItem.jsx'

const AnswerList = (props) => {
  const answers = props.answers.map((answer) => {
    return (
      <AnswerItem
        answer={answer}
        key={answer.songID}
        selectAnswer={props.selectAnswer}
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
