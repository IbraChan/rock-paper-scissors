function getComputerChoise() {
  // get a random number between 1 and 3
  const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  // console.log(getRandomNumber);
  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function takeUserChoise() {
  const playerChoise = prompt("Enter Your Choise:");
  return playerChoise.toLocaleLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = takeUserChoise();
    computerSelection = getComputerChoise();
  if (playerSelection == "paper" && computerSelection == "rock") {
    return `You won! ${playerSelection} beats ${computerSelection}! keep going!`;
  }
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return `You won! ${playerSelection} beats ${computerSelection}! keep going!`;
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    return `You won! ${playerSelection} beats ${computerSelection}! keep going!`;
  }
  if (playerSelection == "rock" && computerSelection == "paper") {
    return `You lost :( ${computerSelection} beats ${playerSelection}! Try Again!`;
  }
  if (playerSelection == "scissors" && computerSelection == "rock") {
    return `You lost :( ${computerSelection} beats ${playerSelection}! Try Again!`;
  }
  if (playerSelection == "paper" && computerSelection == "scissors") {
    return `You lost :( ${computerSelection} beats ${playerSelection}! Try Again!`;
  }
  return "It is a tie! Keep Going!";
}

function game() {
    let i = 1, j = 1; 
    while (i <= 5 && j <= 5) {
        roundResult = playRound();
        if (roundResult.includes("won")) {
            console.log(roundResult);
            i++
        }
        else if (roundResult.includes("lost")) {
            console.log(roundResult);
            j++;
        }
        else {
            console.log("it is a tie! try again!")
        }
    }
    if (i == 5) {
        return "You Won the whole game!"
    }
    else {
        return "You Lost the game, Sorry for that :("
    }
}