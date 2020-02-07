// module aliases
var Engine = Matter.Engine,
  // Render = Matter.Render,
  // Body = Matter.Body,
  World = Matter.World,
  Bodies = Matter.Bodies;

var canvas_h = window.innerHeight - 25;
var canvas_w = window.innerWidth - 25;

var engine;
var world;

var boxes = [];

var obstacles = [];
var obstacle_count = 50;

var balls = [];
const ball_radius = 5;
const ball_limit = 100;

// var ground;

// Setup before Main Loop
function setup() {
  createCanvas(canvas_w, canvas_h);
  physicsSetup();
  createObstacles();
}

function physicsSetup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  var options = {
    isStatic: true
  }
  // ground = Bodies.rectangle(200, height, canvas_w, 100, options);
  // World.add(world, ground);
  
}

// function drawGround() {
//   noStroke(); // No outline drawn
//   fill(170); // Fill color (R, G, B), single = Grayscale int value
//   rectMode(CENTER); // Draw start point on rectangle
//   rect(ground.position.x, ground.position.y, canvas_w, 100); // (x, y, w, h) - More options online
// }


function createObstacles() {
  var count = 0;
  var quarter_h = round(canvas_h / 4);

  do {
    rand_x_pos = random(0, canvas_w);
    rand_y_pos = random((canvas_h - quarter_h), (canvas_h - (quarter_h * 3)));
    obst_w = 50;
    obst_h = 20;

    obstacles.push(new Box(rand_x_pos, rand_y_pos, obst_w, obst_h));
    drawObstacle(rand_x_pos, rand_y_pos, obst_w, obst_h);
    
    count += 1;
  } while (count != obstacle_count);
}

function drawObstacle(x_pos, y_pos, o_width, o_height) {
  noStroke();
  fill(170);
  rectMode(CENTER);
  rect(x_pos, y_pos, o_width, o_height);
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
    removeBody(balls, world.bodies[obstacle_count]);
  } else {
  balls.push(new Ball(mouseX, mouseY, ball_radius));
  }
}

// function windowResizeCheck() {
//   // Redraws canvas and centers balls on window resize
//   if (canvas_w != (window.innerWidth - 25) || canvas_h != (window.innerHeight - 25)) {
//     canvas_w = window.innerWidth - 25;
//     canvas_h = window.innerHeight - 25;
//     createCanvas(canvas_w, canvas_h);
//   }
// }

// function centerBalls(){
//   // Center balls within x, y bounds
//   for (let ball of ball_list) {
//     ball.x = random(30, (w - 30));
//     ball.y = random(30, (h - 30));
//   }
// }

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
  // windowResizeCheck();
  background(51);
  for (var i = 0; i < balls.length; i++) {
    balls[i].show();
  }
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].show();
  }
  // drawGround();
}

