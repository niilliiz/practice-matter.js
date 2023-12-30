/* eslint-disable no-unused-vars,no-undef */
// module aliases
// noinspection JSUnresolvedReference


let Engine = Matter.Engine,
  // Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Constraint=Matter.Constraint;

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
    boundaries.push(new Boundary(200,height,width,50,0))

    let prevP=null

    for(let x=200;x<400;x+=20){

        let fixed=false

        let p=new Particle(x,50,5,Boolean(!prevP))

       if(prevP){
           let constraintOptions={
               bodyA:p.body,
               bodyB:prevP.body,
               length:20,
               stiffness:0.4
           }

           let constraint=Constraint.create(constraintOptions)

           Composite.add(world,constraint)
       }

        prevP=p;
        particles.push(p)
    }
    //
    // let p2=new Particle(200,100,10)
    //

}


// function mouseDragged(){
//     particles.push(new Circle(mouseX,mouseY,random(5,10)))
// }


function draw() {
    background(51);
    Engine.update(engine)

    for(let i=0;i<particles.length;i++){
        particles[i].show()
    }

    for(let i=0;i<boundaries.length;i++){
        boundaries[i].show()
    }

    // line(particles[0].body.position.x,particles[0].body.position.y,particles[1].body.position.x,particles[1].body.position.y)
}