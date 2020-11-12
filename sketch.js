var bullet,wall;
var speed,weight,thickness;

function setup(){
  createCanvas(700,400);
bullet=createSprite(20,100,25,25);
thickness=random(22,83)
wall=createSprite(480,200,thickness,height);
wall.shapeColor=(80,80,80);
speed=random(223,321);
weight=random(30,52);
bullet.velocityX=speed
}
function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge= lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
 return true
}
return false;
}

function draw(){
  background("black")

 
if (hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight* speed* speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0)
  }

  if(damage<10)
  {
wall.shapeColor=color(0,255,0)
  }
}



drawSprites();
}