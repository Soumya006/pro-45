var backgroundImg,trainImg,trackImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var obstacle;

function preload(){
    backgroundImg=loadImage('images/background.jpg');
    trainImg=loadImage('images/train.png');
    trackImg=loadImage('images/track.png');
    treeImg=loadImage('images/tree.png');
    tree1Img=loadImage('images/tree1.png');
    tree2Img=loadImage('images/tree2.png');
    tree3Img=loadImage('images/tree3.png');
    tree4Img=loadImage('images/tree4.png');
    houseImg=loadImage('images/house.png');
    obstacle1Img=loadImage('images/obstacle1.png');
    obstacle2Img=loadImage('images/coin.png');
    obstacle3Img=loadImage('images/obstacle3.png');
    gameoverImg=loadImage('images/gameOver.png');

}

function setup(){
    createCanvas(displayWidth,displayHeight); 


    background1=createSprite(displayWidth/2,displayHeight/2,10,10);
   background1.addImage("backgroundImg",backgroundImg);
   background1.scale=6;

   track1=createSprite(displayWidth-1000,300,100,100);
   track1.addImage("track",trackImg);
   track1.scale=3;
   
   track3=createSprite(displayWidth-400,300,100,100);
   track3.addImage("track",trackImg);
   track3.scale=3;
   
   track2=createSprite(displayWidth-700,300,100,100);
   track2.addImage("track",trackImg);
   track2.scale=3;

   train=createSprite(370,530,50,50);
   train.shapeColor = "blue";
   train.addImage("train",trainImg);
   train.scale=1.3;

   gameOver=createSprite(700,350,10,10);
   gameOver.addImage("gameover",gameoverImg);
   gameOver.scale=2;
   gameOver.visible=false;
   

   //cloudsGroup = new Group();
  obstaclesGroup = new Group();
  extrasGroup = new Group();

}

function draw(){
background("white");

if(gameState===PLAY){

    background1.velocityY=2;
    track1.velocityY=2;
    track2.velocityY=2;
    track3.velocityY=2;

    if(background1.y > 450 ){
        background1.y = 400;
      }

      if(track1.y > 450 ){
        track1.y = 400;
      }

      if(track2.y > 450 ){
        track2.y = 400;
      }

      if(track3.y > 450 ){
        track3.y = 400;
      }

      if(keyDown("right_arrow")&&train.x<displayWidth-401){
        train.x=train.x+300;
      }

      if(keyDown("left_arrow")&&train.x>displayWidth-701){
        train.x=train.x-300;
      }

}

if(obstaclesGroup.isTouching(train)){
  gameState=END;
  background1.velocityY=0;
  track1.velocityY=0;
  track2.velocityY=0;
  track3.velocityY=0;
  obstaclesGroup.setVelocityYEach(0);
  extrasGroup.setVelocityYEach(0);

  gameOver.visible=true;
}

spawnExtras();
spawnExtra();
spawnObstacles();

drawSprites();
}

function spawnExtras() {
  if(frameCount % 200 === 0) {
    var extra = createSprite(150,-70,10,40);
    //obstacle.debug = true;
    extra.velocityY = 2;
    
    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: extra.addImage(treeImg);
      extra.scale=0.75;
              break;
      case 2: extra.addImage(tree1Img);
              break;
      case 3: extra.addImage(tree2Img);
              break;
      case 4: extra.addImage(tree3Img);
      extra.scale=0.75;
              break;
      default: break;
    }
    extrasGroup.add(extra);

  }
}

function spawnExtra() {
  if(frameCount % 155 === 0) {
    var extra = createSprite(1200,-70,10,40);
    //obstacle.debug = true;
    extra.velocityY = 2;
    
    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: extra.addImage(treeImg);
      extra.scale=0.75;
              break;
      case 2: extra.addImage(tree1Img);
              break;
      case 3: extra.addImage(houseImg);
      extra.scale=0.65
              break;
      case 4: extra.addImage(tree4Img);
      extra.scale=0.65
              break;
      default: break;
    }
    extrasGroup.add(extra);

  }
}

function spawnObstacles() {
  if(frameCount % 200 === 0) {
    var obstacle = createSprite(displayWidth-1000,-50,10,40);
    //obstacle.debug = true;
    obstacle.velocityY = 2;

    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1Img);
      obstacle.scale=0.50;
              break;
      case 2: obstacle.addImage(obstacle3Img);
      obstacle.scale=0.50;

              break;
              
      //case 3: obstacle.addImage(obstacle3Img);
      //extra.scale=0.65
           //   break;
     // case 4: obstacle.addImage(tree4Img);
      //extra.scale=0.65
        //      break;
      default: break;
    }
    obstaclesGroup.add(obstacle);
  }
}

function isTouching(object1,object2){
   if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object2.y < object2.height/2 + object1.height/2) 
   { return true; } 
   else 
   { return false; }
}

