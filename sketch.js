var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var  cw, cwImage, paperImg, roadImg, chest, c1, c1Img, c2, c2Img, c3, c3Img, c4, c4Img;
var gs="wait";
function preload(){
  c1Img = loadAnimation("c1/c1.0.png", "c1/c1.1.png", "c1/c1.2.png", "c1/c1.3.png", "c1/c1.4.png", "c1/c1.5.png");
}
function setup(){
  canvas = createCanvas(1515,715);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

if(playerCount === 4 && gs==="play"){
  game.update(1);
}

if(gameState === 1){
  game.play();
}



//if (gameState === 0){
  /*cw = createSprite(400, 400);
  cw.addAnimation("a",cwImage);
  
drawSprites();
}*/

}
