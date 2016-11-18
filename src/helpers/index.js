import _ from 'lodash'
import fetch from 'isomorphic-fetch'

// Fetch helpers
export function status(response) {
  if (response.status >= 200 && response.status < 400) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export function json(response) {
  return response.json()
}

export function fetchJSON(url, options) {
  return fetch(url, options)
  .then(status)
  .then(json)
}

// Quiz compiling
export function compileQuiz(songs, numAnswersPerQuestion = 4) {
  const setOfAnswers = createSetOfAnswers(songs, numAnswersPerQuestion)

  return chooseRandomCorrectAnswers(setOfAnswers)
}

export function createSetOfAnswers(songs, numAnswersPerQuestion) {
  songs = _.shuffle(songs)

  const questionsWithAnswers = _.reduce(songs, (compilation, song, i) => {
    // E.g. reduce 40 answers to 10 questions of 4 answers each
    const questionIndex = Math.floor(i / numAnswersPerQuestion)

    // If a question has no answers yet, create the question object
    compilation[questionIndex] = compilation[questionIndex] || { answers: [] }

    const songData = {
      songName   : song.name,
      songID     : song.id,
      songArtist : song.artists[0].name,
      songPreview: song.preview_url
    }

    compilation[questionIndex].answers.push(songData)

    return compilation
  }, [])

  return questionsWithAnswers
}

export function chooseRandomCorrectAnswers(questions) {
  _.each(questions, ({ answers }, i, questionsArray) => {
    const randomAnswerIndex = _.random(0, answers.length - 1)

    const randomAnswer = answers[randomAnswerIndex]

    questionsArray[i].previewURL = randomAnswer.songPreview
    questionsArray[i].correctAnswerID = randomAnswer.songID
  })

  return questions
}
