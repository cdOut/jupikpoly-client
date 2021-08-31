import * as THREE from './modules/three.module.js'

//// BASIC SETUP ////

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)

//// RENDERER ////

const renderer = new THREE.WebGLRenderer({
    antialias : true 
})

renderer.setSize( 
    window.innerWidth,
    window.innerHeight
)

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

//// SCENE ////

const axes = new THREE.AxesHelper( 1000 )
scene.add( axes )

const light = new THREE.AmbientLight( 0xffffff )
scene.add( light )

const geometry = new THREE.PlaneGeometry( 1000, 1000 )
const material = new THREE.MeshBasicMaterial({
    color : 0xffff00,
    side: THREE.DoubleSide
})


const plane = new THREE.Mesh( geometry, material )
plane.rotateX(  Math.PI / 2 )
scene.add(plane)

camera.position.set( 100, 100, 100 )
camera.lookAt( scene.position )


//// HTML SETUP ////

window.addEventListener('resize', e => {
    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    )
    
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
})

document.querySelector( "#root" ).appendChild ( 
    renderer.domElement
)


//// RENDER ////

// for now: there is a temporary animations, only for 

let x=0
function render () {
    requestAnimationFrame( render )
    renderer.render( scene, camera )
    // plane.rotation.x += 0.1 * Math.sin(x/10)
    // plane.rotation.z += 0.1 * Math.sin(x/10)
    // plane.rotation.y += 0.1 * Math.sin(x/10)
    x+=1
}

render()
