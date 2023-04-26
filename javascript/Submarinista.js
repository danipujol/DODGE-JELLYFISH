class Submarinista {
  constructor() {
    //las propiedades del submarinista
    this.img = new Image();
    this.img.src = "images/submarinista/submarinistatop15.png";
    this.x = 250; // la posicion en X
    this.y = 10; // la posicion en Y
    this.w = 65; // el ancho del submarinista
    this.h = 85; //alto del submarinista
    this.speed = 30; // velocidad del movimiento al subir

    this.isSubmarinistaMovingRight = true;
    this.isSubmarinistaMovingLeft = true;
    this.isSubmarinistaMovingUp = true;
    this.isSubmarinistaMovingDown = true;

  }

  //las accions del submarinista

  //dibujar el submarinista
  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  //1.el buzo se mueva en cualquier direccion controlado por nosotros

  move = () => {
    if (event.code === "ArrowUp" && this.y > 0) {
      this.y -= this.speed;
    } else if (event.code === "ArrowDown" && this.y < canvas.height - this.h) {
      this.y += this.speed;
    } else if (event.code === "ArrowRight" && this.x < canvas.width - this.w) {
      this.x += this.speed;
    } else if (event.code === "ArrowLeft" && this.x > 0) {
      this.x -= this.speed;
    }
  };
}
