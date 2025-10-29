let horse;
let mic;
let lines = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  lockGestures();
  enableGyroTap("Tap to enable motion access");

  // Microphone input
  mic = new p5.AudioIn();
  mic.start();

  // Load animated GIF as HTML element
  horse = createImg("Assets/HorseInMotion.gif");
  horse.size(300, 300);
  horse.style('position', 'absolute');
  horse.style('pointer-events', 'none');
  horse.style('z-index', '10');
  updateHorsePosition();
}

function draw() {
  let vol = mic.getLevel();
  let amplified = constrain(vol * 1, 0, 1); // Boost sensitivity

  // Background color: pale pink to intense red
  let redIntensity = map(amplified, 0, 1, 200, 255);
  let gb = map(amplified, 0, 1, 200, 0);
  background(redIntensity, gb, gb);

  // Title text
  textSize(28);
  textAlign(CENTER);
  fill(0);
  stroke(0);
  text("Horse in Motion", width / 2, 50);

  // Flip horse image based on gyroscope
  if (rotationY !== undefined) {
    if (rotationY < 0) {
      horse.style('transform', 'scaleX(-1)');
    } else {
      horse.style('transform', 'scaleX(1)');
    }
  }

  // Update horse position in case of resize
  updateHorsePosition();

  //  shooting star lines based on volume
  let density = int(map(amplified, 0, 1, 1, 10));
  for (let i = 0; i < density; i++) {
    lines.push(new Line(amplified));
  }

  // Update and draw lines
  for (let i = lines.length - 1; i >= 0; i--) {
    lines[i].update();
    lines[i].display();
    if (lines[i].isOffScreen()) {
      lines.splice(i, 1);
    }
  }
}

function updateHorsePosition() {
  if (horse) {
    horse.position(width / 2 - 150, height / 2 - 150);
  }
}

class Line {
  constructor(volume) {
    this.x = width / 2;
    this.y = height / 2;
    this.angle = random(TWO_PI);
    this.length = random(10, 30); // Shorter lines
    this.speed = map(volume, 0, 1, 2, 10); // Faster with louder sound
  }

  update() {
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;
  }

  display() {
    stroke(255);
    strokeWeight(2);
    line(this.x, this.y, this.x - cos(this.angle) * this.length, this.y - sin(this.angle) * this.length);
  }

  isOffScreen() {
    return (
      this.x < -50 || this.x > width + 50 ||
      this.y < -50 || this.y > height + 50
    );
  }
}
