var someText = "OMG TEXT";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 2);
  
  if (frameCount % 5 == 0) {  //runs the code in this block once every ten frames...
    textSize(50);
    textFont("LarishNeueSemibold-Regular");
    fill(252, 7, 11);
    stroke(255, 255, 255);
    strokeWeight(10);
    text("After Viewing Videos, Family Urges Charlotte to Release Them", mouseX,mouseY, windowWidth, windowHeight);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}