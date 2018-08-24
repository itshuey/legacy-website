// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// Create Var

ctx.fillStyle = 'rgb(251, 186, 0)';
ctx.fillRect(0,0,width,height);

x = canvas.width/4
y = 1*canvas.height/2

var reddot       = new Dot(x-50, y+10, 1300, 'rgb(0, 118, 57)');

// Define the Dots
function Dot(x, y, r, color) {
    "use strict";
    
    // Set defaults
    this.x = (x === null) ? 0 : x;
    this.y = (y === null) ? 0 : y;
    this.r = (r === null) ? 0 : r;
    this.color = color;
    
    this.draw = function(ctx) {
        ctx.beginPath();
	ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fill();
    }

    this.update = function() {

      if (this.r > 300){

        this.r = this.r*0.92;

      } else if (this.r > 170){

        this.r = this.r*0.9;

      } else {

        this.r = this.r*0.5;
      }

    }
}



//Draw the circle as object

reddot.draw(ctx);


function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.fillRect(0,0,width,height);

  reddot.update();
  reddot.draw(ctx);

  requestAnimationFrame(loop);
}


// time before starting animation
var delayInMilliseconds = 1300; 

setTimeout(function() {
  loop();
}, delayInMilliseconds);
