function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255, 23, 245);
	if (mouseIsPressed){
		fill(0);		
		
	} else {
		noFill(255);
	}
	
	
	beginShape();
	vertex(0, 400);
	vertex(201, 80);
	vertex(180, 312);
	endShape(CLOSE)
	
	beginShape();
	vertex(298, 170)
	vertex(363, 25)
	vertex(444, 375)
	endShape(CLOSE)
		
		beginShape();
	vertex(30, 275);
	vertex(488, 96);
	vertex(242, 328);
	endShape(CLOSE)
		
		beginShape();
	vertex(80, 470);
	vertex(488, 380);
	vertex(450, 470);
	endShape(CLOSE)
	
	
}

