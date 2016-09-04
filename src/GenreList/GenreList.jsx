import React from 'react'
import GenreItem from './GenreItem.jsx'

const GenreList = (props) => {
  const genres = props.genres.map((genre, i) => <GenreItem genre={genre} key={i} genreToggle={props.genreToggle}/>)

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
