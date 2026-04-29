const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
const particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function randomHue() {
  return Math.random() * 360;
}

function createFirework(x, y) {
  const hue = randomHue();
  const count = 80;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 4 + 2;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: Math.random() * 40 + 40,
      hue,
      size: Math.random() * 2 + 2,
      history: [{ x, y }],
      maxTrail: 8,
    });
  }
}

function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    const particle = particles[i];
    particle.history.push({ x: particle.x, y: particle.y });
    if (particle.history.length > particle.maxTrail) {
      particle.history.shift();
    }

    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vy += 0.08;
    particle.vx *= 0.99;
    particle.vy *= 0.99;
    particle.life -= 1;

    if (particle.life <= 0) {
      particles.splice(i, 1);
    }
  }
}

function drawParticles() {
  particles.forEach(particle => {
    const trailPoints = [...particle.history, { x: particle.x, y: particle.y }];
    trailPoints.forEach((point, index) => {
      const alpha = Math.max((index + 1) / trailPoints.length, 0) * Math.max(particle.life / 80, 0) * 0.85;
      ctx.fillStyle = `hsla(${particle.hue}, 100%, 75%, ${alpha})`;
      ctx.beginPath();
      ctx.arc(point.x, point.y, particle.size * (0.8 + (index + 1) / trailPoints.length), 0, Math.PI * 2);
      ctx.fill();
    });
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateParticles();
  drawParticles();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', resizeCanvas);
canvas.addEventListener('click', event => {
  createFirework(event.clientX, event.clientY);
});

resizeCanvas();
animate();
