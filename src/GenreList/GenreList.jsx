import React from 'react'
import GenreItem from './GenreItem.jsx'

const GenreList = ({ genres, genreToggle}) => {
  genres = genres.map((genre, i) =>
    <GenreItem genre={genre} key={i} genreToggle={genreToggle}/>
  )

  return (
    <div>
      <p>Pick a genre</p>

      <ul>
        {genres}
      </ul>
    </div>
  )
}

export default GenreList
