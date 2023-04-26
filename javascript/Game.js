class Game {
  constructor() {
    //agregamos todas las propiedades de Game-> que son todos los elementos que existe en el juego

    //1.el fondo
    this.background = new Image();
    this.background.src =
      "images/fondo marino/istockphoto-1155277407-612x612.jpg";

    //2.el submarinista
    this.submarinista = new Submarinista();
    console.log(this.submarinista);


    //3. las medusas
    //this.medusa = new Medusas()
    this.medusaArr = [];

    this.isGameOn = true;
    //4.la bombona
    this.oxigen = undefined;

    setInterval(() => {
      this.oxigen = new Oxygen();

      setTimeout(() => {
        this.oxigen = undefined;
      }, 2500);
    }, 15000);

    //5.el contador
    //6.boton de pausa?
  }

  //metodos de Game -> todas las acciones que se realizan en el juego

  medusasAparecen = () => {
    // metodo que determina cuando deberia aparecer una medusa
    if (this.medusaArr.length < 15 && Math.random() < 0.0035) {
      // si hay menos de 15 medusas y si el numero aleatorio entre 0-1 es 0.002 aparezcan
      let newMedusa = new Medusas();
      this.medusaArr.push(newMedusa);
    }
  };

  //4.accion de que el contador augmente
  //5.colisiones del buzo contra las medusas
  checkCollisionSubVsMedusa = () => {
    this.medusaArr.forEach((eachMedusa) => {
      if (
        eachMedusa.x < this.submarinista.x + this.submarinista.w - 30 &&
        eachMedusa.x + eachMedusa.w > this.submarinista.x + 20 &&
        eachMedusa.y < this.submarinista.y + this.submarinista.h - 30 &&
        eachMedusa.h + eachMedusa.y > this.submarinista.y + 20
      ) {
        if (!this.isImmune) {
          this.gameOver();
        }
      }
    });
  };

  checkCollisionSuvVsOxigen = () => {
    if (
      this.oxigen &&
      this.submarinista.x < this.oxigen.x + this.oxigen.w - 15 &&
      this.submarinista.x + this.submarinista.w > this.oxigen.x + 15&&
      this.submarinista.y < this.oxigen.y + this.oxigen.h - 15 && 
      this.submarinista.y + this.submarinista.h > this.oxigen.y + 15
    ) {
     
      this.medusaArr = this.medusaArr.slice(0, Math.floor(this.medusaArr.length/2));
      
      this.oxigen = undefined;
    }
  };
  

  //6.se termina el juego

  gameOver = () => {
    //detener el juego
    this.isGameOn = false;
    //ocultar el canvas
    canvas.style.display = "none";
    //mostramos pantalla final
    gameOverScreenDOM.style.display = "flex";
  };

  //7.pausar el juego?
  //9. que el buzo al tocar la bombona tenga una vida extra(que no le afecte el tocar una medusa)

  //10.bonus ayuda que elimina el 50% de las medusas en pantalla

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.clientWidth, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  gameLoop = () => {
    console.log("executant recursio");

    //1.limpieza del canvas
    this.clearCanvas();

    // 2.acciones y movimientos de los elementos
    this.medusasAparecen();
    this.medusaArr.forEach((eachMedusa) => {
      eachMedusa.move();
    });
    this.medusaArr.forEach((eachMedusa) => {
      eachMedusa.medusasCollisionCanvas();
    });

    this.checkCollisionSubVsMedusa();

    this.checkCollisionSuvVsOxigen();

    //3. dibuixat dels elements
    this.drawBackground();
    this.submarinista.draw();

    // queremos que this.oxigen no sea undefined this.oxigen.draw() se ejecute
    if (this.oxigen != undefined) {
      this.oxigen.draw();
    }

    //this.medusa.draw()
    this.medusaArr.forEach((eachMedusa) => {
      eachMedusa.draw();
    });

    //4.Recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
