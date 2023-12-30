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
let particles=[];
let world;
let boundaries=[]

function setup() {
    createCanvas(400, 400);
    engine=Engine.create();
    world=engine.world
    // Engine.run(engine);
    boundaries.push(new Boundary(150,height,width,50,0.3))
}


// function mouseDragged(){
//     particles.push(new Circle(mouseX,mouseY,random(5,10)))
// }


function draw() {
    background(51);
    particles.push(new Particle(300,50,random(5,10)))
    Engine.update(engine)

    for(let i=0;i<particles.length;i++){
        particles[i].show()

        if(particles[i].isOffScreen()){
            particles[i].removeFromWorld()
            particles.splice(i,1)
            i--;
        }
    }

    for(let i=0;i<boundaries.length;i++){
        boundaries[i].show()
    }
}