var velocidad = 100;
var tamano = 20;

class objeto {
	constructor () {
		this.tamano = tamano;
	}

	choque(obj) {
		var difx = Math.abs(this.x - obj.x);
		var dify = Math.abs(this.y - obj.y);

		if (difx >= 0 && difx < tamano && dify >= 0 && dify < tamano) {
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
		this.siguiente = null;
	}

	dibujar (contexto) {
		if (this.siguiente != null) {
			this.siguiente.dibujar(contexto);
		}

		contexto.fillStyle = "blue";
		contexto.fillRect(this.x, this.y, this.tamano, this.tamano);
	}

	setxy (x, y) {
		if (this.siguiente != null) {
			this.siguiente.setxy (this.x, this.y);
		}

		this.x = x;
		this.y = y;
	}

	agregar () {
		if (this.siguiente == null) {
			this.siguiente = new cola (this.x, this.y);
		}

		else {
			this.siguiente.agregar();
		}
	}

	verSiguiente () {
		this.siguiente;
	}
}

class comida extends objeto {
	constructor () {
		super();
		this.x = this.generar();
		this.y = this.generar();
	}

	generar () {
		var aleatorio = (Math.floor(Math.random() * 59 )) * 10;
		return aleatorio;
	}

	colocar () {
		this.x = this.generar();
		this.y = this.generar();		
	}

	dibujar (contexto) {
		contexto.fillStyle = "red";
		contexto.fillRect (this.x, this.y, this.tamano, this.tamano);
	}
}

//objetos del juego
var cabeza = new cola (40,40);
var coma = new comida ();
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

function finDeJuego () {
	xdir = 0;
	ydir = 0;
	ejey = true;
	ejex = true;
	cabeza = new cola (20,20);
	coma = new comida();

	alert ("GAME OVER");
}

function choquePared () {
	if (cabeza.x  < 0 || cabeza.x > 590 || cabeza.y < 0 || cabeza.y > 590) {
		finDeJuego();
	}
}

function choqueCuerpo () {
	var temp = null;
	try {
		temp = cabeza.verSiguiente().verSiguiente();
	} catch (err) {
		temp = null;
	}

	while (temp != null) {
		if (cabeza.choque(temp)) {
			finDeJuego();
		}

		else {
			temp = temp.verSiguiente();
		}
	}
}

function dibujando () {
	var d = document.getElementById("juego");
	var lienzo = d.getContext("2d");

	lienzo.clearRect(0, 0, juego.width, juego.height);
	cabeza.dibujar(lienzo);
	coma.dibujar (lienzo);
}

function main () {
	choqueCuerpo ();
	choquePared ();
	dibujando ();
	movimiento ();

	if (cabeza.choque (coma)) {
		coma.colocar ();
		cabeza.agregar ();
	}
}

setInterval ("main ()", velocidad);



