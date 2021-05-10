var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var score=0;
var particle;

var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
particle= new Particle(mouseX,10,10,10)

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);

if(particle.x<120){
score=score+500
 textSize(15)
 text("500",49,594)
}
if(particle.x>120 && particle.x<200){
  score=score+500
 textSize(15)
 text("500",116,594)
}
if(particle.x>200 && particle.x<280){
score=score+500
 textSize(15)
 text("500",200,594)
}
if(particle.x>280 && particle.x<370){
  score=score+500
 textSize(15)
 text("500",280,594)
}
if(particle.x>370 && particle.x<440){
  score=score+200
 textSize(15)
 text("200",370,594)
}
if(particle.x>440 && particle.x<530){
  score=score+200
 textSize(15)
 text("200",440,594)
}
if(particle.x>530 && particle.x<600){
  score=score+200
 textSize(15)
 text("200",530,594)
}
if(particle.x>600 && particle.x<690){
  score=score+200
 textSize(15)
 text("200",600,594)
}
if(particle.x>690 && particle.x<760){
  score=score+200
 textSize(15)
 text("200",690,594)
}
if(particle.x<760){
  score=score+200
 textSize(15)
 text("200",760,594)
}
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}