class Trashcan {
    constructor(x, y){
        /*var options = {
            'isStatic':true
        }
  
        this.body = Bodies.rectangle(x, y, options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);*/
        this.x = x;
        this.y = y;
        this.trashcanwidth = 200;
        this.trashcanheight = 250;
        this.wallthickness = 20;
        this.angle = 0;        
        
        this.bottombody = Bodies.rectangle(this.x,this.y, this.trashcanwidth, this.wallthickness,{isStatic:true});
        
        this.leftwallbody = Bodies.rectangle(this.x - this.trashcanwidth/2, this.y - this.trashcanheight/2, this.wallthickness, this.trashcanheight,{isStatic:true});
        Matter.Body.setAngle(this.leftwallbody, this.angle);
        
        this.rightwallbody = Bodies.rectangle(this.x + this.trashcanwidth/2, this.y - this.trashcanheight/2, this.wallthickness, this.trashcanheight,{isStatic:true});
        Matter.Body.setAngle(this.rightwallbody,-1*this.angle);
        
        World.add(world,this.bottombody);
        World.add(world,this.leftwallbody);
        World.add(world,this.rightwallbody);
        this.image = loadImage("sprites/trashcan.png");
    }  
    display(){
       /* var pos = this.body.position;
        translate(pos.x, pos,y);
        rectMode(CENTER);
        fill("red");
        rect(0,0, this.width, this.height);*/
        var posbottom = this.bottombody.position;
        var posleft = this.leftwallbody.position;
        var posright = this.rightwallbody.position;
        push();
        translate(posleft.x, posleft.y)
        fill("pink");
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(this.angle);
        rect(0, 0, this.wallthickness, this.trashcanheight);
        pop();
        
        push();
        translate(posright.x, posright.y)
        fill("pink");
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(-1*this.angle);
        rect(0, 0, this.wallthickness, this.trashcanheight);
        pop();

        push();
        translate(posbottom.x, posbottom.y)
        fill("blue");
        rectMode(CENTER);
        angleMode(RADIANS);
        rect(0, 0, this.trashcanwidth, this.wallthickness);
        pop();

        push();
        translate(posbottom.x, posbottom.y)
        fill("green");
        imageMode(CENTER);
        image(this.image,0,-135, this.trashcanwidth,this.trashcanheight);
        pop();
    }
  }