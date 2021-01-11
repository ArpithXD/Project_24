
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var binImage, bin4;

function preload() {

	binImage = loadImage("dustbin.png");
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	g = new Ground(500,650,1000,20);
	bin1 = new Bin(725,525,10,200);	
	bin2 = new Bin(880,525,10,200);
	//bin3 = new Bin(880,650,160,10);
	paPer = new Paper(175,100,50);

	bin4 = createSprite(800,525,150,150);
	bin4.addImage(binImage);
	bin4.scale = 0.7;

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(200);

  paPer.display();
  g.display();
  bin1.display();
  bin2.display();
  //bin3.display();
 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {	
	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(paPer.body,paPer.body.position,{x:50,y:-100});
	}

	if (keyDown(DOWN_ARROW)) {
		Matter.Body.applyForce(paPer.body,paPer.body.position,{x:-50,y:-100});
	}

	if (keyDown(RIGHT_ARROW)) {
		Matter.Body.applyForce(paPer.body,paPer.body.position,{x:50,y:100});
	}

	if (keyDown(LEFT_ARROW)) {
		Matter.Body.applyForce(paPer.body,paPer.body.position,{x:-50,y:100});
	}
}


