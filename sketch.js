let horse;
let gyroIsEnabled = false;

function preload() {
    horse = loadImage("./Assets/HorseInMotion.gif"); 
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    lockGestures();
    // Changed from enableGyroMode to enableGyroTap for better user experience
    enableGyroTap("Touch screen to enable gyroscope");
}

function draw() {
    background(0);

    if (gyroIsEnabled) {
        textSize(28);
        textAlign(CENTER);
        fill(255);
        text("Horse in Motion", width / 2, height / 2 - 300);

        push();
        translate(width / 2, height / 2);

        if (rotationY < 0) {
            scale(-1, 1);
        }

        image(horse, 0, 0);
        pop();
    } else {
        // Show instructions when gyro is not enabled
        textSize(28);
        textAlign(CENTER);
        fill(255);
        text("Touch screen to start", width / 2, height / 2);
    }
}

function onGyroEnabled() {
    gyroIsEnabled = true;
}
