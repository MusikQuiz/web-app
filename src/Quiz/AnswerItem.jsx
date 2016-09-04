import React from 'react'

const AnswerItem = (props) => <li onClick={props.selectAnswer}>{props.answer}</li>

export default AnswerItem
