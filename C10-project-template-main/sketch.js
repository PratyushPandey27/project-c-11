var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  // create ship
  ship=createSprite(50,160,300,100);
  // adding water
  water=createSprite(200,200,400,400);
  water.addAnimation("water"water_running);
}

function draw() {
  background(r,g,b);
  drawSprites
}

