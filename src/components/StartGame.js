import React, {PureComponent} from 'react'
 import { Link } from 'react-router-dom'




  class StartGame extends PureComponent {

  render() {

    return (
          <div><h1>Want to play the game?</h1>
          <Link to="/game"><button>PLAY GAME!</button></Link>
          </div>
    )
  }
}

export default StartGame
