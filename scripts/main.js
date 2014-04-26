var speed = 5;
var angle = 0;
//var debug = true;
var debug = false;
var level = [[3, 3, 3, 5, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]];

(function init(){
    //Setup
    clock = new THREE.Clock();
    keyboard = new THREEx.KeyboardState();
    renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;
    document.body.appendChild(renderer.domElement);

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    stats.domElement.style.zIndex = 100;
    document.body.appendChild(stats.domElement);

    initScene();
    initCamera();
    initLight();
    initGeometry();
    initLevel();

    requestAnimationFrame(render);
    requestAnimationFrame(update);
})();

function initLevel(){
    var x = -Math.floor(level[0].length/2);
    var y = 0;
    var z = -Math.floor(level.length/2);

    for(var i=0; i<level.length; i++){
        x = -Math.floor(level[0].length/2);
        for(var j=0; j<level[0].length; j++){
            var height = level[i][j];
            var castShadow = true;
            createBox({x: x, y: height/2, z: z}, {w: 1, h: height+0.1, d: 1}, 0xbcadcc, castShadow, true);
            x++;
        }
        z++;
    }
}

function initScene(){
    scene = new THREE.Scene();
}

function initCamera(){
    camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
    camera.lookAt(scene.position);
    scene.add(camera);
}

function initLight(){
    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(-3, 12, 4);
    light.target.position.copy(scene.position);
    light.castShadow = true;
    light.shadowCameraLeft = -20;
    light.shadowCameraTop = 20;
    light.shadowCameraRight = 20;
    light.shadowCameraBottom = -20;
    light.shadowCameraNear = 4;
    light.shadowCameraFar = 35;
    light.shadowBias = -0.0001;
    light.shadowMapWidth = light.shadowMapHeight = 2048;
    light.shadowDarkness = 0.7;

    if(debug){
        light.shadowCameraVisible = true;
    }
    scene.add(light);
}

function initGeometry(){
    hero = createBox({ x: 0, y: 0.5, z: 0 }, { w: 1, h: 1, d: 1 }, 0x00ff00, true, true);
}

function createBox(position, size, color, castShadow, receiveShadow){
    var material = new THREE.MeshLambertMaterial({ color: color });
    var box = new THREE.Mesh(new THREE.BoxGeometry(size.w, size.h, size.d), material);
    box.position.set(position.x, position.y, position.z);
    box.castShadow = castShadow;
    box.receiveShadow = receiveShadow;
    scene.add(box);

    return box;
}

function render(){
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

function update(){
    requestAnimationFrame(update);
    var deltaSpeed = speed * clock.getDelta();

    updateCamera(deltaSpeed);
    stats.update();
}

function updateCamera(speed){
    if(keyboard.pressed('W')){
        hero.position.z -= speed;
    }
    if(keyboard.pressed('S')){
        hero.position.z += speed;
    }
    if(keyboard.pressed('A')){
        hero.position.x -= speed;
    }
    if(keyboard.pressed('D')){
        hero.position.x += speed;
    }
    if(keyboard.pressed('I')){
        hero.position.y += speed;
    }
    if(keyboard.pressed('K')){
        hero.position.y -= speed;
    }

    camera.position.z = hero.position.z + 8;
    camera.position.x = hero.position.x;
}
