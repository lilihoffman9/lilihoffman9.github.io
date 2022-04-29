class replayGameButton{
    constructor(xPos, yPos, length, width) {
        this.x = xPos;
        this.y = yPos;
        this.l = length;
        this.w = width;
      }
    
    drawButton(){
        ctx2.fillStyle = "black";
        ctx2.fillRect(this.x, this.y, this.l, this.w);
    }

    getXPosition(){
      return this.x;
    }
    getYPosition(){
      return this.y;
    }
    getLength(){
      return this.l;
    }
    getWidth(){
      return this.w;
    }
}