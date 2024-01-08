/* eslint-disable no-undef,no-unused-vars */
// noinspection JSUnresolvedReference

function Shape(x, y, r) {
  const options = {};
  this.body = Matter.Bodies.circle(x, y, r, options);
  Matter.Body.setMass(this.body, this.body * 1);
  Matter.Composite.add(world, this.body);

  this.r = r;

  this.show = function (img) {
    const position = this.body.position;
    const angle = this.body.angle;

    push();
    translate(position.x, position.y);
    rotate(angle);
    imageMode(CENTER);
    image(img, 0, 0, this.r * 2, this.r * 2);
    pop();
  };
}
