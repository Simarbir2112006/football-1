

 var player1,player2,ball,bg_img;


 function preload(){
  bg_img=loadImage("bg.jpg");
 }
 function setup() {
  createCanvas(windowWidth,windowHeight);
 
  

  player1 = new Player(windowWidth/3,windowHeight/2);
  player2 = new Player(windowWidth/1.5,windowHeight/2);
  ball = new Ball(windowWidth/2,windowHeight/2);

}

function draw() {
  background(bg_img);  
 

  player1.body.bounce(ball.body);
  
 
  drawSprites();
}

function keyPressed(){
   if(keyCode===38){
    player1.body.velocityX=0;
    player1.body.velocityY=-2;
    console.log("up");
   }


   else if(keyCode===40){
    player1.body.velocityX=0;
    player1.body.velocityY=2;
    console.log("down");
   }
  

   else if(keyCode===37){
    player1.body.velocityX=-2;
    player1.body.velocityY=0;
    console.log("left");
   }
  

   else if(keyCode===39){
    player1.body.velocityX=2;
    player1.body.velocityY=0;
    console.log("right");
   }
   else{
    player1.body.velocityX=0;
    player1.body.velocityY=0;
   }
  
  
}