// Initialize canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// Set base scaling for objects
x = canvas.width/8
y = 7*canvas.height/13

// Set initial yellow screen & text

ctx.fillStyle = 'rgb(251, 186, 0)';
ctx.fillRect(0,0,width,height);

// spell out huey. 

setTimeout(function() {
  ctx.font = "66px Roboto Mono";
  ctx.fillStyle = "white";
  ctx.textAlign = "left";
  ctx.fillText("h", x-20, y-42);
}, 900);

setTimeout(function() {
  ctx.font = "66px Roboto Mono";
  ctx.fillStyle = "white";
  ctx.textAlign = "left";
  ctx.fillText("u", x+20, y-42);
}, 1150);

setTimeout(function() {
  ctx.font = "66px Roboto Mono";
  ctx.fillStyle = "white";
  ctx.textAlign = "left";
  ctx.fillText("e", x+59, y-42);
}, 1400);

setTimeout(function() {
  ctx.font = "66px Roboto Mono";
  ctx.fillStyle = "white";
  ctx.textAlign = "left";
  ctx.fillText("y", x+99, y-42);
}, 1650);

setTimeout(function() {
  ctx.font = "66px Roboto Mono";
  ctx.fillStyle = "white";
  ctx.textAlign = "left";
  ctx.fillText(".", x+140, y-42);
}, 1900);


// create objects

// experiment with objects depending on x and y, proportional scaling???
// radius of x/2 should work
var reddot       = new Dot(x, y, 1800, 'rgb(252, 44, 40)');
var yellowdot    = new Dot(x+51, y, 1800, 'rgb(251, 186, 0)');
var browndot     = new Dot(x+102, y, 1800, 'rgb(95, 75, 57)');
var greendot     = new Dot(x+153, y, 1800, 'rgb(0, 118, 57)');

// Define the dots

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
	
	// scaling the brown dot a bit faster (its the last one)
	if (this.color == 'rgb(95, 75, 57)'){

	
	/*
	// deprecated settings (less gentle)
	  if (this.r > 300){
	    this.r = this.r*0.84
	  }

	  if (this.r > 25){
	    this.r = this.r*0.89
	  }
	*/
	  if (this.r > 800){
	    this.r = this.r*0.78;
	  } else if (this.r > 300){
            this.r = this.r*0.84;
          } else if (this.r > 100){
            this.r = this.r*0.88;
          } else if (this.r > 25){
            this.r = this.r*0.90;
          }
	
	} else {

	// scaling the rest of the dots
	  if (this.r > 800){
	    this.r = this.r*0.80;
	  } else if (this.r > 300){
            this.r = this.r*0.84;
          } else if (this.r > 100){
            this.r = this.r*0.89;
          } else if (this.r > 25){
            this.r = this.r*0.91;
          }
	}
    }
}



// Animate the dots!

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);
  ctx.font = "66px Roboto Mono";
  ctx.fillStyle = "white";
  ctx.textAlign = "left";
  ctx.fillText("huey.", x-20, y-42); 


  if (greendot.r < 300){
      browndot.update();
      browndot.draw(ctx);
  }

  if (reddot.r < 300){
      greendot.update();
      greendot.draw(ctx);
  }

  if (yellowdot.r < 300){
      reddot.update();
      reddot.draw(ctx);
  }

  yellowdot.draw(ctx);
  yellowdot.update();

  requestAnimationFrame(loop);
}


// time before starting animation
var delayInMilliseconds = 3000; 

setTimeout(function() {
  loop();
}, delayInMilliseconds);