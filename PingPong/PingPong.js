var bucle;
var velocidad = 5;
var canvas = document.getElementById('canvas');
var areaW = canvas.width;
var areaH = canvas.height;
var ctx = canvas.getContext ("2d");
var puntosj1 = 0;
var puntosj2 = 0; 

function dibujar () {
	ctx.clearRect (0, 0, areaW, areaH);

}

function frame () {
	requestAnimationFrame(frame);

}

function iniciar () {
	frame ();
}