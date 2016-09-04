import React from 'react'

const GenreItem = (props) => <li onClick={props.genreToggle}>{props.genre}</li>

export default GenreItem
