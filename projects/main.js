// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
ctx.fillRect(0,0,width,height);

// make internal link smooth
// we probably replace this general case with just the cover case

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

  ctx.fillStyle = 'rgb(252, 44, 40)';
  ctx.fillRect(0,0,width,y);

  updateY();
  requestAnimationFrame(loop);
}

loop();

// time before starting animation
var delayInMilliseconds = 200; 

setTimeout(function() {
  loop();
}, delayInMilliseconds);


// only autoscroll if canvas is in view

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.bottom >= 0 
  );
}


function autoScroll(){
  if (isInViewport(canvas)){
    document.getElementById( 'top' ).scrollIntoView({ behavior: 'smooth' });
  }
}


setTimeout(function() {
  autoScroll();
}, 1000);