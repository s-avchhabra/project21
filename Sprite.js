class Sprite{
    constructor(a,b,c,d){
        this.x = a;
        this.y = b;
        this.width = c;
        this.height = d;

        this.shapeColor = "grey";
        this.vx = 0;
        this.vy = 0;
    }

    display(){

        this.x = this.x+this.vx;
        this.y = this.y+this.vy;
        fill(this.shapeColor);
        rect(this.x,this.y,this.width,this.height);

        
    }
    
    isTouching(e) {
        if(this.x-e.x < (e.width + this.width)/2 &&
        e.x - this.x < (e.width + this.width)/2 &&
        this.y-e.y < (e.height + this.height)/2 &&
        e.y - this.y < (e.height + this.height)/2 ){
      return true; 
    }
    else{ 
      return false;
    }
    }

    bounceOff(e) {
        if(this.x-e.x < (e.width + this.width)/2 &&
        e.x - this.x < (e.width + this.width)/2 &&
        this.y-e.y < (e.height + this.height)/2 &&
        e.y - this.y < (e.height + this.height)/2 ){
      this.vx = this.vx * -1;
      e.vx = e.vx * -1;
    }
    }
}