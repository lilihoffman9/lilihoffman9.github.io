class Animal {
  constructor(xPos, yPos, radius) {
    this.x = xPos;
    this.y = yPos;
    this.radius = 10
  }

   drawPig(){
    /*
    ctx.fillStyle = "Pink";
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius, 0, Math.PI * 2)
    ctx.fill();
    */
    let img = new Image();
    img.src = "pig2-RESIZE3.png";
    ctx.drawImage(img, this.x, this.y);
  }

  drawChicken(){
    let img = new Image();
    img.src = "chicken--RESIZE.png";
    ctx.drawImage(img, this.x, this.y);
  }

  drawCow(){
    let img = new Image();
    img.src = "cow--RESIZE.png";
    ctx.drawImage(img, this.x, this.y);
  }

  drawGoat(){
    let img = new Image();
    img.src = "goat--RESIZE.png";
    ctx.drawImage(img, this.x, this.y);
  }

  drawSheep(){
    let img = new Image();
    img.src = "sheep--RESIZE.png";
    ctx.drawImage(img, this.x, this.y);
  }

  drawSplat(){
    let img = new Image();
    img.src = "Splat1--RESIZE.png";
    ctx.drawImage(img, this.x-20, this.y-20);
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
  changeSpeedX(){
    this.speedX *= -1;
  }

  
  containsPoint(x, y, l, w){
    var points = [];
    points.push([x,y]);
    points.push([x+ l/2,y]);
    points.push([x+ l,y]);
    points.push([x,y/2]);
    points.push([x+l,y/2]);
    points.push([x,y+w]);
    points.push([x + l/2,y+w]);
    points.push([x + l,y+w]);

    for(var i = 0 ; i < 8; i++){
      var x2 = (points[i][0]-(this.x+25)) * (points[i][0]-(this.x+25))
      //FIX Y DYING
      var y2 = (points[i][1]-(this.y+25)) * (points[i][1]-(this.y+25))
      
      if( Math.sqrt(x2 + y2) <= this.radius)
        return true;
    }
    return false;
  }
}