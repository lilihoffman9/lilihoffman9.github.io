const canvas2 = document.getElementById("deadGoat2")
const ctx2 = canvas2.getContext("2d")
let x = 200;
let y = 250;
let l = 400;
let w = 80;

let button = new replayGameButton(x,y,l,w);

function drawGame(){
    button.drawButton(x,y,l,w);
    ctx2.font = "25px Georgia";
    ctx2.fillStyle = "white";
    ctx2.fillText("Click spacebar to replay game!", 235, 300);
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        window.open("goatLevel2.html", "_self")
    }
}

drawGame();
