window.onload = function() {
  animate();
};

var canvas = document.getElementById("myCanvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext("2d");
//rect
// c.fillStyle = "rgba(255,0,0,.5)";
// c.fillRect(100,100,100,100);
// c.fillStyle = "rgba(0,255,0,.5)";
// c.fillRect(200,100,100,100);
// c.fillStyle = "rgba(0,0,255,.5)"
// c.fillRect(500,400,100,100);

// //line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "#fa34a3"
// c.stroke();

// //circle
// c.beginPath();
// c.arc(300,300,50, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

var x = 300;
var dx = 8;
function animate() {
  c.beginPath();
  c.clearRect(0, 0, canvas.height, canvas.width);
  c.arc(x, 300, 50, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();
  if (x > window.innerWidth) {
    dx = -dx;
  } else if (x < 0) {
    dx = -dx;
  }
  x = x + dx;
  requestAnimationFrame(animate);
}
