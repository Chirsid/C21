var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  potter= createSprite(100,100,50,90);
  potter.shapeColor = "cyan";
  
  
  parleG= createSprite(400,400,50,70)
  parleG.shapeColor = "brown"
  
  marigold=createSprite(500,200,100,80);
  marigold.shapeColor="yellow";

  grapes= createSprite(300,200,100,200);
  grapes.shapeColor="purple";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

//function call
 if(isTouching(fixedRect, movingRect)){
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  textSize(40)
  text ("we are colliding",200,200);
 }
 else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
 }

 if(isTouching(grapes,movingRect)){
  grapes.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  textSize(40)
  text ("Hello Bhai",200,600);
 }
 else{
  grapes.shapeColor = "purple";
  movingRect.shapeColor = "green";
 }
  
 if(isTouching(potter,movingRect)){
   potter.velocityX = 1
  potter.shapeColor = random(100,200,16);
  movingRect.shapeColor = "blue";
  grapes.scale=3
  textSize(40)
  text ("Hello Bhai",200,600);
 }
 else{
   potter.velocityX = 0
   grapes.scale=1
  movingRect.shapeColor = "green";
 }

  drawSprites();
}


