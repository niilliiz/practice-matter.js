// noinspection JSUnresolvedReference

let {
  Engine,
  Render,
  Runner,
  Bodies,
  Composite,
  Constraint,
  MouseConstraint,
  Mouse,
  World,
} = Matter;

let world;
let engine;

let ground;
let boxes = [];
let bird;
let mouseConstraint;
let slingShot;

let dotImg;
let boxImg;
let skyBg;
function preload() {
  dotImg = loadImage("./images/dot.png");
  boxImg = loadImage("./images/equals.png");
  // dotImg=loadImage('./images/dot.png')
}

function setup() {
  const mouseCanvas = createCanvas(600, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height - 10, width, 20);
  bird = new Bird(150, 300, 25);

  for (let i = 0; i < 3; i++) {
    boxes.push(new Box(450, 300 - i * 75, 100, 100));
  }

  const mouse = Mouse.create(mouseCanvas.elt);

  const mouseOptions = {
    mouse: mouse,
  };

  mouse.pixelRatio = pixelDensity();
  mouseConstraint = MouseConstraint.create(engine, mouseOptions);

  slingShot = new SlingShot(250, 300, bird.body);

  Composite.add(world, mouseConstraint);
}

function keyPressed() {
  if (key === " ") {
    World.remove(world, bird.body);
    bird = new Bird(150, 300, 25);
    slingShot.attach(bird.body);
  }
}

function mouseReleased() {
  setTimeout(() => {
    slingShot.fly();
  }, 100);
}

function draw() {
  background(0);
  Engine.update(engine);

  ground.show();
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }

  slingShot.show();
  bird.show();
}

//https://editor.p5js.org/codingtrain/sketches/UOR4nIcNS
