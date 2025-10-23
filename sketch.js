let horse;

function preload() {
    horse = loadImage("Assets/HorseInMotion.gif");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    lockGestures();
    enableGyroTap("Touch to start");
}

function draw() {
    background(0);
    
    if (gyroIsEnabled) {
        push();
        translate(width/2, height/2);
        if (rotationY < 0) scale(-1, 1);
        image(horse, 0, 0);
        pop();
    }
}
