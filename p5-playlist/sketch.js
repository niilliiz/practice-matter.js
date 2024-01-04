/* eslint-disable */
// noinspection JSUnresolvedReference

// noinspection JSUnresolvedReference

let circleX = 100;
let unit = 5;
let r, g, b;

function setup() {
  createCanvas(400, 400);
  background(120, 250, 0);
  r = random(255);
  g = random(255);
  b = random(255);
}

function mousePressed() {
  // background(120, 250, 0);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  noStroke();
  fill(r, g, b, 0.5);
  ellipse(mouseX, mouseY, 50, 50);
}

/*
 * steps to make variables:
 * 1- declare -> let circleX=null
 * 2- initialize -> circleX=100;
 * 3- use ->
 * */
