function Ball(x, y, radius) {
  var options = {
    friction: 0.3,
    restitution: 1
  }

  this.body = Bodies.circle(x, y, radius, options);
  this.radius = radius;
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    strokeWeight(1);
    noStroke();
    // stroke(random(0, 255), random(0, 255), random(0, 255)); // Rainbow
    fill(random(0, 255), random(0, 255), random(0, 255)); // Rainbow 
    // fill(random(0, 255), 0, random(0, 255)); // Purple Shades
    // fill(random(0, 255), 0, 0); // Red
    circle(0, 0, (this.radius * 2))
    pop();
  }
}