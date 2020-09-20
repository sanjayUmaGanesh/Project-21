var bullet,wall;
var speed, weight,thickness;

function setup() {
thickness = random(22,83)
  createCanvas(1600,400);
  wall = createSprite(1500, 200, thickness, height/2);
  wall.debug = true;
  bullet = createSprite(50,200,50,20);

  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;

}

function draw() {
  
  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0
    var damage = 0.5 * weight * speed * speed/thickness*thickness*thickness;
    if(damage < 10 )
    {
      bullet.shapeColor = color("green");
    }
    if(damage > 10){
      bullet.shapeColor = color("red");
    }
  }

  
  background(255,255,255);  
  drawSprites();
}
function hasCollided(l,m){
  RE = l.x
  LE = m.x
  if(RE >= LE){
    return true
  }

    return false

}