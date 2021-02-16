const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Starts the game
  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
    });
  };

  //Play the match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    //Computer's options
    const computerOptions = ["rock", "paper", "scissors"];
  };

  //Call all the inner functions here
  startGame();
};

//Call the main function (start game);

game();
