/* eslint-disable */
// noinspection JSUnresolvedReference

// noinspection JSUnresolvedReference

function setup() {
  createCanvas(400, 400);
  print("hello");
}

function draw() {
  background(120, 250, 0);

  // if (mouseIsPressed) {
  //   fill(120, 5, 159);
  // } else {
  //   fill(11, 84, 107);
  // }

  const c = color(255, 204, 0);
  fill(c);
  ellipse(100, 100, 80, 80);
  noStroke();
  rect(200, 100, 25, 75);

  strokeWeight(8);
  stroke(12, 159, 75);
  line(250, 250, 80, 80);
}
