var database;
var back1;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit11, fruit21, fruit31, fruit41, fruit51;
var player1; 
var Score1=0;
var Score2=0;
var score,score1;
function preload(){
  back1 = loadImage("jungle.jpg");
  player_img = loadImage("basket2.png");
  fruit11 = loadImage("apple2.png");
  fruit21 = loadImage("banana2.png");
  fruit31 = loadImage("melon2.png");
  fruit41 = loadImage("orange2.png");
  fruit51 = loadImage("pineapple2.png");
  fruitGroup = new Group();
  
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database(); 
  game = new Game();
  game.getState();
  game.start();  
}

function draw() {
  background(back1);
  //players.x = mouse.x

  if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
} 