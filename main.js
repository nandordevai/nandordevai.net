import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
const canvas = renderer.domElement;
document.body.appendChild(canvas);
const pixelRatio = window.devicePixelRatio;
const canvasWidth = canvas.clientWidth * pixelRatio | 0;
const canvasHeight = canvas.clientHeight * pixelRatio | 0;
renderer.setSize(canvasWidth, canvasHeight, false);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvasWidth / canvasHeight, 0.1, 1000);

const cube = new THREE.Object3D();
scene.add(cube);
for (let i = -0.5; i <= 0.5; i += 0.1) {
    const geometry = new THREE.PlaneGeometry(1, Math.cos(i * 2));
    const edges = new THREE.EdgesGeometry(geometry);
    const edgesMaterial = new THREE.LineBasicMaterial({
        color: 0x00ff00
    });
    const wireframe = new THREE.LineSegments(edges, edgesMaterial);
    wireframe.position.z = i;
    cube.add(wireframe);
}

const landscape = new THREE.Object3D();
scene.add(landscape);
const material = new THREE.LineBasicMaterial({ color: 0x3333ff });
for (let i = 0; i < 50; i++) {
    const points = [];
    points.push(new THREE.Vector3(-10, 5, i));
    points.push(new THREE.Vector3(-10, -5, i));
    points.push(new THREE.Vector3(10, -5, i));
    points.push(new THREE.Vector3(10, 5, i));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    landscape.add(line);
}
landscape.position.z = -50;

camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.009;
    cube.rotation.y += 0.011;
    landscape.position.z += 0.1;
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);