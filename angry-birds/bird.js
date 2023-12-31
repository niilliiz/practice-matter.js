// noinspection JSUnresolvedReference

class Bird {
  constructor(x, y, r) {
    const option = {
      restitution: 0.5,
    };
    this.body = Matter.Bodies.circle(x, y, r, option);
    Matter.Body.setMass(this.body, this.body.mass * 4);
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
    imageMode(CENTER);
    image(dotImg, 0, 0, this.r * 2, this.r * 2);
    pop();
  }
}
