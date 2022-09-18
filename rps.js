const choices = ['Rock', 'Paper', 'Scissors'];
let numPlayerWins = 0;
let numComputerWins = 0;
let playerSelection;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id[0].toUpperCase() + button.id.substring(1);    

    if (numPlayerWins < 5 && numComputerWins < 5) {
      playRound(playerSelection);
    } else {
      announceWinner();
    }
  });
}); 

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let roundResults = determineRoundWinner(playerSelection, computerSelection);

  const results = document.querySelector('#results');
  results.textContent = roundResults;

  const scoreboard = document.querySelector('#scoreboard');
  scoreboard.textContent = `Player: ${numPlayerWins}, Computer: ${numComputerWins}`;
}

function computerPlay() {
  return choices[Math.floor(Math.random() * 3)];
}

function determineRoundWinner(playerSelection, computerSelection) {
  let message = `You chose ${playerSelection}. Computer chose ${computerSelection}. `
  if (playerSelection === 'Rock') {

    switch (computerSelection) {
      case 'Rock': 
        message += "It's a tie!";
        break;

      case 'Paper': 
        numComputerWins += 1; 
        message += "Paper beats Rock, you lose.";
        break;

      case 'Scissors': 
        numPlayerWins += 1;
        message += "Rock beats Scissors, you win!";
        break;
    }

  } else if (playerSelection === 'Paper') {

    switch (computerSelection) {                                     
      case 'Rock': 
        numPlayerWins += 1;
        message += "Paper beats Rock, you win!";
        break;
                                                                     
      case 'Paper': 
        message += "It's a tie!";
        break;
                                                                    
      case 'Scissors': 
        numComputerWins += 1;
        message += "Scissors beat Paper, you lose.";
        break;
    }
  } else if (playerSelection === 'Scissors') {

    switch (computerSelection) {
      case 'Rock': 
        numComputerWins += 1;
        message += "Rock beats Scissors, you lose.";
        break;
                                                                     
      case 'Paper': 
        numPlayerWins += 1;
        message += "Scissors beat Paper, you win!";
        break;
                                                                     
      case 'Scissors': 
        message += "It's a tie!";
        break;
    }
  }

  return message;
}

function announceWinner() {
  let message;

  if (numPlayerWins > numComputerWins) {
    message = "You won!";
  } else if (numPlayerWins < numComputerWins) {
    message = "You lost :(";
  } else {
    message = "It's a tie!";                        
  }

  const results = document.querySelector('#results');
  results.textContent = '';
  
  const scoreboard = document.querySelector('#scoreboard');
  scoreboard.textContent = message;
}
