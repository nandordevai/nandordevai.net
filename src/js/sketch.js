const speed = 8;

function setup() {
  createCanvas(windowWidth, 150, document.querySelector('#p5canvas'));
}

function draw() {
  colorMode(HSB);
  background(0, 0, 100);
  for (let i = 0; i < 5; i++) {
    stroke(225, 51 - i * 10, 100);
    for (let x = 0; x < windowWidth; x += 10) {
      const nx = (frameCount / speed + x) * 0.005;
      const ny = (frameCount / speed + x) * 0.0005 + 10 * i;
      const y = noise(nx, ny) * 150 + 25;
      circle(x, y, 1);
    }
  }
}
