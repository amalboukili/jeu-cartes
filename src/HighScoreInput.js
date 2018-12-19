import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './HighScoreInput.css'

import { saveHOFEntry } from './HallOfFame'

class HighScoreInput extends Component {
    state = { winner : ''}

    //Binding
    handleWinnerUpdate = event => {
        this.setState({ winner: event.target.value.toUpperCase() })    
    }

    //binding
    persistWinner = event => {
        event.preventDefault()
        const newEntry = { guesses: this.props.guesses, player: this.state.winner }
        saveHOFEntry(newEntry, this.props.onStored)
    }

  render() {
    return (
      <form className="highScoreInput" onSubmit={this.persistWinner}>
        <p>
          <label>
            Bravo ! Entrez votre prénom :
            <input 
            type="text" 
            autoComplete="given-name" 
            onChange={this.handleWinnerUpdate}
            value = {this.state.winner} 
            />
          </label>
          <button type="submit">J’ai gagné !</button>
        </p>
      </form>
    )
  }
}

HighScoreInput.propTypes = {
  guesses: PropTypes.number.isRequired,
  onStored: PropTypes.func.isRequired
}

export default HighScoreInput