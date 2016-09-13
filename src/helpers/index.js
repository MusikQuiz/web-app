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

export function compileQuestions(tracks) {
  // const numQuestions = tracks.length / 4
  console.log(_.map([]))

  // Shuffle original array




  console.log(tracks)

}


// questions: [
//   {
//     previewURL: 'http://www.example.com',
//     answers: [
//       {
//         songName: 'Toccata & Fugue in D Minor',
//         songArtist: 'Bach',
//         songID: 0
//       },
//       {
//         songName: 'Die Zauberflöte',
//         songArtist: 'Mozart',
//         songID: 1
//       },
//       {
//         songName: 'Beethoven Symphony No. 5',
//         songArtist: 'Chopin',
//         songID: 2
//       },
//       {
//         songName: 'Claire de Lune',
//         songArtist: 'Debussy',
//         songID: 3
//       }
//     ],
//     correctAnswerID: 2
//   },
//   {
//     previewURL: 'http://www.example.com',
//     answers: [
//       {
//         songName: 'Spiegel im Spiegel',
//         songArtist: 'Avro Pärt',
//         songID: 0
//       },
//       {
//         songName: 'Moonlight Sonata',
//         songArtist: 'Beethoven',
//         songID: 1
//       },
//       {
//         songName: 'Der Vogelfänger bin ich ja',
//         songArtist: 'Mozart',
//         songID: 2
//       },
//       {
//         songName: 'Symphony No. 1231',
//         songArtist: 'Mahler',
//         songID: 3
//       }
//     ],
//     correctAnswerID: 0
//   },
