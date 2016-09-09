import React from 'react'
import classNames from 'classnames'

require('./AnswerItem.scss')

const answerItemStyles = classNames({
  'correct-answer': true
})

const AnswerItem = (props) => {
  const handleClick = () => props.selectAnswer(props.answer.songID)

  return <li className={answerItemStyles} onClick={handleClick}>{props.answer.songName}</li>
}

export default AnswerItem
