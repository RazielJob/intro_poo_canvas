const canvas=document.getElementById("canvas");
let ctx = canvas.getcontext('2D');

//obtiene las dimensiones de la pantalla actual
const window_heigth=window.innerHeight;
const window_width=window.innerWidth;

//El canvas tiene las mismas dimensiones que la pantalla
canvas.heigth=window_heigth;
canvas.width=window_width;

canvas.style.background="#ff9";

class Circle {
    constructor(x, y, radius, color) {
        this.posx = x;
        this.posy = y;
        this.radius = radius;
        this.color = color;

    }

    draw (context){
        context.beginPath();
        context.arc(this.posx, this. posy, this.radius, 0, Math.PI*2, false);
        context.stroke();
        context.closePath();
        
    }
}
 let miCirculo = new Circle(100, 100, 50 , "blue");
 miCirculo.draw(ctx);