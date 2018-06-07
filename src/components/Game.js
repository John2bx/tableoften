import React, {PureComponent} from 'react'
 import { Link } from 'react-router-dom'




  class Game extends PureComponent {
    handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      console.log('enter press here! ')
    }
  }

  render() {

    return (
          <div onKeyPress={this.handleKeyPress} ><h1>1 + 1</h1>
          <input type="text" id="one" onKeyPress={this.handleKeyPress} />
          <Link to="/game"><button>PLAY GAME!</button></Link>
          </div>
    )
  }
}

export default Game
