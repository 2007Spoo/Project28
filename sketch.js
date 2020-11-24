
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1;

var tree;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1= new Mango(200,400,5);
	mango2= new Mango(205,403,5);
	mango3= new Mango(210,406,5);
	mango4= new Mango(215,409,5);
	mango5= new Mango(220,411,5);
	Engine.run(engine);
	
	tree= new Tree(500,100,20,100);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  mango1.display();
  drawSprites();
 
  tree.display();
}



