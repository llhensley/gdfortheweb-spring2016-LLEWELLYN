var pepe;
var img;
var y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pepe = loadImage("pepe.png");
}

function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  image(pepe, mouseX, mouseY, 50, 50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}