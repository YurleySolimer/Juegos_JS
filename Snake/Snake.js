alert("FFFFFFFF");
var velocidad = 100;
var tamano = 40;

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

}

var cabeza = new cola (20,20);


function dibujando () {
	var d= document.getElementById("juego");
	var lienzo= d.getContext("2d");

	lienzo.clearRect(0, 0, juego.width, juego.height);
	cabeza.dibujar(lienzo);
	
}

function main () {
	dibujando();
}

setInterval ("main()", velocidad);



