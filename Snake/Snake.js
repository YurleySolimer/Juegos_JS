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


function dibujando () {
	var d= document.getElementById("juego");
	var lienzo= d.getContext("2d");

	lienzo.clearRect(0, 0, juego.width, juego.height);
	
}

function main () {
	dibujando();
}

setInterval ("main()", velocidad);


