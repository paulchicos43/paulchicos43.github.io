const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.dx = Math.random() * 2 - 1;
        this.dy = Math.random() * 2 - 1;
        this.color = getRandomColor();
    }
}

let particles = [];
for(let i = 0; i < 15; i++) {
    new_particle = new Particle();
    particles.push(new_particle);
}

let font_direction = 1;
const draw = function(timestamp) {
    const squareHeight = 20;
    const squareWidth = 20;
    context.clearRect(0,0,canvas.width,canvas.height+5);
    for(let i = 0; i < particles.length; i++) {
        context.save();
        context.translate(particles[i].x,particles[i].y);
        context.fillStyle = particles[i].color;

        context.fillRect(0,0,squareWidth,squareHeight);
        particles[i].x += particles[i].dx * 2;
        particles[i].y += particles[i].dy * 2;
        context.restore();


        if(particles[i].x > canvas.width || particles[i].x < 0) {
            particles[i].dx = -1 * particles[i].dx;
        }
        if(particles[i].y > canvas.height || particles[i].y < 0) {
            particles[i].dy = -1 * particles[i].dy;
        }
    }
    window.requestAnimationFrame(draw);
}
window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
draw();