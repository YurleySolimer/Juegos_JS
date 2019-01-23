var velocidad = 100;
var tamano = 20;

class objeto {
	constructor () {
		this.tamano = tamano;
	}

	choque(obj) {
		var difx = Math.abs(this.x - obj.x);
		var dify = Math.abs(this.y - obj.y);

		if (difx >=0 && difx <tamano && dify >=0 && dify <tamano) {
			return true;
		}
		
		else{
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
		contexto.fillStyle = "blue";
		contexto.fillRect(this.x, this.y, this.tamano, this.tamano);
	}

	setxy (x, y)
	{
		this.x = x;
		this.y = y;
	}

}

//objetos del juego
var cabeza = new cola (40,40);
var ejex = true;
var ejey = true;
var xdir = 0;
var ydir = 0;

function movimiento () {
	var newx = cabeza.x + xdir;
	var newy = cabeza.y + ydir;
	cabeza.setxy(newx, newy);
}

function controlTeclas (event) {
	var clave = event.keyCode;
	
	if (ejex) {
		if (clave == 38) {
			ydir = -tamano;
			xdir = 0;
			ejex = false;
			ejey = true;
		}
		if (clave == 40) {
			ydir = tamano;
			xdir = 0;
			ejex = false;
			ejey = true;
		}
	}

	if (ejey) {
		if (clave == 37) {
			ydir = 0;
			xdir = -tamano;
			ejex = true;
			ejey = false;
		}
		if (clave == 39) {
			ydir = 0;
			xdir = tamano;
			ejex = true;
			ejey = false;
		}
	}
}

function dibujando () {
	var d = document.getElementById("juego");
	var lienzo = d.getContext("2d");

	lienzo.clearRect(0, 0, juego.width, juego.height);
	cabeza.dibujar(lienzo);
	
}

function main () {
	dibujando();
	movimiento();
}

setInterval ("main()", velocidad);



