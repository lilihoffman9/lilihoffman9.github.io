class Road{
    constructor(xPos, yPos, length, width) {
        this.x = xPos;
        this.y = yPos;
        this.l = length;
        this.w = width;
    }

    drawRoad(){
      var img = new Image();
      img.src = "road.png";
      ctx.drawImage(img, this.x, this.y);
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