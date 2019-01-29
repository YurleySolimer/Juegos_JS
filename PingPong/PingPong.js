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

class Bola extends Base {
	constructor () {
		super ();
		this.t = 25;
		this.x = Math.floor (Math.random() * (areaW - this.t));
		this.x = Math.floor (Math.random() * (areaH - this.t));
		this.xdir = velocidad;
		this.ydir = velocidad;
	}

	choqueV () {
		if (this.y <= 0 || this.y >= areaH - this.t) {
			this.ydir = -this.ydir; 
		}
	}

	choqueH () {
		if (this.xdir <= 0) {
			this.xdir = -this.xdir;
			puntosj2 ++;
		}

		if (this.x >= (areaW - this.t)) {
			this.xdir = -this.xdir;
			puntosj1 ++;
		}

	}

	mover () {
		this.x += this.xdir;
		this.y += this.ydir;
		this.choqueV ();
		this.choqueH ();
	}

	dibujar () {
		ctx.fillRect (this.x, this.y, this.t, this.t);
	}
}

//Objetos

var bola = new Bola ();


function dibujar () {
	ctx.clearRect (0, 0, areaW, areaH);
	bola.dibujar ();

}

function frame () {
	dibujar ();
	bola.mover ();
	bucle = requestAnimationFrame(frame);
}

function iniciar () {
	var modal = document.getElementById ("modal");
	modal.style.display = "none";
	frame ();
}