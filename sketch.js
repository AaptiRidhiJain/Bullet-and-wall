var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(1200, 200, thickness, height/2);
  bullet.velocityX = speed;
  bullet.shapeColor = 80, 80, 80;

  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = "brown";
}

function draw() {
  background(0); 
  
  if(wall.x - bullet.x < (bullet.width + bullet.width)/2)
  {
    bullet.velocityX = 0
    var damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed/(thicknessofwall * thicknessofwall * thicknessofwall)
  }

  if(damage > 10){
    wall.shapeColor = "red";
  }

  if(damage < 10){
    wall.shapeColor = "green";
  }

  if(deformation > 180){
    bullet.shapeColor = color (255, 0, 0);
  }

  if(deformation < 180 && deformation > 100){
    bullet.shapeColor = color(230, 230, 0);
  }

  if(deformation < 100){
    bullet.shapeColor = color(0, 255, 0);
  }

  drawSprites();
}

function hasCollided(lbullet, lwall){
    bulletRightEdgge = lBullet.x + lbullet.width;
    wallLeftEdge = lwall.x;

    if(bulletRightEdge >=wallLeftEdge){
      return true;
    }
    return false;
}