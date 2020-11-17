var obj2;
var groundSprite, ground;
var rope;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	var c_options ={
		restitution : 1
	  }
	

	obj2 = Bodies.circle(100,600,40,c_options);
	World.add(world, obj2);

	rope = new Rope(obj2.body,{x:250,y:100});    

	groundSprite=createSprite(400, 100, 500,50);
	groundSprite.shapeColor=color("grey")

	ground = Bodies.rectangle(400, 100, 500, 50 , {isStatic:true} );
    World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  ellipse(obj2.position.x,obj2.position.y,40, 40)
  rope.display();   	
  drawSprites();
}



