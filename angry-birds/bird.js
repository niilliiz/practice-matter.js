// noinspection JSUnresolvedReference

class Bird {
  constructor(x, y, r) {
    this.body = Matter.Bodies.circle(x, y, r);
    Matter.Composite.add(world, this.body);

    this.r = r;
  }

  show() {
    const position = this.body.position;
    const angle = this.body.angle;

    push();
    translate(position.x, position.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    circle(0, 0, this.r);
    pop();
  }
}
