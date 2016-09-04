import React from 'react'
import AnswerList from './AnswerList.jsx'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {totalPoints: 0}
    this.selectAnswer = this.selectAnswer.bind(this)
  }
  render() {
    const answers = ['Toccata & Fugue in D Minor', 'Die Zauberflöte', 'Beethoven Symphony No. 5', 'Claire de Lune']

    return (
      <div>
        <h1>Scegliere la risposta giusta</h1>
        <p>{this.state.totalPoints}</p>
        <video />

        <AnswerList selectAnswer={this.selectAnswer} answers={answers}/>
      </div>
    )
  }

  selectAnswer() {
    this.setState({totalPoints: this.state.totalPoints + 100})
  }
}

export default Quiz
