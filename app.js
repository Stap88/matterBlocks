// module aliases
var Engine = Matter.Engine,
  // Render = Matter.Render,
  // Body = Matter.Body,
  World = Matter.World,
  Bodies = Matter.Bodies;

var canvas_h = 400;
var canvas_w = 400;

var engine;
var world;

var boxes = [];

var obstacles = [];

var balls = [];
const ball_radius = 3;
const ball_limit = 100;

var ground;

// Setup before Main Loop
function setup() {
  createCanvas(canvas_w, canvas_h);
  physicsSetup();
}

function physicsSetup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, height, width, 100, options);
  World.add(world, ground);
  obstacles.push(new Box(mouseX, mouseY, 20, 20));
}

function drawGround() {
  noStroke(); // No outline drawn
  fill(170); // Fill color (R, G, B), single = Grayscale int value
  rectMode(CENTER); // Draw start point on rectangle
  rect(ground.position.x, ground.position.y, width, 100); // (x, y, w, h) - More options online
}

function drawObstacles(x_pos, y_pos) {
  noStroke();
  fill(170);
  rectMode(CENTER);
  for (let obstacle of obstacles) {
    rect(200, 200, 20, 20)
  }
}

function removeBody(body_array, world_body_array ) {
  // Removes canvas drawing and physics body from world to free memory
  z = body_array.shift();
  Matter.Composite.remove(world, world_body_array);
  removeBody(world_body_array);
  delete z;
}

function mouseDragged() {
  if (balls.length > ball_limit) {
    removeBody(balls, world.bodies[1]);
  } else {
  balls.push(new Ball(mouseX, mouseY, ball_radius));
  }
}

// function mousePressed() {
//   if (balls.length > ball_limit) {
//     removeBody(balls, world.bodies[1]);
//   } else {
//   balls.push(new Ball(mouseX, mouseY, ball_radius));
//   }
// } 

// function mouseMoved() {
//   if (balls.length > ball_limit) {
//     removeBody(balls, world.bodies[1]);
//   } else {
//   balls.push(new Ball(mouseX, mouseY, ball_radius));
//   }
// } 

// Main Loop
function draw() {
  background(51);
  for (var i = 0; i < balls.length; i++) {
    balls[i].show();
  }
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].show();
  }
  drawGround();
}
