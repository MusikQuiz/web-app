import React from 'react'
import { render } from 'react-dom'
require('./style.css')

const mountNode = document.getElementById('root')

class App extends React.Component {
  render() {
    return <p>Ciao a tutti!</p>
  }
}

render(<App/>, mountNode)