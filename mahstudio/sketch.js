/* eslint-disable no-unused-vars,no-undef */
// module aliases
// noinspection JSUnresolvedReference

let Engine = Matter.Engine,
  // Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse;

// create an engine
const imagesSrcList = [
  "./asset/1.png",
  "./asset/2.png",
  "./asset/3.png",
  "./asset/24.png",
  "./asset/25.png",
  "./asset/16.png",
  "./asset/26.png",
  "./asset/7.png",
];

let imagesList = null;
let world;
let engine;
let shape;
let shapeList = [];

function preload() {
  imagesList = imagesSrcList.map((image) => loadImage(image));
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  engine = Engine.create();
  world = engine.world;

  for (let i = 0; i < imagesList.length; i++) {
    shapeList.push(new Shape(innerWidth / 2, innerHeight / 2, 25));
  }
}

function draw() {
  background(244, 215, 71);
  Engine.update(engine);

  for (let i = 0; i < shapeList.length; i++) {
    shapeList[i].show(imagesList[i]);
  }
}
