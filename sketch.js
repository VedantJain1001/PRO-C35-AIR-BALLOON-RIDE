var balloon,balloonImage1,balloonImage2;
var database, position;

function preload(){
  bg =loadImage("cityImage.png");
  balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
  "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
  "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
}

function setup() {
  createCanvas(1500,700);
  database = firebase.database();  

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage2);
  balloon.scale=0.5;

  var balloonPos = database.ref('balloon/position');
}

function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    writePosition(-5,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    writePosition(+5,0);
  }
  else if(keyDown(UP_ARROW)){
    writePosition(0,-5);
  }
  else if(keyDown(DOWN_ARROW)){
    writePosition(0,+5);
  }

  drawSprites();

  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function writePosition(x,y){
  balloon.x = balloon.x+x;
  balloon.y = balloon.y+y;
}

function readPos(data){
  position = data.val();
  console.log(position.x);
  balloon.x = position.x;
  balloon.y = position.y;
}
