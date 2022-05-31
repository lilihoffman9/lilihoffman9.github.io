const canvas = document.getElementById("gameArea")
const ctx = canvas.getContext("2d")
let x = 410;
let y = 545;
let l = 70;
let w= 40;
let radius = 13;
let carsRow1 = [];
let carsRow2 = [];
let carsRow3 = [];
let carsRow4 = [];
let carsRow5 = [];
let counter1 = 1;
let counter2 = 1;
let counter3 = 1;
let counter4 = 1;
let counter5 = 1;
canMove=true;

for(var i = 0; i < 4; i++){
    let c1 = new Car(counter1,500,70, 30)
    carsRow1.push(c1);
    counter1+=270;
}
for(var i = 0; i < 5; i++){
    let c1 = new Car(counter2,400,70, 30)
    carsRow2.push(c1);
    counter2+=220;
}
for(var i = 0; i < 4; i++){
    let c1 = new Car(counter3,300,70, 30)
    carsRow3.push(c1)
    counter3+=200
}
for(var i = 0; i < 5; i++){
    let c1 = new Car(counter4,200,70, 30)
    carsRow4.push(c1)
    counter4+=175
}
for(var i = 0; i < 7; i++){
    let c1 = new Car(counter5,100,70, 30)
    carsRow5.push(c1)
    counter5+=160
}

let road1 = new Road(0,500);
let road2 = new Road(0,400);
let road3 = new Road(0,300);
let road4 = new Road(0,200);
let road5 = new Road(0,100);
let animal = new Animal(x,y,radius);
let car1 = new Car(x,y,l,w);
let speed = 47.9;

let downPress = false;
let upPress = false;
let rightPress = false;
let leftPress = false;




function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    //inputs();
    road1.drawRoad();
    road2.drawRoad();
    road3.drawRoad();
    road4.drawRoad();
    road5.drawRoad();

    animal.drawPig();

    if(animal.getYPosition() <= 110){
        window.open("winPig.html", "_self")
    }

    //row 1
    for(let c=0; c<3; c++){
        carsRow1[c].drawCarRight();
        carsRow1[c].moveRight();
        if(carsRow1[c].getXPosition() >= canvas.width -20){
            carsRow1[c].reset();
        }
    }

    //row 2
    for(let c=0; c<4; c++){
        carsRow2[c].drawCarLeft();
        carsRow2[c].moveLeft();
        if(carsRow2[c].getXPosition() <= -50){
            carsRow2[c].resetLeft();
        }
    }

    //row 3
    for(let c=0; c<4; c++){
        carsRow3[c].drawCarRight();
        carsRow3[c].moveRight();
        if(carsRow3[c].getXPosition() >= canvas.width){
            carsRow3[c].reset();
        }
    }

    //row 4
    for(let c=0; c<5; c++){
        carsRow4[c].drawCarLeft();
        carsRow4[c].moveLeft();
        if(carsRow4[c].getXPosition() <= -50){
            carsRow4[c].resetLeft();
        }
    }

    //row 5
    for(let c=0; c<5; c++){
        carsRow5[c].drawCarRight();
        carsRow5[c].moveRight();
        if(carsRow5[c].getXPosition() >= canvas.width){
            carsRow5[c].reset();
        }
    }
    
    //row1
    for(var i = 0; i < carsRow1.length; i++){
        if(animal.containsPoint(carsRow1[i].getXPosition(),carsRow1[i].getYPosition(), carsRow1[i].getLength(), carsRow1[i].getWidth())){
            /*
            animal.drawSplat();
            window.setTimeout(myFunction, 90);
            */
            window.open("deadPig.html", "_self");
            break;
        }        
    }

    //row2
    for(var i = 0; i < carsRow2.length; i++){
        if(animal.containsPoint(carsRow2[i].getXPosition(),carsRow2[i].getYPosition(), carsRow2[i].getLength(), carsRow2[i].getWidth())){
            /*
            animal.drawSplat();
            window.setTimeout(myFunction, 90);
            */
            window.open("deadPig.html", "_self");
            break;
        }        
    }

    //row3
    for(var i = 0; i < carsRow3.length; i++){
        if(animal.containsPoint(carsRow3[i].getXPosition(),carsRow3[i].getYPosition(), carsRow3[i].getLength(), carsRow3[i].getWidth())){
            /*
            animal.drawSplat();
            window.setTimeout(myFunction, 90);
            */
            window.open("deadPig.html", "_self");
            break;
        }        
    }

    //row4
    for(var i = 0; i < carsRow4.length; i++){
        if(animal.containsPoint(carsRow4[i].getXPosition(),carsRow4[i].getYPosition(), carsRow4[i].getLength(), carsRow4[i].getWidth())){
            /*
            animal.drawSplat();
            window.setTimeout(myFunction, 90);
            */
            window.open("deadPig.html", "_self");
            break;
        }        
    }

    //row5
    for(var i = 0; i < carsRow2.length; i++){
        if(animal.containsPoint(carsRow5[i].getXPosition(),carsRow5[i].getYPosition(), carsRow5[i].getLength(), carsRow5[i].getWidth())){
            /*
            animal.drawSplat();
            window.setTimeout(myFunction, 90);
            */
            window.open("deadPig.html", "_self");
            break;
        }        
    }

}

function myFunction(){
    window.open("deadPig.html", "_self");
}

function clearScreen(){
    ctx.fillStyle = "OliveDrab";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

document.body.addEventListener('keydown', keyDown)
document.body.addEventListener('keyup', keyUp)


function keyDown(event){
    if(event.keyCode == 40){
        downPress = true;
        animal.y+=speed;
    }
    if(event.keyCode == 38){
        upPress = true;
        animal.y-=speed;
    }
    if(event.keyCode == 39){
        rightPress = true;
        animal.x+=speed;
    }
    if(event.keyCode == 37){
        leftPress = true;
        animal.x-=speed;
    }
    
}

function keyUp(event){
    if(event.keyCode == 40){
        downPress = false;
        canMove = true;
    }
    if(event.keyCode == 38){
        upPress = false;
        canMove = true;
    }
    if(event.keyCode == 39){
        rightPress = false;
        canMove = true;
    }
    if(event.keyCode == 37){
        leftPress = false;
        canMove = true;
    }
}

drawGame()

//setInterval(drawGame, 1000/60)


