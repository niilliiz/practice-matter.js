/* eslint-disable */
// noinspection JSUnresolvedReference

// noinspection JSUnresolvedReference

let r, g, b;
let color = 0;
let unit = 2;

let radius = 25;
let circleX = 0;

function setup() {
  createCanvas(400, 400);
  background(120, 250, 0);
  circleX = random(radius, width - radius);
}

function mousePressed() {
  // background(120, 250, 0);
}

function draw() {
  background(3);

  noStroke();
  fill(125, 25, 62);

  ellipse(circleX, 200, radius * 2, radius * 2);
  if (circleX - radius <= 0 || circleX + radius >= width) {
    unit = -unit;
  }

  circleX += unit;
}

/*
 * steps to make variables:
 * 1- declare -> let circleX=null
 * 2- initialize -> circleX=100;
 * 3- use ->
 * */
