const choices = ['Rock', 'Paper', 'Scissors'];
let numPlayerWins = 0;
let numComputerWins = 0;
let playerSelection;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id[0].toUpperCase() + button.id.substring(1);    

<<<<<<< HEAD
  while (numPlayerWins < 5 &&  numComputerWins < 5) {                                      
    let roundData = playRound();
    let playerSelection = roundData['player'];
    let computerSelection = roundData['computer'];
    let resultsMessage = roundData['result'];


    alert(`You chose ${playerSelection}, computer chose ${computerSelection}`);
    alert(resultsMessage);

  alert(`player: ${numPlayerWins}, computer: ${numComputerWins}`);
  }                                                                         
  if (numPlayerWins > numComputerWins) {
    alert("You won!");
  } else if (numPlayerWins < numComputerWins) {
    alert("You lost :(");
  } else {
    alert("It's a tie!");
  }
}
=======
    if (numPlayerWins < 5 && numComputerWins < 5) {
      playRound(playerSelection);
    } else {
      announceWinner();
    }
  });
}); 
>>>>>>> rps-ui

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let roundResults = determineRoundWinner(playerSelection, computerSelection);

<<<<<<< HEAD
  return { 'player': playerSelection, 
           'computer': computerSelection, 
           'result': roundResults, 
         }
=======
  const results = document.querySelector('#results');
  results.textContent = roundResults;

  const scoreboard = document.querySelector('#scoreboard');
  scoreboard.textContent = `Player: ${numPlayerWins}, Computer: ${numComputerWins}`;
>>>>>>> rps-ui
}

function computerPlay() {
  return choices[Math.floor(Math.random() * 3)];
}

function determineRoundWinner(playerSelection, computerSelection) {
<<<<<<< HEAD
  let message;
=======
  let message = `You chose ${playerSelection}. Computer chose ${computerSelection}. `
>>>>>>> rps-ui

  if (playerSelection === 'Rock') {

    switch (computerSelection) {
      case 'Rock': 
<<<<<<< HEAD
        message = "It's a tie!";
=======
        message += "It's a tie!";
>>>>>>> rps-ui
        break;

      case 'Paper': 
        numComputerWins += 1; 
<<<<<<< HEAD
        message = "Paper beats Rock, you lose.";
=======
        message += "Paper beats Rock, you lose.";
>>>>>>> rps-ui
        break;

      case 'Scissors': 
        numPlayerWins += 1;
<<<<<<< HEAD
        message = "Rock beats Scissors, you win!";
=======
        message += "Rock beats Scissors, you win!";
>>>>>>> rps-ui
        break;
    }

  } else if (playerSelection === 'Paper') {

    switch (computerSelection) {                                     
      case 'Rock': 
        numPlayerWins += 1;
<<<<<<< HEAD
        message = "Paper beats Rock, you win!";
        break;
                                                                     
      case 'Paper': 
        message = "It's a tie!";
=======
        message += "Paper beats Rock, you win!";
        break;
                                                                     
      case 'Paper': 
        message += "It's a tie!";
>>>>>>> rps-ui
        break;
                                                                    
      case 'Scissors': 
        numComputerWins += 1;
<<<<<<< HEAD
        message = "Scissors beat Paper, you lose.";
=======
        message += "Scissors beat Paper, you lose.";
>>>>>>> rps-ui
        break;
    }
  } else if (playerSelection === 'Scissors') {

    switch (computerSelection) {
      case 'Rock': 
        numComputerWins += 1;
<<<<<<< HEAD
        message = "Rock beats Scissors, you lose.";
=======
        message += "Rock beats Scissors, you lose.";
>>>>>>> rps-ui
        break;
                                                                     
      case 'Paper': 
        numPlayerWins += 1;
<<<<<<< HEAD
        message = "Scissors beat Paper, you win!";
        break;
                                                                     
      case 'Scissors': 
        message = "It's a tie!";
=======
        message += "Scissors beat Paper, you win!";
        break;
                                                                     
      case 'Scissors': 
        message += "It's a tie!";
>>>>>>> rps-ui
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
