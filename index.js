const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  function playGame() {
    const rockbtn = document.querySelector(".rock");
    const paperbtn = document.querySelector(".paper");
    const scissorsbtn = document.querySelector(".scissors");
    const playerChoices = [rockbtn, paperbtn, scissorsbtn];
    const computerChoices = ["Rock", "Paper", "Scissors"];
    const winnerDiv = document.querySelector(".winner");
    const resetBtn = document.querySelector("#reset");

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

        if (playerScore === 5 || computerScore === 5) {
          if (playerScore === 5) {
            winnerDiv.textContent = "You won the game!";
            winnerDiv.style.color = "green";
          } else {
            winnerDiv.textContent = "Computer won the game!";
            winnerDiv.style.color = "red";
          }
          winnerDiv.style.display = "block";
          resetBtn.style.display = "block";
          scissorsbtn.style.display = "none";
          rockbtn.style.display = "none";
          paperbtn.style.display = "none";
        }

        resetBtn.addEventListener("click", function () {
          playerScore = 0;
          computerScore = 0;
          const pScore = document.querySelector(".playerCount");
          const cScore = document.querySelector(".computerCount");
          cScore.textContent = computerScore;
          pScore.textContent = playerScore;
          resetBtn.style.display = "none";
          scissorsbtn.style.display = "block";
          rockbtn.style.display = "block";
          paperbtn.style.display = "block";
          winnerDiv.style.display = "none";
        });
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

  playGame();
};

game();
