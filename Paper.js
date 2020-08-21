class Paper {
    constructor(x,y,r){
        var options= {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.image = loadImage('paper.png');
        this.body= Bodies.circle(x,y,r,options)
        this.r= r;
        World.add(world, this.body)
    }
    display(){
        imageMode(RADIUS);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
        
        //image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
      }
}
