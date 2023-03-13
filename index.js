const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  function playGame() {
    const rockbtn = document.querySelector(".rock");
    const paperbtn = document.querySelector(".paper");
    const scissorsbtn = document.querySelector(".scissors");
    const playerChoices = [rockbtn, paperbtn, scissorsbtn];
    const computerChoices = ["Rock", "Paper", "Scissors"];

    // Fucntion to start playing the game
    playerChoices.forEach((option) => {
      option.addEventListener("click", function () {
        console.log(this.innerText);

        //calculates the computers choice randomly
        const computerChoice =
          computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // checks to see who wins the round
        console.log("this.innerText = " + this.innerText);
        console.log("computer choice: " + computerChoice);
        const result = winner(this.innerText, computerChoice);

        // end game after 5 rounds
      });
    });
  }

  function winner(player, computer) {
    const result = document.querySelector(".result");
    const pScore = document.querySelector(".playerCount");
    const cScore = document.querySelector(".computerCount");

    if (player == "Rock") {
      switch (computer) {
        case "Rock":
          //return "tie";
          result.textContent = "You have Tied";
          result.style.color = "yellow";
          result.style.display = "block";
          break;
        case "Paper":
          //return "computer";
          result.textContent = "Computer Wins the round!";
          result.style.color = "red";
          result.style.display = "block";
          computerScore++;
          cScore.textContent = computerScore;
          break;

        case "Scissors":
          //return "player";
          result.textContent = "You Win the round!";
          result.style.color = "green";
          result.style.display = "block";
          playerScore++;
          pScore.textContent = playerScore;
          break;
      }
    } else if (player == "Paper") {
      switch (computer) {
        case "Rock":
          //return "player";
          result.textContent = "You Win the round!";
          result.style.color = "green";
          result.style.display = "block";
          playerScore++;
          pScore.textContent = playerScore;
          break;

        case "Paper":
          //return "tie";
          result.textContent = "You have Tied";
          result.style.color = "yellow";
          result.style.display = "block";
          break;

        case "Scissors":
          //return "computer";
          result.textContent = "Computer Wins the round!";
          result.style.color = "red";
          result.style.display = "block";
          computerScore++;
          cScore.textContent = computerScore;
          break;
      }
    } else if (player == "Scissors") {
      switch (computer) {
        case "Rock":
          //return "computer";
          result.textContent = "Computer Wins the round!";
          result.style.color = "red";
          result.style.display = "block";
          computerScore++;
          cScore.textContent = computerScore;
          break;

        case "Paper":
          //return "player";
          result.textContent = "You Win the round!";
          result.style.color = "green";
          result.style.display = "block";
          playerScore++;
          pScore.textContent = playerScore;
          break;

        case "Scissors":
          // return "tie";
          result.textContent = "You have Tied";
          result.style.color = "yellow";
          result.style.display = "block";
          break;
      }

      if (result.textContent == "You have Tied") {
        result.style.color = "yellow";
      }
    }
  }

  function reset() {}
  playGame();
};

game();
