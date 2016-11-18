import React from 'react'
import AnswerList from './AnswerList.jsx'
import Audio from './Audio.jsx'

import { fetchJSON, compileQuestions } from '../helpers'
import { SPOTIFY_API } from '../constants'

class Quiz extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      totalPoints: 0,
      currentQuestionID: 0,
      questions: null
    }

    this.selectAnswer = this.selectAnswer.bind(this)
  }

  componentDidMount() {
    const limit = 40
    const genre = 'classical'
    const url = `${SPOTIFY_API}/search?q=genre:${genre}&type=track&limit=${limit}`

    fetchJSON(url)
    .then(({ tracks: { items } }) => {
      this.setState({ questions: compileQuestions(items) })
    })
  }

  render() {
    const { questions, currentQuestionID: id, totalPoints } = this.state

    if (!questions) {
      return <div> Loading quiz...</div>
    }

    const currentQuestion = questions[id]

    return (
      <div>
        <h1>Choose the correct title</h1>

        <p>{totalPoints}</p>

        <Audio previewURL={currentQuestion.previewURL}/>

        <AnswerList
          selectAnswer={this.selectAnswer}
          answers={currentQuestion.answers}
        />
      </div>
    )
  }

  selectAnswer(selectedSongID) {
    const { questions, currentQuestionID: id, totalPoints } = this.state
    const currentQuestion = questions[id]

    if (selectedSongID === currentQuestion.correctAnswerID) {
      this.setState({ totalPoints: totalPoints + 100 })
    }

    if (id < questions.length - 1) {
      this.setState({ currentQuestionID: id + 1 })

    } else {
      this.props.endQuiz()

      // Set points in higher up component :o
      alert(`Congratulations! You scored ${totalPoints} points!`)
    }
  }
}

export default Quiz
