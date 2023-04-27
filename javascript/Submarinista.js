class Submarinista {
  constructor() {
    this.img = new Image();
    this.img.src = "images/submarinista/submarinistatop15.png";
    this.x = 250;
    this.y = 10;
    this.w = 65;
    this.h = 85;
    this.speed = 35;

    this.isSubmarinistaMovingRight = true;
    this.isSubmarinistaMovingLeft = true;
    this.isSubmarinistaMovingUp = true;
    this.isSubmarinistaMovingDown = true;
  }

  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

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
