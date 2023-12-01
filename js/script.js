//create scene
const scene = new THREE.Scene();

//create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//define position
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();

// seen hight width set
renderer.setSize(window.innerWidth, window.innerHeight);

//basic canvas add in html page
document.body.appendChild(renderer.domElement);

//light ambientLight
// const ambientLight = new THREE.AmbientLight(0xffffff,0.2)
// scene.add(ambientLight)

// Width: The width of the box along the x-axis.
// Height: The height of the box along the y-axis.
// Depth: The depth of the box along the z-axis.
// const geometry = new THREE.BoxGeometry(1, 1, 1);

// CapsuleGeometry(radius : Float, length : Float, capSegments : Integer, radialSegments : Integer)
// const geometry = new THREE.CapsuleGeometry(1, 1, 5, 8);

// CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)
// const geometry = new THREE.CircleGeometry(2,16);

// ConeGeometry(radius : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)
// const geometry = new THREE.ConeGeometry(2, 2, 32);

// CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)
// const geometry = new THREE.CylinderGeometry(2, 2, 2, 32);

const material = new THREE.MeshBasicMaterial({ color: "red" });
// const cube = new THREE.Mesh(geometry, material);

//line mesh
const cube = new THREE.Line(geometry, material);

scene.add(cube);

let q = 0;
animate();

function animate() {
  cube.position.x = 5 * Math.sin((q += 0.01));

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
