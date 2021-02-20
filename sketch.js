
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var survivalTime = 0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(150,500,20,20);
  monkey.addAnimation("running",monkey_running );
  monkey.scale = .3
  ground = createSprite(300, 590, 1200, 20)
  ground.velocityX = -3
  foodGroup = new Group();
  obstacleGroup = new Group();
  score = 0
}


function draw() {
  background("limegreen")
  monkey.collide(ground);
  if(ground.x<0){
    ground.x = ground.width/2
  }
  if(keyDown("space")){
    monkey.velocityY=-14
  }
  monkey.velocityY=monkey.velocityY+0.5
  if(monkey.isTouching(obstacleGroup)){
    ground.velocityX=0;
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
  }
  textSize(22);
  fill("red");
  strokeWeight(3)
  stroke("white")
  text("Survival Time:"+survivalTime,200,50)
  survivalTime = Math.round(frameCount/3);
  
  
  monkey.debug = true
  obstacleGroup.debug=true
  spawnFood();
  spawnObstalce();
  drawSprites();
}

function spawnFood(){
  if(frameCount%100 === 0){
    var banana = createSprite(600, random(120, 200))
    banana.addImage("banana", bananaImage);
    banana.velocityX = -4;
    banana.scale = .3
    banana.lifetime = 200;
    foodGroup.add(banana);
  }
}

function spawnObstalce(){
  if(frameCount%300 === 0){
    var obstacle = createSprite(600, 530, 100, 100);
    obstacle.addImage("obstacle",obstaceImage);
    obstacle.velocityX = -4;
    obstacle.scale = .3
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}







