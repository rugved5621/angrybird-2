function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(400,200,50,50);

  fixed2 = createSprite(200, 100, 80, 20);
  fixed2.shapeColor="green";
  fixed3=createSprite(200,300,90,40);
  fixed3.shapeColor="green";
  fixed2.velocityY = 3;

}

function draw() {
  background(255,255,255);  
  //moving.x=mouseX;
  //moving.y=mouseY;

  

  if(isTouching(fixed3,moving)){
    fixed3.shapeColor = "blue";
    moving.shapeColor ="blue";
  }
  else{fixed3.shapeColor = "black";
  moving.shapeColor ="black";
}
  

bounceoff(fixed2,fixed3);
  drawSprites()
  text(moving.width/2+fixed.width/2,50,50);
  text(moving.x-fixed.x,350,50);

}
