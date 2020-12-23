var bullet,wall;
var speed,weight,thickness;



function setup() 
{
  createCanvas(800,400);
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52))
  thickness=Math.round(random(20,90 ))
  bullet=createSprite(50,200,60,15);
  bullet.shapeColor='white'
  bullet.velocityX=speed
  wall=createSprite(750,200,thickness,height/2);
  wall.shapeColor= 'gray'
}


function draw() 
{
  background("black");  

if(collision(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

  if(damage>10)
  {
    wall.shapeColor="red"
  }

if(damage<10)
{
wall.shapeColor="lime"
}
}

  
  drawSprites();
}

function collision(lbullet,lwall)
{
  var bulletRightedge=bullet.x+(bullet.width/2);
  var wallLeftedge=wall.x-wall.width/2

if(bulletRightedge>=wallLeftedge)
  {
    return true;
   } 

   return false
}