import React from 'react'
import AnswerItem from './AnswerItem.jsx'

const AnswerList = (props) => {
  const answers = props.answers.map((answer, i) => <AnswerItem answer={answer} key={i} selectAnswer={props.selectAnswer}/>)

  return (
    <div>
      {answers}
    </div>
  )
}

export default AnswerList
