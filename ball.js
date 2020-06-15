class Ball{
    constructor(x,y){
        
     
        this.image=loadImage("football.jpg");
        this.body = createSprite(x,y,40,40);
        this.body.addImage(this.image);
        this.body.scale=0.1;
    }

    display(){

        
       // var pos =this.body.position;
        //imageMode(CENTER);
        //image(this.image,pos.x , pos.y , 40, 40);

    }

    
}