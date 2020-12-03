var bullet;
var line1,line2,line3,line4;
var wall;
var weight,speed;
var damage;
var thickness;

function setup() {
  createCanvas(1600,600);

//Assign a value to speed and weight.
bulletSpeed = random(223,321);
bulletWeight = random(30,52);

//create thickness of wall
thickness = random(22,83);

//calculate damage 
damage = (0.5*bulletWeight*bulletSpeed*bulletSpeed)/(thickness * thickness * thickness);


//bullet sprite 
  bullet = new Sprite(100,400,5,10);
  bullet.shapeColor = "white";

//line sprites
  line1 = new Sprite(0,450,1600,10);
  line1.shapeColor = "white";


//wall sprite
  wall = new Sprite(1200,150,thickness,300);
  wall.shapeColor = rgb(80,80,80);

  //assign the bullet a velocity 
  bullet.vx = bulletSpeed;
}

function draw() {
  background("black"); 

 if (hasCollided(bullet,wall)){
   bullet.vx = 0;
    if(damage<=10){
      wall.shapeColor = "green";
    }
    if(damage>10){
      wall.shapeColor = "red";
    }
  } 


  bullet.display(); 

  wall.display();

  line1.display();
 

  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>wallLeftEdge){
    return true;
  }
  return false;
}