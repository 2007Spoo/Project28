class Mango
{
    constructor(x, y, r ) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'isStatic': true,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("Sprites/mango.png");
        this.body= Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.body);
}

display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0);
    pop();
  }
}