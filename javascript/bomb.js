class Bomb {
  constructor() {
    this.img = new Image();
    this.img.src = "images/bomb/bomb.png";
    this.w = 50;
    this.h = 50;

    this.x = Math.random() * (canvas.width - this.w);
    this.y = Math.random() * (canvas.height - this.h);
  }

  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}
