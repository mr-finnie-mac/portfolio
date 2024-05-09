import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import '../App.css';

const RotatingModel = () => {
  const containerRef = useRef(null);
  const renderer = useRef(new THREE.WebGLRenderer({ antialias: true, alpha: true })); // Set alpha to true for transparency
  const camera = useRef(new THREE.PerspectiveCamera(75, 1, 0.1, 1000)); // Aspect ratio initially set to 1
  const scene = useMemo(() => new THREE.Scene(), []);

  const customModel = useMemo(() => {
    const loader = new GLTFLoader();
    return new Promise((resolve, reject) => {
      loader.load(
        '../modern_arm_chair_01_1k/modern_arm_chair_01_1k.gltf', // '../drone.glb',
        gltf => resolve(gltf.scene),
        undefined,
        reject
      );
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const { clientWidth, clientHeight } = container;
    renderer.current.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.current.domElement);

    const currentRenderer = renderer.current;

    customModel.then(model => {
      scene.add(model);
    });

    // Update camera aspect ratio to match container's aspect ratio
    camera.current.aspect = clientWidth / clientHeight;
    camera.current.updateProjectionMatrix();

    const dirLight = new THREE.DirectionalLight(0xffffff, ); // Soft white light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft white light
    scene.add(ambientLight);
    scene.add(dirLight);
    camera.current.position.z = 1.8;
    camera.current.position.y = 0.5;

    const animate = () => {
        requestAnimationFrame(animate);
        customModel.then(model => {
          if (model) {
            // model.rotation.x += 0.001;
            model.rotation.y += 0.001;
          }
        });
        currentRenderer.render(scene, camera.current);
      };
  
      animate();
  
      return () => {
        container.removeChild(currentRenderer.domElement);
      };
    }, [scene, customModel]);
  
    return <div className="model-view" ref={containerRef} />;

  };

export default RotatingModel;
