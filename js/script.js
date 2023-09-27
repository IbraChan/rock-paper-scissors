function getComputerChoice() {
  // get a random number between 1 and 3
  const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  // console.log(randomNumber);
  switch(randomNumber) {
    case 1:
     return "rock";
    case 2:
     return "paper";
    case 3:
     return "scissors";
  }
}

function takeUserChoise() {
  const playerChoice = prompt("Enter Your Choise:");
  return playerChoice.toLowerCase();
}

function playRound() {
    const playerSelection = takeUserChoise();
    const computerSelection = getComputerChoice();
  if (playerSelection === "paper" && computerSelection === "rock") {
    return `You won! ${playerSelection} beats ${computerSelection}! keep going!`;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You won! ${playerSelection} beats ${computerSelection}! keep going!`;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You won! ${playerSelection} beats ${computerSelection}! keep going!`;
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    return `You lost :( ${computerSelection} beats ${playerSelection}! Try Again!`;
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You lost :( ${computerSelection} beats ${playerSelection}! Try Again!`;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You lost :( ${computerSelection} beats ${playerSelection}! Try Again!`;
  }
  return "It is a tie! Keep Going!";
}

function game() {
    let playerWins = 0, computerWins = 0; 
    while (playerWins < 5 && computerWins < 5) {
        roundResult = playRound();
        if (roundResult.includes("won")) {
            console.log(roundResult);
            playerWins++
        }
        else if (roundResult.includes("lost")) {
            console.log(roundResult);
            computerWins++;
        }
        else {
            console.log("it is a tie! try again!")
        }
    }
    if (playerWins === 5) {
        return "You Won the whole game!"
    }
    else {
        return "You Lost the game, Sorry for that :("
    }
}
