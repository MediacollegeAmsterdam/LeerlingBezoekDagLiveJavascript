const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function animate(){
  requestAnimationFrame(animate);
  // Schrijf hier je eigen code

  // De regel hieronder mag je weghalen
  console.log("animate!");
}

animate();

