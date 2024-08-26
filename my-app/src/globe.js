import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import earthTextureImg from './globemap.jpg'

const Globe = () => {
  const globeRef = useRef(null);
  const width = 450; 
  const height = 400; 

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1.8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width*2.2, height*1.3);
    globeRef.current.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    // Create the globe
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(earthTextureImg); 

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: earthTexture });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Animate the globe
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resizing
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
        globeRef.current.removeChild(renderer.domElement);
      };
  }, []);

  return <div ref={globeRef} />;
};

export default Globe;
