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

export function compileQuiz(tracks) {
  const questions = []
  console.log(questions, tracks)

  // tracks.items  -- loop through each element of `items` array
  // Grab (1) tracks.items.name; (2) tracks.items.
}
