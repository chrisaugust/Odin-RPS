const choices = ['Rock', 'Paper', 'Scissors'];
let numPlayerWins = 0;
let numComputerWins = 0;

function game() {

  for (let i = 0; i < 5; i++) {                                      
    let roundData = playRound();
    let playerSelection = roundData['player'];
    let computerSelection = roundData['computer'];
    let resultsMessage = roundData['result'];


    alert(`You chose ${playerSelection}, computer chose ${computerSelection}`);
    alert(determineRoundWinner(playerSelection, computerSelection));
  } 

  alert(`player: ${numPlayerWins}, computer: ${numComputerWins}`);
                                                                         
  if (numPlayerWins > numComputerWins) {
    console.log("You won!");
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

  if (playerSelection === 'Rock') {
    switch (computerSelection) {
      case 'Rock': 
        return "It's a tie!";
        break;

      case 'Paper': 
        numComputerWins++; 
        return "Paper beats Rock, you lose.";
        break;

      case 'Scissors': 
        numPlayerWins++;
        return "Rock beats Scissors, you win!";
        break;
    }

  } else if (playerSelection === 'Paper') {

    switch (computerSelection) {                                     
      case 'Rock': 
        numPlayerWins++;
        return "Paper beats Rock, you win!";
        break;
                                                                     
      case 'Paper': 
        return "It's a tie!";
        break;
                                                                    
      case 'Scissors': 
        numComputerWins++;
        return "Scissors beat Paper, you lose.";
        break;
    }
  } else if (playerSelection === 'Scissors') {

    switch (computerSelection) {
      case 'Rock': 
        numComputerWins++;
        return "Rock beats Scissors, you lose.";
        break;
                                                                     
      case 'Paper': 
        numPlayerWins++;
        return "Scissors beat Paper, you win!";
        break;
                                                                     
      case 'Scissors': 
        return "It's a tie!";
        break;
    }
  }
}

game();
