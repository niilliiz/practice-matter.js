/* eslint-disable no-unused-vars,no-undef */
// module aliases
// noinspection JSUnresolvedReference

function Boundary(x, y, w, h, a) {
  let options = {
    friction: 0.3,
    restitution: 0.6,
    angle: a,
    isStatic: true,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;

  this.h = h;
  Composite.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    noStroke();
    fill(0);
    rect(0, 0, this.w, this.h);
    pop();
  };
}
