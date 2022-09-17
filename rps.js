const choices = ['Rock', 'Paper', 'Scissors'];
let numPlayerWins = 0;
let numComputerWins = 0;

function game() {

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

function playRound() {
  let playerSelection = prompt('Rock, Paper, or Scissors?');        
  let computerSelection = computerPlay();
  let roundResults = determineRoundWinner(playerSelection, computerSelection);

  return { 'player': playerSelection, 
           'computer': computerSelection, 
           'result': roundResults, 
         }
}

function computerPlay() {
  return choices[Math.floor(Math.random() * 3)];
}

function determineRoundWinner(playerSelection, computerSelection) {
  let message;

  if (playerSelection === 'Rock') {

    switch (computerSelection) {
      case 'Rock': 
        message = "It's a tie!";
        break;

      case 'Paper': 
        numComputerWins += 1; 
        message = "Paper beats Rock, you lose.";
        break;

      case 'Scissors': 
        numPlayerWins += 1;
        message = "Rock beats Scissors, you win!";
        break;
    }

  } else if (playerSelection === 'Paper') {

    switch (computerSelection) {                                     
      case 'Rock': 
        numPlayerWins += 1;
        message = "Paper beats Rock, you win!";
        break;
                                                                     
      case 'Paper': 
        message = "It's a tie!";
        break;
                                                                    
      case 'Scissors': 
        numComputerWins += 1;
        message = "Scissors beat Paper, you lose.";
        break;
    }
  } else if (playerSelection === 'Scissors') {

    switch (computerSelection) {
      case 'Rock': 
        numComputerWins += 1;
        message = "Rock beats Scissors, you lose.";
        break;
                                                                     
      case 'Paper': 
        numPlayerWins += 1;
        message = "Scissors beat Paper, you win!";
        break;
                                                                     
      case 'Scissors': 
        message = "It's a tie!";
        break;
    }
  }

  return message;
}

game();
