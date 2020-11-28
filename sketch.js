
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;
  ground=new Ground(600,800,100,100);
  Engine.run(engine);
}

function draw() {
  background(56,44,44);
  Engine.update(engine);
  
  ground.display();

  drawSprites();
}     