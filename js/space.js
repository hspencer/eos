var rx = 0; 
var ry = 0;


function setup() {
	spaceCanvas = createCanvas(200, 200, WEBGL);
	spaceCanvas.parent('space');
  	adjustCanvasSize();
}

function draw() {
	stroke(0);
	noFill();
	
	push();
	scale(20);

	if(mouseIsPressed &&mouseX > 0 && mouseX < width &&
	   mouseY > 0 && mouseY < height){
	   	rx = mouseY/height;
		ry = mouseX/width;	
	}

	rotateX(rx);
	rotateY(ry);

	box(document.getElementById('sx').value, 
		document.getElementById('sy').value,
		document.getElementById('sz').value);
	pop();
}

function adjustCanvasSize(){
  	var w = document.getElementById('space').offsetWidth;
	if(w != null || w != 0){
 		resizeCanvas(w, w);
 	}	
}

function windowResized(){
  adjustCanvasSize();
}