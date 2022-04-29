class Car{
    constructor(xPos, yPos, length, width) {
        this.x = xPos;
        this.y = yPos;
        this.l = length;
        this.w = width;
        this.speedX = 3;
    }

    drawCarRight(){
      let imgR = new Image();
      imgR.src = "carFacingRight_1_70x30.png";
      ctx.drawImage(imgR, this.x, this.y);
    }

    drawCarLeft(){
      let imgL = new Image();
      imgL.src = "carFacingLeft_1_70x30.png";
      imgL.style.width =  this.w; 
      imgL.style.height =  this.y; 
      ctx.drawImage(imgL, this.x, this.y);
    }

    setSpeed(int){
      this.speedX = int;
    }
    reset(){
      this.x = 0;
    }
    resetLeft(){
      this.x = canvas.width;
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
    moveRight(){
        this.x += this.speedX;
    }
    moveLeft(){
      this.x -= this.speedX;
  }
}