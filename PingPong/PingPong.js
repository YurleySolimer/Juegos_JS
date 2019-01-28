var bucle;
var velocidad = 5;
var canvas = document.getElementById('canvas');
var areaW = canvas.width;
var areaH = canvas.height;
var ctx = canvas.getContext ("2d");
var puntosj1 = 0;
var puntosj2 = 0; 

class Base {
	choque (obj) {
		if (this.fondo < obj.y || this.y > obj.fondo || this.derecha < obj.x || this.x > obj.derecha) {
			return false;
		}

		return {
			return true;
		}
	}
}


function dibujar () {
	ctx.clearRect (0, 0, areaW, areaH);

}

function frame () {
	bucle = requestAnimationFrame(frame);

}

function iniciar () {
	frame ();
}