class Paper{ 
    constructor(x, y, radius){
        var options={
            'restitution':0.5,
            'friction':1.0,
            'density':1.5
        }
        //this.x = x;
        //this.y = y;
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = 70; 
        World.add(world,this.body);
        this.image = loadImage("sprites/paper.png");
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill("yellow");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
  }

