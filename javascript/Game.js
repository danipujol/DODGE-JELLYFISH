class Game {
  constructor() {
    this.background = new Image();
    this.background.src =
      "images/fondo marino/istockphoto-1155277407-612x612.jpg";

    this.submarinista = new Submarinista();
    console.log(this.submarinista);

    this.medusaArr = [];

    this.isGameOn = true;

    this.oxigen = undefined;

    setInterval(() => {
      this.oxigen = new Oxygen();

      setTimeout(() => {
        this.oxigen = undefined;
      }, 3000);
    }, 15000);

    this.bomb = undefined;

    setInterval(() => {
      this.bomb = new Bomb();

      setTimeout(() => {
        this.bomb = undefined;
      }, 2000);
    }, 5000);

    this.score = 0;
  }

  medusasAparecen = () => {
    if (this.medusaArr.length < 15 && Math.random() < 0.0035) {
      let newMedusa = new Medusas();
      this.medusaArr.push(newMedusa);

      this.score++;
    }
  };

  checkCollisionSubVsMedusa = () => {
    this.medusaArr.forEach((eachMedusa) => {
      if (
        eachMedusa.x < this.submarinista.x + this.submarinista.w - 30 &&
        eachMedusa.x + eachMedusa.w > this.submarinista.x + 20 &&
        eachMedusa.y < this.submarinista.y + this.submarinista.h - 30 &&
        eachMedusa.h + eachMedusa.y > this.submarinista.y + 20
      ) {
        this.gameOver();
      }
    });
  };

  checkCollisionSuvVsOxigen = () => {
    if (
      this.oxigen &&
      this.submarinista.x < this.oxigen.x + this.oxigen.w - 15 &&
      this.submarinista.x + this.submarinista.w > this.oxigen.x + 15 &&
      this.submarinista.y < this.oxigen.y + this.oxigen.h - 15 &&
      this.submarinista.y + this.submarinista.h > this.oxigen.y + 15
    ) {
      this.medusaArr = this.medusaArr.slice(
        0,
        Math.floor(this.medusaArr.length / 2)
      );

      this.oxigen = undefined;
    }
  };

  chechCollisionSuvVsBomb = () => {
    if (
      this.bomb &&
      this.submarinista.x < this.bomb.x + this.bomb.w - 15 &&
      this.submarinista.x + this.submarinista.w > this.bomb.x + 15 &&
      this.submarinista.y < this.bomb.y + this.bomb.h - 15 &&
      this.submarinista.y + this.submarinista.h > this.bomb.y + 15
    ) {
      this.medusaArr.push(new Medusas(), new Medusas(), new Medusas());

      this.bomb = undefined;
    }
  };

  gameOver = () => {
    this.isGameOn = false;

    canvas.style.display = "none";

    gameOverScreenDOM.style.display = "flex";
  };

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.clientWidth, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  drawScore = () => {
    ctx.font = "50px Comic Sans MS";
    ctx.strokeText(this.score, 425, 60);
  };

  gameLoop = () => {
    console.log("executant recursio");

    this.clearCanvas();

    this.medusasAparecen();
    this.medusaArr.forEach((eachMedusa) => {
      eachMedusa.move();
    });
    this.medusaArr.forEach((eachMedusa) => {
      eachMedusa.medusasCollisionCanvas();
    });

    this.checkCollisionSubVsMedusa();

    this.checkCollisionSuvVsOxigen();

    this.chechCollisionSuvVsBomb();

    this.drawBackground();
    this.submarinista.draw();

    if (this.oxigen != undefined) {
      this.oxigen.draw();
    }

    if (this.bomb != undefined) {
      this.bomb.draw();
    }

    this.medusaArr.forEach((eachMedusa) => {
      eachMedusa.draw();
    });
    this.drawScore();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
