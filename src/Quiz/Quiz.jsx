import React from 'react'
import QuizQuestions from './QuizQuestions.jsx'
import QuizResults from './QuizResults.jsx'

import { fetchJSON, compileQuestions } from '../helpers'
import { SPOTIFY_API } from '../constants'

class Quiz extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      totalPoints: 0,
      showResults: false,
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
      this.setState({ questions: compileQuestions(items) })
    })
  }

  render() {
    const { questions, showResults, totalPoints} = this.state

    if (!questions) {
      return <div>Loading quiz...</div>
    }

    if (showResults) {
      return <QuizResults points={totalPoints} />
    }

    return <QuizQuestions questions={this.state.questions} onQuizEnd={this.showResults} />
  }

  showResults(totalPoints) {
    this.setState({ showResults: true, totalPoints })
  }
}

export default Quiz
