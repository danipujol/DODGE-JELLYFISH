class Medusas {
  constructor() {
    // propiedades de las medusas

    this.img = new Image();
    this.img.src = "images/medusa/medusatop2.png";

    this.x = 400;
    this.y = 250;
    this.w = 120;
    this.h = 120;
    this.speed = 2;

    this.isJellyMovingRight = false;
    this.isJellyMovingLeft = true;
    this.isJellyMovingUp = false;
    this.isJellyMovingDown = true;
  } 

  //acciones de las medusas

  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  move = () => {
    if (this.isJellyMovingRight === true) {
      this.x += 2;
    }

    if (this.isJellyMovingLeft === true) {
      this.x -= 2;
    }
    if (this.isJellyMovingUp === true) {
      this.y -= 2;
    }
    if (this.isJellyMovingDown === true) {
      this.y += 2;
    }
  };

  medusasCollisionCanvas = () => {
    //quiero que esta verificacion se haga siempre
    // con eso estamos haciendo que la medusa rebote en el limite derecho del canvas
    if (this.x > canvas.width) {
      //console.log("la medusa llegó al final derecha");
      // como hacemos en este punto que la medusa se mueva hacia la izquierda?
      // determinar que la medusa ha cambiado su direccion
      this.isJellyMovingRight = false; // ultim pas perque revoti cap a  l esquerra al primer rebot de la dreta
      this.isJellyMovingLeft = true;
    } else if (this.x < 0) {
      //console.log("la medusa llegó al final izquierda");
      this.isJellyMovingLeft = false;
      this.isJellyMovingRight= true;
    } else if (this.y < 0) {  //llegó arriba
        this.isJellyMovingDown = true;
        this.isJellyMovingUp = false;
    } else if ( this.y > canvas.height){   //llegó abajo
        this.isJellyMovingUp = true;
        this.isJellyMovingDown = false;        
    }

    /*
          //! aqui vamos a detener el juego
          isGameOn = false;
          alert("Game Over Loser");
          // isBallMovingDown = false;
        } else if (ballX < 0) {
          console.log("la pelotita llegó al final izquierda");
          isBallMovingRight = true;
        } else if (ballY < 0) {
          console.log("la pelotita llegó al final arriba");
          isBallMovingDown = true;
        }
      };
    */
    //1.aparecen las medusas aleatoriamente por cualquier sitio del mapa
    //2.que las medusas revoten por el canvas sin salirse(juego de la pelota)
    //3. y/o que salgan cada vez mas medusas
    //3.BONUS->que las medusas se agrandan cada X tiempo unos segundos
  };
}

/* -> ejemplo de bola revotando

let ballX = 50; // ho substituim a ctx.arc (primer haviem posat alla 50 i despres hem creat les variables)
let ballY = 50;
let isBallMovingRight = true; //true mueve a la derecha
let isBallMovingDown = true;

const ballDraw = () => {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(ballX, ballY, 15, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
};


const ballMove = () => {
  if (isBallMovingRight === true) {
    ballX += 2; //hacia la derecha
    //condicionamos el movimiento de la pelotita(creando una nueva variable,  la de let isBallMovingRight)
  } else {
    ballX -= 2; //hacia abajo
  }

  if (isBallMovingDown === true) {
    ballY += 2; //hacia abajo
  } else {
    ballY -= 2;
  }
};

const ballWallColision = () => {
  //quiero que esta verificacion se haga siempre
  // con eso estamos haciendo que la pelotita rebote en el limite derecho del canvas
  if (ballX > canvas.width) {
    console.log("la pelotita llegó al final derecha");
    // como hacemos en este punto que la pelota se mueva hacia la izquierda?
    // determinar que la pelotita ha cambiado su direccion
    isBallMovingRight = false; // ultim pas perque revoti cap a  l esquerra al primer rebot de la dreta
  } else if (ballY > canvas.height) {
    console.log("la pelotita llegó al final abajo");
    //! aqui vamos a detener el juego
    isGameOn = false;
    alert("Game Over Loser");
    // isBallMovingDown = false;
  } else if (ballX < 0) {
    console.log("la pelotita llegó al final izquierda");
    isBallMovingRight = true;
  } else if (ballY < 0) {
    console.log("la pelotita llegó al final arriba");
    isBallMovingDown = true;
  }
};
*/
