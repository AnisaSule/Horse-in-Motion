let horse;

function preload() {
  horse = loadImage("Assets/HorseInMotion.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  lockGestures();

  // Prompt user immediately to enable gyroscope
  enableGyroTap("Tap to enable motion access");
}

function draw() {
  background(255);
  textSize(28);
  textAlign(CENTER);
  fill(0);
  text("Horse in Motion", width / 2, 50);

  if (rotationY !== undefined) {
    push();
    translate(width / 2, height / 2);
	
    if (rotationY < 0) scale(-1, 1);
    image(horse, 0, 0);
    pop();
  
  }
}
