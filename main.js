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

class Letter {
    #points = [];

    constructor(points) {
        this.#points = [[0, 0]];
        this.#points.push(...points);
        this.#points.push([0, 0]);
    }

    get width() {
        const width = this.#points.reduce((acc, curr) => {
            if (curr[0] > acc) {
                acc = curr[0];
            }
            return acc;
        }, 0);
        return width;
    }

    render() {
        const lPoints = this.#points.map(([x, y]) => {
            return new THREE.Vector3(x, y, 0);
        });
        const lGeometry = new THREE.BufferGeometry().setFromPoints(lPoints);
        return new THREE.Line(lGeometry, lightMaterial);
    }
}

const loadingText = [
    [
        [1, 0],
        [1, 5],
        [0, 5],
    ],
    [
        [3, 0],
        [3, 3],
        [0, 3],
    ],
    [
        [3, 0],
        [3, 3],
        [0, 3],
        [0, 2],
        [2, 2],
        [0, 2],
    ],
    [
        [3, 0],
        [3, 5],
        [2, 5],
        [2, 3],
        [0, 3],
    ],
    [
        [1, 0],
        [1, 3],
        [0, 3],
    ],
    [
        [1, 0],
        [1, 2],
        [2, 2],
        [2, 0],
        [3, 0],
        [3, 3],
        [0, 3],
    ],
    [
        [2, 0],
        [2, -1],
        [0, -1],
        [0, -2],
        [3, -2],
        [3, 3],
        [0, 3],
    ]
];

let x = 0;
loadingText.forEach(points => {
    const letter = new Letter(points);
    const line = letter.render();
    line.translateX(x);
    line.translateZ(-10);
    line.translateX(-11);
    landscape.add(line);
    x += letter.width + 1;
});


landscape.position.z = -50;

camera.position.z = 5;

let l = 0;
let speed = 0.1;

function animate() {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    cube.rotation.x += 0.009;
    cube.rotation.y += 0.011;
    landscape.position.z += speed;
    if (landscape.position.z > 0) {
        speed = 0;
        l += 0.01;
        scene.background = new THREE.Color().setRGB(l, l, l);
        if (l > 1) {
            location.href = '/about';
        }
    }
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);