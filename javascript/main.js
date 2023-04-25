// *GLOBAL VARIABLES

const splashScreenDOM = document.querySelector("#splash-screen");
const gameOverScreenDOM = document.querySelector("#gameover-screen");
const restartBtnDOM = document.querySelector("#restart-btn")
const canvas = document.querySelector("#my-canvas");
const startBtnDOM = document.querySelector("#start-btn");

const ctx = canvas.getContext("2d");

let gameObj;

// * STATE MANAGEMENT FUNCTIONS(funciones de manejo de estados)
const startGame = () => {
  //1 es la funcion que dice ok, ahora empezara el juego
  console.log("intentando iniciar");

  splashScreenDOM.style.display = "none";
  canvas.style.display = "block";

  //2 crear los elementos del juego
  gameObj = new Game();
  console.log(gameObj);

  //3.iniciar el bucle del juego(recursion)
  gameObj.gameLoop();
};

const restartGame = () => {

    gameOverScreenDOM.style.display = "none";
    canvas.style.display = "block";
    gameObj = new Game();
    gameObj.gameLoop();


}


//*ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click",restartGame)

window.addEventListener("keydown", () => {
  gameObj.submarinista.move();
});
//gameObj.submarinista.move()

//window.addEventListener("keydown", () => {
//    gameObj.submarinista.down()
//})
//window.addEventListener("keydown", () => {
//    gameObj.submarinista.left()
//})
