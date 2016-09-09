import React from 'react'
import AnswerList from './AnswerList.jsx'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalPoints: 0,
      currentQuestion: 0,
      questions: [
        {
          previewURL: 'http://www.example.com',
          answers: [
            {
              songName: 'Toccata & Fugue in D Minor',
              songArtist: 'Bach',
              songID: 0
            },
            {
              songName: 'Die Zauberflöte',
              songArtist: 'Mozart',
              songID: 1
            },
            {
              songName: 'Beethoven Symphony No. 5',
              songArtist: 'Chopin',
              songID: 2
            },
            {
              songName: 'Claire de Lune',
              songArtist: 'Debussy',
              songID: 3
            }
          ],
          correctAnswerID: 2
        },
        {
          previewURL: 'http://www.example.com',
          answers: [
            {
              songName: 'Spiegel im Spiegel',
              songArtist: 'Avro Pärt',
              songID: 0
            },
            {
              songName: 'Moonlight Sonata',
              songArtist: 'Beethoven',
              songID: 1
            },
            {
              songName: 'Der Vogelfänger bin ich ja',
              songArtist: 'Mozart',
              songID: 2
            },
            {
              songName: 'Symphony No. 1231',
              songArtist: 'Mahler',
              songID: 3
            }
          ],
          correctAnswerID: 0
        },
        {
          previewURL: 'http://www.example.com',
          answers: [
            {
              songName: 'Primavera',
              songArtist: 'Vivaldi',
              songID: 0
            },
            {
              songName: 'La donna è mobile',
              songArtist: 'Rossini',
              songID: 1
            },
            {
              songName: 'Symphony No. 3.14',
              songArtist: 'Cage',
              songID: 2
            },
            {
              songName: 'Also sprach Zarathustra',
              songArtist: 'Strauss',
              songID: 3
            }
          ],
          correctAnswerID: 3
        }
      ]
    }
    this.selectAnswer = this.selectAnswer.bind(this)
  }
  render() {
    const currentQuestion = this.state.questions[this.state.currentQuestion]

    return (
      <div>
        <h1>Scegliere la risposta giusta</h1>
        <p>{this.state.totalPoints}</p>
        <video />
        <p>{currentQuestion.previewURL}</p>

        <AnswerList selectAnswer={this.selectAnswer} answers={currentQuestion.answers}/>
      </div>
    )
  }

  selectAnswer(songID) {
    // Check if clicked songID is equal to correctAnswerID
    if (songID === this.state.questions[this.state.currentQuestion].correctAnswerID) {
      this.setState({totalPoints: this.state.totalPoints + 100})
    }

    if (this.state.currentQuestion < 2) {
      this.setState({currentQuestion: this.state.currentQuestion + 1})
    } else {
      alert(`Congratulations! You got ${this.state.totalPoints}!`)
    }
  }
}

export default Quiz
