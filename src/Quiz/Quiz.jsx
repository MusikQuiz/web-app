import React from 'react'
import AnswerList from './AnswerList.jsx'
import { fetchJSON, compileQuestions } from '../helpers'
import { SPOTIFY_API } from '../constants'

class Quiz extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      totalPoints: 0,
      currentQuestion: 0
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

    const currentQuestion = this.state.questions[this.state.currentQuestion]

    return (
      <div>
        <h1>Scegli la risposta giusta</h1>

        <p>{this.state.totalPoints}</p>

        <video controls autoPlay name="media">
          <source src={currentQuestion.previewURL} type="audio/mpeg"/>
        </video>

        <AnswerList selectAnswer={this.selectAnswer} answers={currentQuestion.answers}/>
      </div>
    )
  }

  selectAnswer(songID) {
    // Check if clicked songID is equal to correctAnswerID
    if (songID === this.state.questions[this.state.currentQuestion].correctAnswerID) {
      this.setState({totalPoints: this.state.totalPoints + 100})
    }

    if (this.state.currentQuestion < this.state.questions.length - 1) {
      this.setState({currentQuestion: this.state.currentQuestion + 1})
    } else {
      // TODO: Set state "quiz complete" to true, and render a different page
      alert(`Congratulations! You got ${this.state.totalPoints}!`)
    }
  }
}

export default Quiz
