function Particle(x,y,r){
  let options={
    friction:0.1,
    restitution:0.6,
  }
  this.body=Bodies.circle(x,y,r,options);
  this.r=r;
  Composite.add(world,this.body)



  this.isOffScreen=function(){
    let pos=this.body.position;
    return pos.y > height + 100
  }

  this.removeFromWorld=function(){
    Composite.remove(world,this.body)
  }


  this.show=function(){
    let pos=this.body.position
    let angle=this.body.angle;

    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    strokeWeight(1)
    stroke(255)
    fill(127)
    ellipse(0,0,this.r*2)
    pop();
  }
}