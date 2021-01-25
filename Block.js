class Block{
    constructor(x,y,height,width){
        var option = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:2
        }
        this.body = Bodies.rectangle(x,y,height,width,option);
        this.height = height;
        this.width = width;
        World.add(world, this.body);

    }
    display(){
       var pos = this.body.position;
       rectMode(CENTER);
       fill("#2ee8d2");
       rect(pos.x,pos.y,this.height,this.width);
    }

}
    
