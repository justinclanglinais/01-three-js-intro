import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import checker from './checkerboard.png'
class App extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1.2, 0.8 );
    var material = new THREE.MeshStandardMaterial( { color: 0x00ff00, bumpMap: checker } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    scene.add( light );
    camera.position.z = 2;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.02;
      cube.rotation.z += 0.02;
      renderer.render( scene, camera );
    };
    animate();
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;