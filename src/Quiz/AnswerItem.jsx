import React from 'react'
import classNames from 'classnames'

require('./AnswerItem.scss')

const answerItemStyles = classNames({
  'correct-answer': true
})

const AnswerItem = (props) => <li className={answerItemStyles} onClick={()=>{props.selectAnswer(props.answer.songID)}}>{props.answer.songName}</li>

export default AnswerItem
