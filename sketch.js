let horse, gyroIsEnabled = false;

function preload() {
  horse = loadImage("./Assets/HorseInMotion.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  enableGyroTap("Touch screen to enable gyroscope");
  lockGestures();
}

function draw() {
  background(0);
  textSize(28); textAlign(CENTER); fill(255);
  text("Horse In Motion", width / 2, 50);

  if (gyroIsEnabled) {
    push();
    translate(width / 2, height / 2); // Center the image
    if (rotationY < 0) scale(-1, 1);  // Flip if tilting left
    image(horse, 0, 0);               // Draw at center
    pop();
  } else {
    text("Touch screen to start", width / 2, height / 2);
  }
}


function onGyroEnabled() {
  gyroIsEnabled = true;
}
