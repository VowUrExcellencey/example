function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 100, 50, 50);
  fixedRect.velocityY=3;
  movingRect = createSprite(400, 300, 30, 80);
  movingRect.velocityY=-3;
}

function draw() {
  background(0);  

  // movingRect.x=mouseX;
  // movingRect.y=mouseY;

  // if (fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2
  //  && movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2
  //  && movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2
  //  && fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2){
  //   fixedRect.shapeColor="red";
  //   movingRect.shapeColor="red";
  // }else{
  //   fixedRect.shapeColor="green";
  //   movingRect.shapeColor="green";
  
  // }
  if (fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2
     && movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2){
      fixedRect.velocityX=fixedRect.velocityX*(-1);
      movingRect.velocityX=movingRect.velocityX*(-1);
     }

  if( movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2
     && fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2){
      fixedRect.velocityY=fixedRect.velocityY*(-1);
      movingRect.velocityY=movingRect.velocityY*(-1);
     }
  
  drawSprites();
}