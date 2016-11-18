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
    if (!this.state.questions) {
      return <div> Loading quiz...</div>
    }

    const currentQuestion = this.state.questions[this.state.currentQuestionID]

    return (
      <div>
        <h1>Choose the correct title</h1>

        <p>{this.state.totalPoints}</p>

        <Audio previewURL={currentQuestion.previewURL}/>

        <AnswerList selectAnswer={this.selectAnswer} answers={currentQuestion.answers}/>
      </div>
    )
  }

  selectAnswer(songID) {
    // Check if clicked songID is equal to correctAnswerID
    if (songID === this.state.questions[this.state.currentQuestionID].correctAnswerID) {
      this.setState({totalPoints: this.state.totalPoints + 100})
    }

    if (this.state.currentQuestionID < this.state.questions.length - 1) {
      this.setState({currentQuestionID: this.state.currentQuestionID + 1})
    } else {
      // TODO: Set state "quiz complete" to true, and render a different page
      alert(`Congratulations! You got ${this.state.totalPoints}!`)
    }
  }
}

export default Quiz
