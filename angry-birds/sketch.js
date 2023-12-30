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
} = Matter;

let world;
let engine;

let ground;
let boxes = [];
let bird;
let mouseConstraint;

function setup() {
  const mouseCanvas = createCanvas(600, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height - 10, width, 20);
  bird = new Bird(50, 300, 25);
  for (let i = 0; i < 3; i++) {
    boxes.push(new Box(450, 300, 50, 75));
  }

  const mouse = Mouse.create(mouseCanvas.elt);

  const mouseOptions = {
    mouse: mouse,
  };

  mouseConstraint = MouseConstraint.create(engine, mouseOptions);
  Composite.add(world, mouseConstraint);
}

function draw() {
  background(0);
  Engine.update(engine);

  ground.show();
  box.show();
  bird.show();

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
}
