function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill(63, 191, 191, 50);
  } else {
    fill(191, 191, 63, 75);
  }
    ellipse(mouseX, mouseY, mouseX, mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}