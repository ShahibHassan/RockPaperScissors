// gets user input
function PlayerPlay() {
  const ask = prompt("Choose your weapon! ").toUpperCase();
  return ask;
}

// get the computer choice
function getComputerChoice() {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  const randomElement = options[Math.floor(Math.random() * options.length)];
  return randomElement;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "ROCK") {
    switch (computerSelection) {
      case "PAPER":
        return "computer";

      case "SCISSORS":
        return "player";

      case "ROCK":
        return "draw";
    }
  } else if (playerSelection == "PAPER") {
    switch (computerSelection) {
      case "ROCK":
        return "player";

      case "SCISSORS":
        return "computer";

      case "PAPER":
        return "draw";
    }
  } else if (playerSelection == "SCISSORS") {
    switch (computerSelection) {
      case "ROCK":
        return "computer";

      case "PAPER":
        return "player";

      case "SCISSORS":
        return "draw";
    }
  }
}

let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = PlayerPlay();
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    if (result === "player") {
      playerScore++;
      alert(
        "You won this round, you have " +
          playerScore +
          "points. Computer has " +
          computerScore +
          " points."
      );
    } else if (result === "draw") {
      alert("Tie, you both picked the same option. Try Again!");
    } else {
      computerScore++;
      alert(
        "You have lost this round, you have " +
          playerScore +
          ". Computer has " +
          computerScore +
          " points."
      );
    }
  }

  if (computerScore > playerScore) {
    alert("GAME OVER! YOU LOST");
  } else if (computerScore == playerScore) {
    alert("It's a Draw!");
  } else {
    alert("GAME OVER! YOU WIN");
  }
}
