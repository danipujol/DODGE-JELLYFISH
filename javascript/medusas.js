class Medusas {
  constructor() {
    this.img = new Image();
    this.img.src = "images/medusa/prova5.png";

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.w = 45;
    this.h = 55;
    this.speed = 2;

    this.isJellyMovingRight = false;
    this.isJellyMovingLeft = true;
    this.isJellyMovingUp = false;
    this.isJellyMovingDown = true;
  }

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
    if (this.x + this.w > canvas.width) {
      this.isJellyMovingRight = false;
      this.isJellyMovingLeft = true;
    } else if (this.x < 0) {
      this.isJellyMovingLeft = false;
      this.isJellyMovingRight = true;
    } else if (this.y < 0) {
      this.isJellyMovingDown = true;
      this.isJellyMovingUp = false;
    } else if (this.y + this.h > canvas.height) {
      this.isJellyMovingUp = true;
      this.isJellyMovingDown = false;
    }
  };
}
