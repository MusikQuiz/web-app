import React from 'react'

require('./GenreItem.scss')

const GenreItem = ({ genreToggle, genre }) => (
  <li className="genre-item" onClick={genreToggle}>
      {genre}
  </li>
)

export default GenreItem
