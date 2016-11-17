import React from 'react'

const GenreItem = ({ genreToggle, genre }) =>
  <li onClick={genreToggle}>{genre}</li>

export default GenreItem
