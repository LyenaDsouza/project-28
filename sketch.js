
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree;

var launcher;
var launchForce=100;
var stone;

var boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  tree = new Tree(1050,580);
  
  stone=new Stone(235,420,30);

  launcher=new Launcher(stone.body,{x:235,y:420});

  mango1=new  Mango(1100,100,30); 
  mango2=new Mango(1170,130,30);
   mango3=new Mango(1010,140,30); 
   mango4=new Mango(1000,70,30);
    mango5=new Mango(1100,70,30); 
    mango6=new Mango(1000,230,30); 
    mango7=new Mango(900,230,25);
     mango8=new Mango(1140,150,25);
      mango9=new Mango(1100,230,25);
       mango10=new Mango(1200,200,25); 
       mango11=new Mango(1120,50,25); 
       mango12=new Mango(900,160,25);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  tree.display();
 
  
  stone.display();
  launcher.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  keyPressed();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);
  detectcollision(stone,mango11);
  detectcollision(stone,mango12);
  drawSprites();
 
}
function mouseDragged(){
  
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
 
 }
 
 
 function mouseReleased(){
     launcher.fly();
     
 }

 function detectcollision(lstone,lmango)
 { 
   
   
    mangoBodyPosition=lmango.body.position
     stoneBodyPosition=lstone.body.position 
     var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
     console.log(distance) 
      console.log(lmango.r+lstone.r)
       if(distance<=lmango.r+lstone.r)
        { console.log(distance); Matter.Body.setStatic(lmango.body,false); } }

        function keyPressed()
        {

          if(keyCode===32)
          {

            Matter.Body.setPosition(stone.body,{x:235, y:420});
            launcher.attach(stone.body);
          }
        }



