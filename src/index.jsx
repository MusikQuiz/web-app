import React from 'react'
import { render } from 'react-dom'
import Quiz from './Quiz/Quiz.jsx'
import GenreList from './GenreList/GenreList.jsx'

require('./style.css')

const mountNode = document.getElementById('root')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showQuiz: false
    }
    this.genreToggle = this.genreToggle.bind(this)
  }

  render() {
    return (
      <div>
        <h1>Name That Tune!</h1>

        {this.renderGenreList()}

        {this.renderQuiz()}
      </div>
    )
  }

  genreToggle() {
    this.setState({ showQuiz: !this.state.showQuiz })
  }

  renderGenreList() {
    const genres = ['Classical', '60s', '80s']

    if (!this.state.showQuiz) return <GenreList genres={genres} genreToggle={this.genreToggle}/>
  }

  renderQuiz() {
    if (this.state.showQuiz) return <Quiz />
  }
}

render(<App/>, mountNode)
