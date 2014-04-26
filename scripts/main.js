var speed = 33;
var dirLookup = {
        'W' : { row: -1, col: 0, lastMove: new Date() },
        'S' : { row: 1, col: 0, lastMove: new Date() },
        'A' : { row: 0, col: -1, lastMove: new Date() },
        'D' : { row: 0, col: 1, lastMove: new Date() }
};
console.log(dirLookup);
var angle = 0;
//var debug = true;
var debug = false;
var level = [[3, 3, 3, 5, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7, 7, 3, 7, 3, 7, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, '3h', 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
             [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
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
    //Origin in WS is at the boards center
    originWS = [z, x];

    for(var i=0; i<level.length; i++){
        x = -Math.floor(level[0].length/2);
        for(var j=0; j<level[0].length; j++){
            var ch = level[i][j];
            var height = ch;

            if(ch.length > 0){
                height = parseInt(ch.charAt(0));
                heroArrPos = [i, j, height];
                hero.position.set(x, height+0.5, z);
            }
            createBox({x: x, y: height/2, z: z}, {w: 1, h: height+0.1, d: 1}, 0xbcadcc, true, true);
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
    hero = createBox({ x: -3, y: 3.5, z: 6 }, { w: 1, h: 1, d: 1 }, 0x00ff00, true, true);
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

function moveHero(dir){
    var row = dirLookup[dir].row;
    var col = dirLookup[dir].col;
    var now = new Date();
    if(now - speed > dirLookup[dir].lastMove){
        var heroRow = heroArrPos[0];
        var heroCol = heroArrPos[1];
        var heroHei = heroArrPos[2];
        var nextHei = level[heroRow+row][heroCol+col];

        if(nextHei <= heroHei){
            //Remove h from current pos
            level[heroRow][heroCol] = heroHei;
            //Assign it to next
            level[heroRow+row][heroCol+col] = nextHei + 'h';
            //Update hero pos
            heroArrPos[0] = heroRow+row;
            heroArrPos[1] = heroCol+col;
            heroArrPos[2] = nextHei;
            hero.position.set(hero.position.x+col, heroArrPos[2]+0.5, hero.position.z+row);
            dirLookup[dir].lastMove = now;
        }
    }
}

function updateCamera(speed){
    if(keyboard.pressed('W')){
        //hero.position.z -= speed;
        moveHero('W');
    }
    if(keyboard.pressed('S')){
        //hero.position.z += speed;
        moveHero('S');
    }
    if(keyboard.pressed('A')){
        //hero.position.x -= speed;
        moveHero('A');
    }
    if(keyboard.pressed('D')){
        //hero.position.x += speed;
        moveHero('D');
    }
    if(keyboard.pressed('I')){
        hero.position.y += speed;
    }
    if(keyboard.pressed('K')){
        hero.position.y -= speed;
    }

    camera.position.z = hero.position.z + 8;
    camera.position.y = hero.position.y + 6;
    camera.position.x = hero.position.x;
}
