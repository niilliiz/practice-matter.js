// noinspection JSUnresolvedReference

class Box {
  constructor(x, y, w, h) {
    const option = {
      restitution: 0.5,
    };
    this.body = Matter.Bodies.rectangle(x, y, w, h, option);
    Matter.Composite.add(world, this.body);

    this.w = w;
    this.h = h;
  }

  show() {
    const position = this.body.position;
    const angle = this.body.angle;

    push();
    translate(position.x, position.y);
    rotate(angle);
    imageMode(CENTER);
    image(boxImg, 0, 0, this.w, this.h);
    pop();
  }
}
