
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var  engine,world;
var  bg ,bgimg;
var snowm=1000
var snow3 =[];
function preload(){
  bgimg=loadImage("snow1.jpg");
  
}





function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;
 createSprite(400, 200, 50, 50);
for (var i=0;i<snowm;i++){
  snow3.push(new snowf(random(0,1200),random(0,800),20))

}

}

function draw() {
  background(bgimg);  
  Engine.update(engine);
  
  for (var i=0;i<snowm;i++ ){
    snow3[i].display();
  }

  
  drawSprites();
}