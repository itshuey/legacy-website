// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
ctx.fillRect(0,0,width,height);

// make internal link smooth

let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { 
    item.addEventListener('click', (e)=> {
        let val = item.getAttribute('href')
        let target = document.querySelector(val)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, val)
        e.preventDefault()
    })
}

// set up initial animation

function updateY(){
  if (y < this.height/2){
    y = y*1.3;
  } else if (y < this.height){
    y = y*1.04;
  }

}

y = 1;


function loop() {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.fillRect(0,0,width,height);

  ctx.fillStyle = 'rgb(0, 118, 57)';
  ctx.fillRect(0,0,width,y);

  updateY();
  requestAnimationFrame(loop);
}

loop();

// this is to smooth out speed, exponentially
var delayInMilliseconds = 200; 

setTimeout(function() {
  loop();
}, delayInMilliseconds);


setTimeout(function() {
  document.getElementById( 'top' ).scrollIntoView({ behavior: 'smooth' });  
}, 1000);








