class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            'friction':1.0,
            'density':1.0
        }

        this.image = loadImage('dustbingreen.png');
        

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        image(this.image, 910,415, 200,250);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
      }
}