import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

require('./App.scss')

import Header from './Header/Header.jsx'
import Quiz from './Quiz/Quiz.jsx'
import GenreList from './GenreList/GenreList.jsx'

const mountNode = document.getElementById('root')

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showQuiz: false
    }

    this.genreToggle = this.genreToggle.bind(this)
    this.endQuiz = this.endQuiz.bind(this)
  }

  render() {
    return (
      <div className="home">
        <Header />

        {this.renderGenreList()}

        {this.renderQuiz()}
      </div>
    )
  }

  renderGenreList() {
    const genres = ['Classical', '60s', '80s', 'Rock']

    if (!this.state.showQuiz) {
      return <GenreList genres={genres} genreToggle={this.genreToggle}/>
    }
  }

  renderQuiz() {
    if (this.state.showQuiz) return <Quiz onEndQuiz={this.endQuiz} />
  }

  genreToggle() {
    this.setState({ showQuiz: !this.state.showQuiz })
  }

  endQuiz() {
    this.setState({ showQuiz: false })
  }
}

render(<App/>, mountNode)
