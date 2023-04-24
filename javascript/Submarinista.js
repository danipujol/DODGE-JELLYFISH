class Submarinista {

    constructor () {
        //las propiedades del submarinista
    this.img = new Image()
    this.img.src ="images/submarinista/submarinistatop.png"
    this.x = 250; // la posicion en X
    this.y = 10; // la posicion en Y
    this.w = 95;// el ancho del submarinista
    this.h = 95; //alto del submarinista
    this.speed = 20; // velocidad del movimiento al subir

    
    }

   //las accions del submarinista

   //dibujar el submarinista
   draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
   }

   //1.el buzo se mueva en cualquier direccion controlado por nosotros

   
  move = () => {if(event.code === "ArrowUp"){
        this.y -= this.speed;
    } else if( event.code === "ArrowDown"){
        this.y += this.speed;
    } else if ( event.code === "ArrowRight"){
        this.x += this.speed;
    } else if( event.code === "ArrowLeft"){
        this.x -= this.speed;
    }
    
};


}