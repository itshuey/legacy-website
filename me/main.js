// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
ctx.fillRect(0,0,width,height);

// set up initial animation
y = 5;
v = 1.05;
a = 0;

function updateY(){
  if (y < this.height/3){
    y = (v+a)*y;
    if (a < 5){
      a += 0.01;
    }
  } else if (y < 2*this.height/3){
    y = (v+a)*y;
    if (a > 0){
       a -= 0.08;
    }
  } else if (y < this.height){
    y = (v+a)*y;
    if (a > -0.04){
       a -= 0.008;
    }
  }
}



function loop() {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.fillRect(0,0,width,height);

  ctx.fillStyle = 'rgb(0, 118, 57)';
  ctx.fillRect(0,0,width,y);

  updateY();
  requestAnimationFrame(loop);
}

loop();


setTimeout(function() {
  document.getElementById( 'top' ).scrollIntoView({ behavior: 'smooth', block: 'start' });  
}, 1000);








