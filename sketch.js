const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, box, box1, box2, box3, ground;
var ballImg, boxImg;

/*function preload()
{
	ballImg = loadImage('paper.png');
	boxImg = loadImage('dustbingreen.png');
}*/

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,150,50,50);
	
	box1 = new Dustbin (1000,670,170,20);//dustbin
	box2 = new Dustbin (930,660,20,300);
	box3 = new Dustbin (1090,660,20,300);
	ground = new Ground (400,680,1600,35);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  background(255);
  ball.display();
   
  box2.display();
  box3.display();
  box1.display();
  
  ground.display();
  
  box.scale=0.01

  drawSprites ();
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:300, y:-400});
	}
}

