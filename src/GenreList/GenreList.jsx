import React from 'react'
import GenreItem from './GenreItem.jsx'

require('./GenreList.scss')

const GenreList = ({ genres, genreToggle}) => {
  genres = genres.map((genre, i) =>
    <GenreItem genre={genre} key={i} genreToggle={genreToggle}/>
  )

  return (
    <div className="genre-picker">
      <h2>Pick a genre</h2>

      <ul className="genre-list">
        {genres}

        <div className="clear-fix" />
      </ul>
    </div>
  )
}

export default GenreList
