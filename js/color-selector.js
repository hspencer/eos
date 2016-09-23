var cp;
var dark = true;

function setup() {
	var colorCanvas = createCanvas(200, 200);
  colorCanvas.parent('colorpicker');
  adjustCanvasSize();
  cp = new ColorSelector(width/2);
}

fucntion draw(){
  cp.draw();
}

function ColorSelector(var r){
  colorMode(HSB, 100, 100, 100, 100);
  noStroke();
  beginShape(TRIANGLE_STRIP);
  for (var t = 0; t <= TWO_PI + tinc; t += tinc) {
    var h = map(t, 0, TWO_PI, 0, 100);
    fill(h, 100, 100, 100);
    var x = width/2 + cos(t) * r;
    var y = height/2 + sin(t) * r;
    vertex(x, y);
    if(dark){fill(#000000);}else{ 
    fill(#FFFFFF);}
    vertex(width/2, height/2);
  }
  endShape();
}


function adjustCanvasSize(){
  	var w = document.getElementById('colorpicker').offsetWidth;
	if(w != null || w != 0){
 		resizeCanvas(w, w);
 		cp.r = w/2;
 	}	
}

function windowResized(){
  adjustCanvasSize();
}