/*Made bubbles float in order to bring in the image of the sunflower
Put the bubbles in an array so that I didn't have to make 100 differet
circles and repeat the code every time. I set the circles randomly so that I also did not have
to specify each location of each circle in the file.

*/




let bubbles = [];
let Sunflower;



function preload() {
  Sunflower = loadImage('Sunflower.png')

}

function setup() {
  createCanvas(1920, 1080);
  background(0);
  //Making sure that the one image I loaded copies itself randomly 50 times
  //without having to repeat the same kind of code 50 times
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(120, 80);
    bubbles[i] = new Bubble(x, y, r);
  }
}
//using the mousePressed function so the user can make more sunflowers if they would like
function mousePressed() {
  let r = random(150, 80);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}


function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}
//Using class function so that the sunflowers move within the given space
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}
//Move function to make the sunflowers move
  move() {
    this.x = this.x + random(-0.3, 0.3);
    this.y = this.y + random(-0.3, 0.3);
  }
//Show function inorder to get the images and the text to show
  show() {
    image(Sunflower, this.x, this.y, this.r, this.r);
    fill(0);
    textSize(100);
    text('Be patient, nothing in nature', 200, 280);
    text('blooms all year', 400, 480);
    //stroke(255);
    //strokeWeight(4);
    //fill(100);
    //ellipse(this.x, this.y, this.r * 2);
  }
}
