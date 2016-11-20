import React from 'react'
import QuizQuestions from './QuizQuestions.jsx'
import QuizResults from './QuizResults.jsx'

import { fetchJSON, compileQuiz } from '../helpers'
import { SPOTIFY_API } from '../constants'

class Quiz extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      finalScore: 0,
      isQuizInProgress: true,
      questions: null
    }

    this.showResults = this.showResults.bind(this)
  }

  componentDidMount() {
    const limit = 40
    const genre = 'classical'
    const url = `${SPOTIFY_API}/search?q=genre:${genre}&type=track&limit=${limit}`

    fetchJSON(url)
    .then(({ tracks: { items } }) => {
      this.setState({ questions: compileQuiz(items) })
    })
  }

  render() {
    const { questions, isQuizInProgress, finalScore} = this.state

    if (!questions) {
      return <div>Loading quiz...</div>
    }

    if (isQuizInProgress) {
      return <QuizQuestions questions={questions} onQuizEnd={this.showResults} />
    }

    return <QuizResults points={finalScore} />
  }

  showResults(finalScore) {
    this.setState({ isQuizInProgress: false, finalScore })
  }
}

export default Quiz
