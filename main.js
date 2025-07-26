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
const color = 0x000000;
const near = 10;
const far = 70;
scene.fog = new THREE.Fog(color, near, far);

const cube = new THREE.Object3D();
scene.add(cube);
cube.position.y = -2;

const edgesMaterial = new THREE.LineBasicMaterial({
    color: 0x00ff00
});
for (let i = -0.5; i <= 0.5; i += 0.1) {
    const geometry = new THREE.PlaneGeometry(1, Math.cos(i * 2));
    const edges = new THREE.EdgesGeometry(geometry);
    const wireframe = new THREE.LineSegments(edges, edgesMaterial);
    wireframe.position.z = i;
    cube.add(wireframe);
}

const landscape = new THREE.Object3D();
scene.add(landscape);
const darkBlue = 0x3333ff;
const lightBlue = 0x9999ff;
const darkMaterial = new THREE.LineBasicMaterial({ color: darkBlue });
const lightMaterial = new THREE.LineBasicMaterial({ color: lightBlue })
const points = [
    new THREE.Vector2(-10, 5),
    new THREE.Vector2(-10, 0),
    new THREE.Vector2(-9, -2),
    new THREE.Vector2(-9, -5),
    new THREE.Vector2(-8, -7)
];
for (let i = 0; i < 50; i++) {
    const landscapePoints = points
        .map(p => new THREE.Vector3(p.x, p.y, i))
        .concat(
            points.map(p => new THREE.Vector3(-p.x, p.y, i)).reverse()
        );
    const lGeometry = new THREE.BufferGeometry().setFromPoints(landscapePoints);
    const line = new THREE.Line(lGeometry, darkMaterial);
    landscape.add(line);

    const curve = new THREE.QuadraticBezierCurve(
        new THREE.Vector2(-9, -4),
        new THREE.Vector2(i / 5 - 5, -8 + Math.random() / 2),
        new THREE.Vector2(9, -4)
    );
    const curvePoints = curve.getPoints(5);
    const cGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const curveObject = new THREE.Line(cGeometry, lightMaterial);
    curveObject.position.z = i;
    landscape.add(curveObject)
}
landscape.position.z = -50;

camera.position.z = 5;

function animate() {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    cube.rotation.x += 0.009;
    cube.rotation.y += 0.011;
    landscape.position.z += 0.1;
    if (landscape.position.z > 0) {
        landscape.position.z = -100;
    }
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);