var gameBackground;
var gameBackgroundImage;
var menuBackground;
var player;
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var startButton;
var invisStartButton;
var bullet;
var enemyBullet1;
var enemyBullet2;
var enemyBullet3;
var menuBackgroundImage;
var playerImage;
var enemy1Image;
var enemy2Image;
var enemy3Image;
var enemy4Image;
var startButtonImage;
var invisStartButtonImage;
var bulletImage;
var enemyBullet1Image;
var enemyBullet2Image;
var enemyBullet3Image;
var gamestate=0;
var points;
var health;
var boss;
var explosion;
var explosionImage;

function preload() {
  gameBackgroundImage = loadImage("gamebackground.png");
  menuBackgroundImage = loadImage("menu.png");
  playerImage = loadImage("player.png");
  enemy1Image = loadImage("enemy1.png");
  enemy2Image = loadImage("enemy2.png");
  enemy3Image = loadImage("enemy3.png");
  enemy4Image = loadImage("enemy4.png");
  bulletImage = loadImage("bullet.png");
  enemyBullet1Image = loadImage("enemybullet.png");
  enemyBullet2Image = loadImage("enemybullet2.png");
  enemyBullet3Image = loadImage("enemybullet3.png");
  startButtonImage = loadImage("button.gif");
  explosionImage = loadImage("Explosion1.gif");
}

function setup() {
  createCanvas(480,640);
  
  menuBackground = createSprite(240,320,0,0)
 menuBackground.addImage("backgroundimage", menuBackgroundImage);
startButton = createSprite(0, 0, 200, 100);
startButton.addImage("button", startButtonImage);
startButton.scale=0.80
player = createSprite(240,400);
}

function draw() {
  background(220);

  if (mousePressedOver(startButton) && gamestate === 0) {
    gamestate = 1;
    startButton.visible = false;
    menuBackground.visible = false;
    player.x = mouse.x;
    player.y = mouse.y;
    spawnEnemy1()
    if (keyDown === "space") {
      bulletCreation()

    }
  }
  drawSprites();
}

function spawnEnemy1() {
  if (frameCount % random(30,90) === 0) {
    enemy1 = createSprite(math.round(random(0, 480)), 640, 20, 20);
    enemy1.velocityY=(random(-1,-4))
    
  }
  if(frameCount%35===0){
    bullet.createSprite(enemy1.x,enemy1.y)
    bullet.velocityY=-5.5
  }
}
function bulletCreation() {
  if (frameCount % 10 === 0) {
    bullet = createSprite(player.x, player.y);
    bullet.velocityY = 3;
  }
}
