//simple math with variables
var xPosition = 0;
var r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(r, g, b);
  xPosition = xPosition + 10;
  rect(xPosition,10,100,100);
  rect(xPosition,120,100,100);
  rect(xPosition,230,100,100);
  rect(xPosition,340,100,100);
  rect(xPosition,450,100,100);
  rect(xPosition,560,100,100);
  rect(xPosition,670,100,100);
  rect(xPosition,780,100,100);
  rect(xPosition,890,100,100);
}

function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}