/*eslint-disable camelcase*/
import chai from 'chai'
import * as helpers from './index'

chai.should()

describe('Helper Functions', () => {
  describe('createSetOfAnswers', () => {
    const createSetOfAnswers = helpers.createSetOfAnswers
    const mockAPIData = mockSpotifyData()

    it('formats spotify data into sets of answers', () => {
      const setOfAnswers = createSetOfAnswers(mockAPIData, 4)

      setOfAnswers.should.be.a('array')
      setOfAnswers.should.have.length(1)
      setOfAnswers[0].answers.should.have.length(4)
    })

    it('should have song data for each answer', () => {
      const setOfAnswers = createSetOfAnswers(mockAPIData, 4)

      setOfAnswers.forEach((answerOptions) => {
        answerOptions.answers.forEach((song) => {
          song.songName.should.exist
          song.songID.should.exist
          song.songArtist.should.exist
          song.songPreview.should.exist
        })
      })
    })

    it('creates more sets of answers when there are fewer answers per question', () => {
      const setOfAnswers = createSetOfAnswers(mockAPIData, 2)

      setOfAnswers.should.have.length(2)
      setOfAnswers[0].answers.should.have.length(2)
    })
  })

  describe('chooseRandomCorrectAnswers', () => {
    const chooseRandomCorrectAnswers = helpers.chooseRandomCorrectAnswers

    it('chooses a song to be the answer, adding its previewURL and ID to the answer set', () => {
      let setOfAnswers = helpers.createSetOfAnswers(mockSpotifyData(), 2)
      setOfAnswers = chooseRandomCorrectAnswers(setOfAnswers)

      setOfAnswers.forEach((answerOptions) => {
        const { correctAnswerID, previewURL } = answerOptions

        const isAnswerInOptions = answerOptions.answers.some((song) => {
          return song.songID === correctAnswerID && song.songPreview === previewURL
        })

        isAnswerInOptions.should.be.true
      })
    })
  })
})

function mockSpotifyData() {
  return [
    {
      artists: [{ name: 'Gorgonzola' }],
      id: '1',
      name: 'Song 1',
      preview_url: 'https://p.scdn.co/mp3-preview/1'
    },
    {
      artists: [{ name: 'Brie' }],
      id: '2',
      name: 'Song 2',
      preview_url: 'https://p.scdn.co/mp3-preview/2'
    },
    {
      artists: [{ name: 'Muenster' }],
      id: '3',
      name: 'Song 3',
      preview_url: 'https://p.scdn.co/mp3-preview/3'
    },
    {
      artists: [{ name: 'Cheddar' }],
      id: '4',
      name: 'Song 4',
      preview_url: 'https://p.scdn.co/mp3-preview/4'
    },
  ]
}
