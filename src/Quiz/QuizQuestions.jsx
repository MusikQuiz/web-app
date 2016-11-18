import React from 'react'
import AnswerList from './AnswerList.jsx'
import Audio from './Audio.jsx'

class QuizQuestions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPoints: 0,
      currentQuestionID: 0
    }

    this.selectAnswer = this.selectAnswer.bind(this)
  }

  render() {
    const currentQuestion = this.props.questions[this.state.currentQuestionID]

    return (
      <div>
        <h1>Choose the correct title</h1>

        <p>Current Score: {this.state.currentPoints}</p>

        <Audio previewURL={currentQuestion.previewURL}/>

        <AnswerList
          selectAnswer={this.selectAnswer}
          answers={currentQuestion.answers}
        />
      </div>
    )
  }

  selectAnswer(selectedSongID) {
    const questions = this.props.questions
    const { currentQuestionID: id, currentPoints } = this.state

    const currentQuestion = questions[id]
    const isLastQuestion  = id === questions.length - 1
    const isCorrect       = selectedSongID === currentQuestion.correctAnswerID

    if (isLastQuestion) {
      const finalScore = isCorrect ? currentPoints + 100 : currentPoints

      this.props.onQuizEnd(finalScore)
      return
    }

    if (isCorrect) {
      this.setState({ currentPoints: currentPoints + 100 })
    }

    this.setState({ currentQuestionID: id + 1 })
  }
}

export default QuizQuestions
