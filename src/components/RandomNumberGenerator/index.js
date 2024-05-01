// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  randomNum = () => {
    const randomNumber = Math.floor(Math.random() * 101) // Generates a random integer between 0 and 100
    this.setState({num: randomNumber})
  }

  render() {
    const {num} = this.state
    return (
      <div className="main-cont">
        <div className="cont">
          <h1 className="main-heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="genrate-button"
            type="button"
            onClick={this.randomNum}
          >
            Generate
          </button>
          <p className="random-num">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
