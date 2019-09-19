const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function animate(){
  requestAnimationFrame(animate)
  context.beginPath();
  context.arc(getRandom(canvas.width),getRandom(canvas.height),10,0,Math.PI*2);
  context.fillStyle = "red";
  context.stroke();
  context.fill();
  context.closePath();
}

animate()

function getRandom(max){
  return Math.floor(Math.random()*max)
}
