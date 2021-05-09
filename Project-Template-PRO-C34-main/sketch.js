const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8, box9, box10,box11,box12,box13,box14;
var hero,monster,rope,ground;
var laser,laserImage;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
  bg.scale=0.7;
  laserImage = loadImage("laser.jpeg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 3000, 20);

  hero = new Hero(mouseX,mouseY,250);
  
  

  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);
  box8 = new Box(900, 100, 70, 70);
  box9 = new Box(700, 100, 70, 70);
  box10 = new Box(700, 100, 70, 70);
  box11= new Box(700, 100, 70, 70);
  box12 = new Box(700, 100, 70, 70);
  box13= new Box(700, 100, 70, 70);
  box14= new Box(700, 100, 70, 70);

}

function draw() {
  background(bg);

  Engine.update(engine);
  
  
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

  hero.display();
  
  monster.display();

if(keyDown("space")){
  war();
}


}
function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

function war(){
  laser=new Laser(Hero.x,Hero.y,20,20);
  laser.setCollider("rectangle",0,0,50,50);
  laser.velocityX=3;
  

  
  
}