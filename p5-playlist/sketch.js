/* eslint-disable */
// noinspection JSUnresolvedReference

// noinspection JSUnresolvedReference

let circleX = 100;
let unit = 5;
let r, g, b;
let color = 0;

function setup() {
  createCanvas(windowWidth, 400);
  background(120, 250, 0);
}

function mousePressed() {
  // background(120, 250, 0);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  color = map(mouseX, 0, width, 0, 255);
  // color = mouseX;
  background(color);

  noStroke();
  fill(125, 25, 62);

  if (mouseX % 11 === 0) {
    fill(250, 12, 98);
  }
  ellipse(mouseX, mouseY, 50, 50);
}

/*
 * steps to make variables:
 * 1- declare -> let circleX=null
 * 2- initialize -> circleX=100;
 * 3- use ->
 * */
