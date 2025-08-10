const speed = 8;
let canvasHeight = 150;

function setup() {
  if (windowWidth <= 960) {
    canvasHeight = 80;
  }
  createCanvas(windowWidth, canvasHeight, document.querySelector('#p5canvas'));
}

function draw() {
  colorMode(HSB);
  background(0, 0, 100);
  for (let i = 0; i < 5; i++) {
    stroke(225, 51 - i * 10, 100);
    for (let x = 0; x < windowWidth; x += 10) {
      const nx = (frameCount / speed + x) * 0.005;
      const ny = (frameCount / speed + x) * 0.0005 + 10 * i;
      const y = noise(nx, ny) * canvasHeight;
      circle(x, y, 1);
    }
  }
}
