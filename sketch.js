let horse;
let devicerotationY = 0;

function setup() 
{
	createCanvas(windowWidth,windowHeight);
	lockGestures();
	enableGyroTap("Touch your device to see the horse in motion")
	imageMode(CENTER);
}

function preload(){
 horse = loadImage (Assets/HorseInMotion.gif)
}

function draw()
{
Background (0);

if (gyroIsEnabled) {
textSize (28);
text ("horse in Motion", width/2, height/2 - 100);
}

Push ();
translate (width/2, height/2);

if (devicerotationY < 0) {
 scale(-1, 1); 
 }
        
// Draw the horse image
image(horse, 0, 0);
pop(); 
    }


