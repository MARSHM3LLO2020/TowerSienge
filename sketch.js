
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var box1,ground,slingshot,box;


function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(1031,466,350,20);
  box1 = new Box(1030,300,40,40);
  box2 = new Box(1030,300,40,40);
  box3 = new Box(1030,300,40,40);
  box4 = new Box(1030,300,40,40);
  box5 = new Box(1070,300,40,40);
  box6 = new Box(1070,300,40,40);
  box7 = new Box(1070,300,40,40);
  box8 = new Box(990,300,40,40);
  box9 = new Box(990,300,40,40);
  box10 = new Box(990,300,40,40);
  box11 = new Box(1110,300,40,40);
  box12 = new Box(1110,300,40,40);
  box13 = new Box(950,300,40,40);
  box14 = new Box(950,300,40,40);
  box15 = new Box(1150,300,40,40);
  box16 = new Box(910,300,40,40);

 polygon = new Polygon(200,200,60,60,0);
slingshot = new Slingshot(polygon.body,{x:197,y:312});



	Engine.run(engine);
  
}

function draw(){
  rectMode(CENTER); 
  background("black");

  ground.display();

  //slingshot.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  polygon.display();
  slingshot.display();


  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
 }

 function mouseReleased(){
     slingshot.fly(); 
 }



