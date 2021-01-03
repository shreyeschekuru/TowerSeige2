class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.6,
          'friction':0.7,
          'density':0.6
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visiblity = 255;

      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      var pos =this.body.position;
      var angle = this.body.angle;
      if (this.body.speed < 3 ){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black")
        fill("white");
        tint(255,this.visibility);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else {
        World.remove(world, this.body);
        push();
        this.visiblity = this.visiblity - 5 
        tint(0,this.visiblity);
        pop();
      }
    }
  };
  