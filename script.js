const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function animate(){
  requestAnimationFrame(animate)
  ctx.beginPath();
  ctx.arc(getRandom(canvas.width),getRandom(canvas.height),10,0,Math.PI*2);
  ctx.fillStyle = "red";
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

animate();

function getRandom(max){
  return Math.floor(Math.random()*max)
}
