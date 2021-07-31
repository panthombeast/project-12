var runner,runner_running,;
var path,pathImage;


function preload(){
  //pre-load images
  runner_running=loadAnimation("Runner-1.png","Runner-2.png");
  path=loadAnimation("path.png");
 
  
} 
 

function setup(){
  createCanvas(400,400);
  //create sprites here
 runner=createSprite(200,200,50,50);
 runner.addAnimation("runner_running");
 runner.scale=0.5;

 path=createSprite(200,200);
 path.addImage("path",pathImage);
 path.velocityY = 4;
 path.scale=1.5;
 

}

function draw() {
  background(0);
if(path.y > 400){
  path.y=height/2;
}

runner.x=World.mousex;

drawSprites();
}
