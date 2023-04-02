// This file contains the logic for the game
/**
 * @param {string} userItem - the item selected by the user
 * @param {string} computerItem - the item selected by the computer
 * @returns {string} - the winner of the game
 * @example
 * getResults('rock', 'scissors') // returns 'user'
 * getResults('paper', 'rock') // returns 'user'
 * getResults('scissors', 'paper') // returns 'user'
*/  
export const getResults = (userItem, computerItem) => {
     // let's calculate who wins
    // rock beats scissors
    // paper beats rock
    // scissors beats paper
    // if userItem === computerItem, it's a tie
    // if userItem === 'rock' && computerItem === 'scissors', user wins
    // if userItem === 'paper' && computerItem === 'rock', user wins
    // if userItem === 'scissors' && computerItem === 'paper', user wins
    // if userItem === 'rock' && computerItem === 'paper', computer wins
    // if userItem === 'paper' && computerItem === 'scissors', computer wins
    // if userItem === 'scissors' && computerItem === 'rock', computer wins
    let winnerValue = ''
    if (userItem === computerItem) {
      winnerValue = 'tie'
    } else if (userItem === 'rock' && computerItem === 'scissors') {
      winnerValue = 'user'
    } else if (userItem === 'paper' && computerItem === 'rock') {
      winnerValue = 'user'
    }
    else if (userItem === 'scissors' && computerItem === 'paper') {
      winnerValue = 'user'
    }
    else if (userItem === 'rock' && computerItem === 'paper') {
      winnerValue = 'computer'
    }
    else if (userItem === 'paper' && computerItem === 'scissors') {
      winnerValue = 'computer'
    }
    else if (userItem === 'scissors' && computerItem === 'rock') {
      winnerValue = 'computer'
    }
    return winnerValue
}