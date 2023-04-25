class Medusas {
  constructor() {
    // propiedades de las medusas

    this.img = new Image();
    this.img.src = "images/medusa/prova5.png";

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.w = 45; //ancho
    this.h = 55; //alto
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
    //1.aparecen las medusas aleatoriamente por cualquier sitio del mapa
    //2.que las medusas revoten por el canvas sin salirse(juego de la pelota)
    //quiero que esta verificacion se haga siempre
    // con eso estamos haciendo que la medusa rebote en el limite derecho del canvas
    if (this.x + this.w > canvas.width) {
      //console.log("la medusa llegó al final derecha");
      // como hacemos en este punto que la medusa se mueva hacia la izquierda?
      // determinar que la medusa ha cambiado su direccion
      this.isJellyMovingRight = false; // ultim pas perque revoti cap a  l esquerra al primer rebot de la dreta
      this.isJellyMovingLeft = true;
    } else if (this.x < 0) {
      //console.log("la medusa llegó al final izquierda");
      this.isJellyMovingLeft = false;
      this.isJellyMovingRight = true;
    } else if (this.y < 0) {
      //llegó arriba
      this.isJellyMovingDown = true;
      this.isJellyMovingUp = false;
    } else if (this.y + this.h > canvas.height) {
      //llegó abajo
      this.isJellyMovingUp = true;
      this.isJellyMovingDown = false;
    }

    

    //3. y/o que salgan cada vez mas medusas
    //3.BONUS->que las medusas se agrandan cada X tiempo unos segundos
  };
}
