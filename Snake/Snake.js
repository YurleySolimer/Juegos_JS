alert("FFFFFFFF");
var velocidad = 100;
var tamano = 20;

class objeto {
	constructor () {
		this.tamano = tamano;
	}

	choque(obj) {
		var difx = Math.abs(this.x - obj.x);
		var dify = Math.abs(this.y - obj.y);

		if (difx >=0 && difx <tamano && dify >=0 && dify <tamano )
		{
			return true;
		}
		else
		{
			return false; 
		}
	}
}

class cola extends objeto {
	constructor(x,y) {
		super();
		this.x = x;
		this.y = y;
	}

	dibujar (contexto)
	{
		contexto.fillStyle = "0000FF";
		contexto.fillRect(this.x, this.y, this.tamano, this.tamano);
	}

	setxy (x, y)
	{
		this.x = x;
		this.y = y;
	}

}

//objetos del juego
var cabeza = new cola (20,20);
var ejex = true;
var ejey = true;
var xdir = 0;
var ydir = 0;

function movimiento () {
	var newx = cabeza.x + xdir;
	var newy = cabeza.y + ydir;
	cabeza.setxy(newx, newy);
}



function dibujando () {
	var d= document.getElementById("juego");
	var lienzo= d.getContext("2d");

	lienzo.clearRect(0, 0, juego.width, juego.height);
	cabeza.dibujar(lienzo);
	
}

function main () {
	dibujando();
	movimiento();
}

setInterval ("main()", velocidad);



