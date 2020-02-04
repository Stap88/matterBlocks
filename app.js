// module aliases
var Engine = Matter.Engine,
  // Render = Matter.Render,
  // Body = Matter.Body,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;

// var boxes = [];
var balls = [];

var ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, height, width, 100, options);
  // Body.setStatic(ground, true);
  World.add(world, ground);
}



function mouseDragged() {
  balls.push(new Ball(mouseX, mouseY, 1));
} 



function draw() {
  background(51);
  for (var i = 0; i < balls.length; i++) {
    balls[i].show();
    if (balls.length > 150) {
      z = balls.shift();
      delete z;
    } 
  }
  noStroke(255);
  fill(170);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 100);

}

// BOXES - FOR REFERENCE

// function mousePressed() {
//   boxes.push(new Box(mouseX, mouseY, random(10, 40) , random(10, 40)));
// } 

// function draw() {
//   background(51);
//   for (var i = 0; i < boxes.length; i++) {
//     boxes[i].show();
//   }
//   noStroke(255);
//   fill(170);
//   rectMode(CENTER);
//   rect(ground.position.x, ground.position.y, width, 100);