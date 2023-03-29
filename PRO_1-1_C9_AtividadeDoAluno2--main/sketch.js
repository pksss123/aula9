var box;
function setup() {
  createCanvas(windowWidth,windowHeight);
box=createSprite(200,200,100,100)
box.shapeColor="green"


}

function draw() 
{
  background(250);

if(keyIsDown(68)){
box.x=box.x+10
}
if(keyIsDown(65)){
  box.x=box.x-10
}
if(keyIsDown(83)){
box.y=box.y+10
}
if(keyIsDown(87)){
  box.y=box.y-10
}
  drawSprites();

}




