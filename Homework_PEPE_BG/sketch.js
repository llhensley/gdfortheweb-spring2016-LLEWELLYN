var pepe;
var img;

function setup() {
  createCanvas(1800, 969);
  img = loadImage("Pepe_Trump_lg.jpg"); 
  pepe = loadImage("pepe.png");
}

function draw() {
  imageMode(CENTER);
  image(img, 600, 400);
  image(pepe, mouseX, mouseY, 200, 200);
}