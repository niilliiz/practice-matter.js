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
let circles=[];
let world;
let ground;
let boundaries=[]

function setup() {
    createCanvas(400, 400);
    engine=Engine.create();
    world=engine.world
    // Engine.run(engine);
    boundaries.push(new Boundary(150,height,width,50,0.3))
    boundaries.push(new Boundary(250,height/2,width*0.6,50,-0.3))
}


// function mouseDragged(){
//     circles.push(new Circle(mouseX,mouseY,random(5,10)))
// }


function draw() {
    background(51);
    circles.push(new Circle(300,50,random(5,10)))
    Engine.update(engine)

    for(let i=0;i<circles.length;i++){
        circles[i].show()

        if(circles[i].isOffScreen()){
            circles[i].removeFromWorld()
            circles.splice(i,1)
            i--;
        }
    }

    for(let i=0;i<boundaries.length;i++){
        boundaries[i].show()
    }


    console.log(circles.length,world.bodies.length);
}