var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ball;
var dustbin1,dustbin2;

function setup() {
	createCanvas(800, 400);
    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(400,380,800,10);
  ball = new Paper(200,200,50);
	dustbin1 = new Dustbin(520,320,10,120);
	dustbin2 = new Dustbin(670,320,10,120);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  ball.display();
  dustbin1.display();
  dustbin2.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
     Body.applyForce(ball.body,ball.body.position,{x:320,y:-320});
     
   }
 }