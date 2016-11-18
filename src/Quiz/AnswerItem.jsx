import React from 'react'
import classNames from 'classnames'

require('./AnswerItem.scss')

// TODO: rename class since they are not all correct answers
const answerItemStyles = classNames({
  'correct-answer': true
})

const AnswerItem = ({ selectAnswer, answer }) => {
  const handleClick = () => selectAnswer(answer.songID)

  return <li className={answerItemStyles} onClick={handleClick}>{answer.songName}</li>
}

export default AnswerItem
