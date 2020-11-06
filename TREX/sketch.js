var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var trexv,obstacle;

var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;
localStorage["HighestScore"]=0;
//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOver,gameOver_img;
var restart,restart_img;
function preload(){
  groundImage = loadImage("ground2.png");
  
obstacle = loadImage("arrow.png")
trexv = loadImage("image.png");
  
  restart_img = loadImage("restart.png");
  gameOver_img = loadImage("gameOver.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(550,180,20,50);
  trex.addImage(trexv)
  trex.scale = 0.5;
  
  ground = createSprite(-displayWidth * 999,180,900000000000000000000000000000000,20);
  ground.addImage("ground",groundImage);
  
  invisibleGround = createSprite(200,190,999999999999999999999999999999999999999,10);
  invisibleGround.visible = false;
  
  obstaclesGroup = new Group();
  
  o1 = createSprite(-900,165,10,40);
  o1.addImage(obstacle);
  o1.scale = 0.5;

  o2= createSprite(-600,165,10,40);
  o2.addImage(obstacle);
  o2.scale = 0.5;

  o3 = createSprite(-300,165,10,40);
  o3.addImage(obstacle);
  o3.scale = 0.5;

  o4 = createSprite(0,165,10,40);
  o4.addImage(obstacle);
  o4.scale = 0.5;

  o5 = createSprite(300,165,10,40);
  o5.addImage(obstacle);
  o5.scale = 0.5;

  o6 = createSprite(600,165,10,40);
  o6.addImage(obstacle);
  o6.scale = 0.5;

  o7 = createSprite(900,165,10,40);
  o7.addImage(obstacle);
  o7.scale = 0.5;

  o8 = createSprite(1200,165,10,40);
  o8.addImage(obstacle);
  o8.scale = 0.5;

  o9 = createSprite(1500,165,10,40);
  o9.addImage(obstacle);
  o9.scale = 0.5;

  o0 = createSprite(1800,165,10,40);
  o0.addImage(obstacle);
  o0.scale = 0.5;

  oa = createSprite(2100,165,10,40);
  oa.addImage(obstacle);
  oa.scale = 0.5;

  ob = createSprite(2400,165,10,40);
  ob.addImage(obstacle);
  ob.scale = 0.5;

  oc = createSprite(2700,165,10,40);
  oc.addImage(obstacle);
  oc.scale = 0.5;

  od = createSprite(3000,165,10,40);
  od.addImage(obstacle);
  od.scale = 0.5;

  oe = createSprite(3300,165,10,40);
  oe.addImage(obstacle);
  oe.scale = 0.5;

  ofg = createSprite(3600,165,10,40);
  ofg.addImage(obstacle);
  ofg.scale = 0.5;

  og = createSprite(3900,165,10,40);
  og.addImage(obstacle);
  og.scale = 0.5;

  oh = createSprite(4200,165,10,40);
  oh.addImage(obstacle);
  oh.scale = 0.5;
  score = 0;
  
  //place gameOver and restart icon on the screen
 gameOver = createSprite(300,100);
 restart = createSprite(300,140);
gameOver.addImage(gameOver_img);
gameOver.scale = 0.5;
restart.addImage(restart_img);
restart.scale = 0.5;

gameOver.visible = false;
restart.visible = false;

}

function draw() {
  background(180);
  
  gameOver.x = trex.x
  restart.x = trex.x
  camera.position.x = trex.x

  text("Score: "+ score, 500,50);
  
  if(gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    
  if(keyDown("w")&& trex.y >=161.5){
    trex.velocityY = -10;
  }

  console.log(trex.y)

  if(keyDown("s")){
    trex.x -= 5
  }
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }  
      if(trex.x === -5000){
      
      gameState = END;
      
    }
  }
  else if(gameState===END){
    gameOver.visible = true;
    restart.visible = true;
    
    //change the trex animation
    
  }
   if(mousePressedOver(restart)) {
    reset();
  }
  trex.collide(invisibleGround);
  
  drawSprites();
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
}