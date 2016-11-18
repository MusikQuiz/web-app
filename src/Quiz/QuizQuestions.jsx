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

    if (selectedSongID === currentQuestion.correctAnswerID) {
      this.setState({ currentPoints: currentPoints + 100 })
    }

    if (id < questions.length - 1) {
      this.setState({ currentQuestionID: id + 1 })

    } else {
      this.props.onQuizEnd(currentPoints + 100)
    }
  }
}

export default QuizQuestions
