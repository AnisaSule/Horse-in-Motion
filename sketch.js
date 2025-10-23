

let horse;

function preload() {
    horse = loadImage("Assets/HorseInMotion.gif"); 
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
}

function draw() {
    background(0);

    if (rotationY !== undefined) {
        textSize(28);
        textAlign(CENTER);
        fill(255);
        text("Horse in Motion", width / 2, height / 2 - 100);

        push();
        translate(width / 2, height / 2);

        if (rotationY < 0) {
            scale(-1, 1);
        }

        image(horse, 0, 0);
        pop();
    }
}
