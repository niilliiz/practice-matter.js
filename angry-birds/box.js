// noinspection JSUnresolvedReference

class Box {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;

    this.w = w;
    this.h = h;
    this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h);
    Matter.Composite.add(world, this.body);
  }

  show() {
    const position = this.body.position;
    const angle = this.body.angle;

    push();
    translate(position.x, position.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
