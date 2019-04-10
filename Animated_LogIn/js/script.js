var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var active = false;

document.addEventListener("mousemove",onMouseUpdate,false);

var posX,posY;

ellipse(ctx,150,75,100,75);



function ellipse(context,cx,cy,rx,ry){
  context.save();

  context.beginPath();

  context.translate(cx-rx,cy-ry);
  context.scale(rx,ry);
  context.arc(1,1,1,0,2 * Math.PI, false);


  context.fillStyle = "#F08080";
  context.fill();
  context.restore();
  context.strokeStyle = "#8b0000";
  context.stroke();

  context.closePath();
}

function robot(context,x,y){

    context.beginPath();
    context.moveTo(x+61,y+120);
    context.lineTo(x+61,y+75);
    context.lineTo(x+120,y+75);
    context.lineTo(x+120,y+65);
    context.lineTo(x+80,y+65);
    context.lineTo(x+80,y+35);
    context.lineTo(x+200,y+35);
    context.lineTo(x+200,y+65);
    context.lineTo(x+160,y+65);
    context.lineTo(x+160,y+75);
    context.lineTo(x+220,y+75);
    context.lineTo(x+220,y+120);
    context.strokeStyle = "#8b0000";
    context.fillStyle = "white";
    context.fill();
    context.stroke();
    context.closePath();

    augen(context);
    mund(context);

   function augen(context) {
     linkeAuge(context);
     rechteAuge(context);
  }
    function  pupielle (context,x,y) {
    context.beginPath();
     if(posX <= (window.innerWidth / 2) && posY <= (window.innerHeight / 2)){ x=x-2; y = y-2;}
     else if (posX <= ((window.innerWidth / 2)-100) && posY >= (window.innerHeight / 2)){ x=x-2; y = y+2;}
     else if (posX >= ((window.innerWidth / 2)+100) && posY >= (window.innerHeight / 2)){ x=x+2; y = y+2;}
     else if ((posX <= ((window.innerWidth / 2)+100) && posX >= ((window.innerWidth / 2)-100)) && posY >= (window.innerHeight / 2)){ x=x; y = y+2;}
     else if (posX >= (window.innerWidth / 2) && posY <= (window.innerHeight / 2)){ x=x+2; y = y-2;}

    context.arc(x,y,2,0,2 * Math.PI,false);
    context.fillStyle = "black";
    context.fill();
    context.restore();
    context.stroke();
    context.closePath();
  }
  function linkeAuge(context) {
    //Linke Auge
    context.beginPath();
    context.arc(120,50,10,0,2*Math.PI,false);
    context.strokeStyle = "#8b0000";
    context.stroke();
    context.restore();
    context.closePath();

    pupielle(context,120,50);
  }

  function rechteAuge(context) {
    //Linke Auge
    context.beginPath();
    context.arc(180,50,10,0,2*Math.PI,false);
    context.strokeStyle = "#8b0000";
    context.stroke();
    context.restore();
    context.closePath();
    pupielle(context,180,50);
  }
   function mund (context){
    context.beginPath();
    context.clearRect(129,56,42,8)
    if(active){
      context.moveTo(130,63);
      context.lineTo(170,63);
      context.lineTo(170,57);
      context.lineTo(130,57);
      context.lineTo(130,63);
    } else {
      context.moveTo(130,60);
      context.lineTo(170,60);
    }


    context.strokeStyle = "#8b0000";
    context.stroke();
    context.closePath();

  }
  robot.prototype.pupielle1 = function(context ,x,y) {
      pupielle(context,x,y);
  }
  robot.prototype.mundAuf = function(context){
    mund(context);
  }
}
var robot = new robot(ctx,10,0);
document.getElementsByClassName('int_feld')[0].addEventListener("click",function(){
  active = true;
  robot.mundAuf(ctx);
},false);
document.getElementsByClassName('int_feld')[1].addEventListener("click",function(){
  active = false;
  robot.mundAuf(ctx);
},false);
document.getElementsByClassName('int_feld')[1].onfocus = function(){
  active = false;
  robot.mundAuf(ctx);
}
function onMouseUpdate(e) {
  posX = e.pageX;
  posY = e.pageY;

  ctx.clearRect(115,45,10,10);
  robot.pupielle1(ctx,120,50);
  ctx.clearRect(175,45,10,10);
  robot.pupielle1(ctx,180,50);
}
