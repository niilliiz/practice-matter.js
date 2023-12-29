/* eslint-disable no-unused-vars,no-undef */
// module aliases
// noinspection JSUnresolvedReference


let Engine = Matter.Engine,
  // Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

// create an engine
let engine;
let boxes=[];
let world;
let ground;

function setup() {
    createCanvas(400, 400);
    engine=Engine.create();
    world=engine.world
    Engine.run(engine);
    ground=new Boundary(200,height,width,100)
    Composite.add(world,[ground])
}


function mousePressed(){
    boxes.push(new Box(mouseX,mouseY,random(10,40),random(10,40)))
}

function draw() {
    background(51);
    for(let i=0;i<boxes.length;i++){
        boxes[i].show()
    }
    ground.show()
}