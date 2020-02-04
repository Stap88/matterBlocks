function Ball(x, y, radius) {
  var options = {
    friction: 0.3,
    restitution: 0.6
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
    stroke(170);
    fill(127);
    circle(0, 0, (this.radius * 2))
  }
}