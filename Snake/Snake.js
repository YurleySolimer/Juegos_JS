alert("FFFFFFFF");
var velocidad = 100;
var tamaño = 40;



function dibujando () {
	var d= document.getElementById("juego");
	var lienzo= d.getContext("2d");

	lienzo.clearRect(0, 0, juego.width, juego.height);
	lienzo.fillRect(10, 10, 100, 100);
}

function main () {
	dibujando();
}

setInterval ("main()", velocidad);



