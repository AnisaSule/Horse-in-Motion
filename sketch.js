let horse;
let devicerotationY = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    lockGestures();
    enableGyroTap("Touch your device to see the horse in motion");
    imageMode(CENTER);
}

function preload() {
    horse = loadImage("Assets/HorseInMotion.gif");
}

function draw() {
    background(0);

    // Only draw if gyro is enabled
    if (gyroIsEnabled) {
        // Update devicerotationY from rotation event
        devicerotationY = rotationY;
        
        // Draw title text
        textSize(28);
        textAlign(CENTER);
        text("Horse in Motion", width/2, height/2 - 100);

        push();
        translate(width/2, height/2);
        
        // Mirror horse based on device rotation
        if (devicerotationY < 0) {
            scale(-1, 1);
        }
        
        // Draw the horse image
        image(horse, 0, 0);
        pop();
    }
}

// Add event handler for device rotation
window.addEventListener('deviceorientation', function(event) {
    devicerotationY = event.beta;
});


