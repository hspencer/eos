var rx = 0; 
var ry = 0;
var dirX = 0;
var dirY = 0;
var sc = 20;
new p5.RendererGL()

function setup() {
	spaceCanvas = createCanvas(200, 200, WEBGL);
	spaceCanvas.parent('space');
  	adjustCanvasSize();
}

function draw() {
	stroke(0);
	fill(206, 186, 0);
	push();

	// mouse
	if(mouseIsPressed  && mouseX > 0 && mouseX < width &&
	   mouseY > 0 && mouseY < height){
	   	
	   	rx = mouseY / height * PI;
		ry = mouseX / width * PI;	

		dirX = (mouseX / width - 0.5) *2;
  		dirY = (mouseY / height - 0.5) *(-2);
	}

	// touch
	if(touchIsDown && touchX > 0 && touchX < width &&
	   touchY > 0 && touchY < height){
	   	
	   	rx = touchY / height * PI;
		ry = touchX / width * PI;	

		dirX = (touchX / width - 0.5) *2;
  		dirY = (touchY / height - 0.5) *(-2);	
	}

	rotateX(rx);
	rotateY(ry);

	directionalLight(206, 186, 10, dirX, dirY, 0.25);

	wireBox(document.getElementById('sx').value * sc, 
		document.getElementById('sy').value * sc,
		document.getElementById('sz').value * sc);
	
	pop();
}

function wireBox(xdim, ydim, zdim){
	var t = 2; // beam thickness
	
	// top left - along in z
	
	push();
		translate(-xdim/2, -ydim/2, 0);
		box(t, t, zdim);
	pop();


	// top right - along in z

	push();
		translate(xdim/2, -ydim/2, 0);
		box(t, t, zdim);
	pop();

	// floor
	
	push();
		translate(0, ydim/2, 0);
		box(xdim, t, zdim);
	pop();

	// top front

	push();
		translate(0, -ydim/2, zdim/2);
		box(xdim, t, t);
	pop();

	// top back

	push();
		translate(0, -ydim/2, -zdim/2);
		box(xdim, t, t);
	pop();

	// poles

	push();
		translate(-xdim/2, 0, -zdim/2);
		box(t, ydim, t);
	pop();

	push();
		translate(xdim/2, 0, -zdim/2);
		box(t, ydim, t);
	pop();

	push();
		translate(-xdim/2, 0, zdim/2);
		box(t, ydim, t);
	pop();

	push();
		translate(xdim/2, 0, zdim/2);
		box(t, ydim, t);
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