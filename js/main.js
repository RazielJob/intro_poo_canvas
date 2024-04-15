const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//obtiene las dimensiones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

//El canvas tiene las mismas dimensiones que la pantalla
canvas.height = window_height;
canvas.width = window_width;

canvas.style.background = '#ff8';

class Circle {
    constructor(x, y, radius, color, text) {
        this.posx = x;
        this.posy = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
    }

    draw (context){
        context.beginPath();

        context.strokeStyle = this.color;
        context.textAlign='center';
        context.textBaseline='middle';
        context.font ='20px Arial';

        context.fillText(this.text,this.posx,this.posy);
        context.lineWidth=3;
        context.arc(this.posx, this. posy, this.radius, 0, Math.PI*2, false);
        context.stroke();
        context.closePath();
        
    }
}

let arrayCicle = [];

for (let i=0; i<10;i++){
    let randomx = Math.random()* window_width;
    let randomy = Math.random()* window_height;
    let randomRadius = Math.floor(Math.random()*100 + 20);
    let miCirculo = new Circle(randomx, randomy,randomRadius , 'blue', i+1);
    //agrega el objeto al array
    arrayCicle.push(miCirculo);
    arrayCicle[i].draw(ctx);
}
 //let miCirculo = new Circle(100, 100, 50 , 'blue', 'TEC');
 //miCirculo.draw(ctx);
 //let miCirculo2 = new Circle(270, 270, 50 , 'black', 'PACHUCA');
 //miCirculo.draw(ctx);