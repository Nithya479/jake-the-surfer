var jake, jake_running;
var path, invisibleBoundary,invisibleBoundary2,pathImage;


function preload(){
  jake_running = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png");
  pathImage=loadImage("path.png");
}

function setup() {
  createCanvas(400,400);
  
  
 
  
  
  
  
 
  path= createSprite(200,200);
  path.addImage(pathImage);
  path.scale=1.2
  jake = createSprite(180,340,30,30);
  jake.addAnimation("running", jake_running);
  
  invisibleBoundary=createSprite(0,0,100,800);
  invisibleBoundary2=createSprite(410,0,100,800);
  invisibleBoundary.visible=false;
  invisibleBoundary2.visible=false;

 
}

function draw() {
  background(250);
  path.velocityY= 4; 
 

 jake.x=World.mouseX
 edges=createEdgeSprites()
 jake.collide(edges[3])
 jake.collide(invisibleBoundary);
 jake.collide(invisibleBoundary2);
 if(path.y>400){
  path.y=height/2
}
  
  drawSprites();
}


