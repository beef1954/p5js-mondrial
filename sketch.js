function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(20);
  line(50,0,50,400);
  strokeWeight(20);
  line(50,200,300,200);
  strokeWeight(15);
  line(200,0,200,200);
  strokeWeight(5);
  line(300,200,300,400);
  //line(350,0,359,200);
  rectMode(CORNER);
  fill(100,200,100);
  rect(0,0,40,400);
  fill(255,255,255);
  rect(50,190,250,190);
  fill(235,229,52);
  rect(50,0,200,200)
  //fill(235,64,52);
  fill(255,255,255);
  rect(250,0,400,200);
  //fill(52,235,201);
  fill(235,64,52);
  rect(250,200,150,200);
}