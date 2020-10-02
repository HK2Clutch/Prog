var fixedRect, movingRect;
var ob1,ob2,ob3,ob4;
function setup() {
  createCanvas(1200,800);
  ob1 = createSprite(800,200,300,200);
  ob2 = createSprite(700,65,64,675);
  ob3 = createSprite(200,30,700,60);
  ob4 = createSprite(345,75,746,356);
  ob1.shapeColor = "red";
  ob2.shapeColor = "blue";
  ob3.shapeColor = "green";
  ob4.shapeColor = "yellow";
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1.velocityY = 4;
  ob2.velocityY = -4;
}

function draw() {
  background(0,0,0);  
  //ob2.x = World.mouseX;
  //ob2.y = World.mouseY;
  bounceoff(ob1,ob2);
  
  
  drawSprites();
}


