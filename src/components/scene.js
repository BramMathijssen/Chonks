import React, { Component } from "react";
import * as THREE from "three";

const scene = new THREE.Scene();
const camera =  new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight)

// this.mount.appendChild(this.renderer.domElement);

class Home extends Component {
  render() {
    return (
        
      <React.Fragment>
      </React.Fragment>
    );
  }
}

export default Home;