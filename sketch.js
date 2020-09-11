
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var trashcan;
var ground;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800, 670, 1600, 20);
	trashcan = new Trashcan(1350, 660);
	ball = new Paper(230, 320, 40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(197, 224, 227);
  
  ground.display();
  trashcan.display();
  ball.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}
