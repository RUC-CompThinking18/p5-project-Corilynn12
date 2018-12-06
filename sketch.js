var value = 0
function setup() {
  createCanvas(1920 , 1080);
  img = loadImage("Sunflower.png");
}

function draw() {
  background(100, 86, 35)
  image(img, 0, 0);
  fill(value)
}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
