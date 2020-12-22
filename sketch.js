
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground;
var block,block1,block2;
var block3,block4;
var block5,block6,block7,block8;
var pylogon;
var sling;

function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;
  ground=new Ground(600,400,300,30);
  block=new Blocks(530,340,30,60);
  block1=new Blocks(560,340,30,60);
  block2=new Blocks(590,340,30,60);
  block3=new Blocks(620,340,30,60);
  block4=new Blocks(650,340,30,60);
  block5=new Blocks(550,250,30,60);
  block6=new Blocks(580,250,30,60);
  block7=new Blocks(610,250,30,60);
  block8=new Blocks(580,150,30,60);
  pylogon=new Pylogon(100,350,50,70);
  sling=new Sling(pylogon.body,{x:100,y:350});



  Engine.run(engine);
}

function draw() {
  background(56,44,44);
  Engine.update(engine);
  
  
  ground.display();
  block.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  pylogon.display();
  sling.display();



}     

function mouseDragged(){
	Matter.Body.setPosition(pylogon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}