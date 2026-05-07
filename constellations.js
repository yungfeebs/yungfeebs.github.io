const constellationFiles = [
  'curse.png',
  'see.png',
  'space.png',
  'hour.png',
  'honse.png',
  'stars.png',
  'twos.png',
  'shootingstar.gif',
  'you.png',
  'camelo.png',
  'deuces.png',
  'fox.png',
  'meow.png',
  'minusra.png'
];

const constellationConfig = {
  imageDir: 'assets/constellations',
  maxWidth: 1000,
  visibleCount: 3
};

function getConstellationLayer() {
  let layer = document.getElementById('constellation-layer');
  if (!layer) {
    layer = document.createElement('div');
    layer.id = 'constellation-layer';
    layer.className = 'constellation-layer';
    const back = document.querySelector('.back');
    if (back && back.parentNode) {
      back.parentNode.insertBefore(layer, back);
    } else {
      document.body.appendChild(layer);
    }
  }
  return layer;
}

function pickRandomFiles(files, count) {
  const pool = [...files];
  const picked = [];
  while (picked.length < count && pool.length) {
    const index = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(index, 1)[0]);
  }
  return picked;
}

function randomSideLeft() {
  const onLeft = Math.random() < 0.5;
  if (onLeft) {
    return `${-10 + Math.random() * 10}%`;
  }
  return `${70 + Math.random() * 10}%`;
}

const backgroundParallaxRate = 0.02;
const constellationParallaxRate = -0.08;

function placeConstellations() {
  const layer = getConstellationLayer();
  layer.innerHTML = '';

  const files = pickRandomFiles(constellationFiles, constellationConfig.visibleCount);
  files.forEach((fileName, index) => {
    const img = document.createElement('img');
    img.className = 'constellation-image';
    img.src = `${constellationConfig.imageDir}/${fileName}`;
    img.alt = fileName;
    img.style.left = randomSideLeft();

    const segmentStart = index * (100 / constellationConfig.visibleCount);
    const segmentHeight = 100 / constellationConfig.visibleCount;
    const topPercent = segmentStart -20 + Math.random() * (segmentHeight - 10);
    img.style.top = `${topPercent}%`;

    img.style.maxWidth = `${constellationConfig.maxWidth}px`;
    layer.appendChild(img);
  });

  window.constellationFiles = files;
}

function updateParallax() {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  document.documentElement.style.backgroundPosition = `center ${-scrollY * backgroundParallaxRate}px`;
  const layer = document.getElementById('constellation-layer');
  if (layer) {
    layer.style.transform = `translateY(${scrollY * constellationParallaxRate}px)`;
  }
}

window.constellationFiles = constellationFiles;
window.constellationConfig = constellationConfig;
window.placeConstellations = placeConstellations;

window.addEventListener('scroll', updateParallax, { passive: true });
window.addEventListener('resize', updateParallax);
window.addEventListener('load', () => {
  placeConstellations();
  updateParallax();
});
