const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var box1;
var box2;
var box3;
var box4;
var box5;
var pig;
var pig2;
var log;
var log2;
var log3;
var log4;
var ground;
var bird;
var backImg;
function preload() {
  backImg = loadImage('sprites/bg.png') 
}
function setup() {
  createCanvas(1200,400);
  background ("blue");

  Myengine = Engine.create()
  Myworld = Myengine.world;
  box1 = new Box(700,320,70,70)  
  box2 = new Box(920,320,70,70) 
  box3 = new Box(700,240,70,70);  
  box4  = new Box(920,240,70,70)
  ground = new Ground(600,height,1200,20)
  pig = new Pig(810,350) 
  pig2 = new Pig(810,220)
  log = new Log(810,260,300,PI/2) 
  log2 = new Log(810,180,300,PI/2)
  log3 = new Log(760,120,150,PI/7)
  log4 = new Log(870,120,150,-PI/7)
  box5 = new Box(810,160,70,70)
  bird = new Bird(500,200)
}

function draw() {
  background(backImg);  
  Engine.update(Myengine)
  box1.display()
  box2.display();
  
  
  pig.display();
  
  log.display();
  box3.display()
  box4.display()
  pig2.display()
  log2.display()
  box5.display();
  log3.display();
  log4.display()
ground.display();
bird.display()
}
