// *GLOBAL VARIABLES

const splashScreenDOM = document.querySelector("#splash-screen");
const gameOverScreenDOM = document.querySelector("#gameover-screen");
const restartBtnDOM = document.querySelector("#restart-btn");
const canvas = document.querySelector("#my-canvas");
const startBtnDOM = document.querySelector("#start-btn");

const ctx = canvas.getContext("2d");

let gameObj;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  

  splashScreenDOM.style.display = "none";
  canvas.style.display = "block";

  gameObj = new Game();
  gameObj.musica();

  gameObj.gameLoop();
};

const restartGame = () => {
  gameOverScreenDOM.style.display = "none";
  canvas.style.display = "block";
  gameObj = new Game();
  gameObj.gameLoop();
};

//*ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", restartGame);

window.addEventListener("keydown", () => {
  gameObj.submarinista.move();
});
