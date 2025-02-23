import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import '../App.css';

const RotatingShowroom = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(new THREE.WebGLRenderer({ antialias: true, alpha: true }));
  const cameraRef = useRef(new THREE.PerspectiveCamera(75, 1, 0.1, 1000));
  const sceneRef = useRef(new THREE.Scene());
  const modelsRef = useRef([]); // Store loaded models
  const radius = 2; // Radius of the circle

  const modelConfigs = [
    { 
      path: '../models/drone.glb', 
      scale: 0.004, 
      rotation: Math.PI / 2, 
      pose: { x: Math.PI / 1.9, y: Math.PI / 2.5, z: Math.PI / 5 },// Offsets
      positionOffset: { x: 0, y: 0, z: 0 } // Offsets
    }, 
    { 
      path: '../models/pillar.glb', 
      scale: 1.3, 
      rotation: 0, 
      pose: { x: Math.PI / 30, y: 0, z: 0 },
      positionOffset: { x: 0, y: -0.5, z: 0 } 
    }, 
    { 
      path: '../models/guitar.glb', 
      scale: 0.3, 
      rotation: -Math.PI / 4, 
      pose: { x: Math.PI / 5.5, y: 11+Math.PI / 2, z: 0 },
      positionOffset: { x: 0, y: -1, z: 0 } 
    },
  ];
  

  useEffect(() => {
    const container = containerRef.current;
    const { clientWidth, clientHeight } = container;

    // Set up the renderer
    rendererRef.current.setSize(clientWidth, clientHeight);
    container.appendChild(rendererRef.current.domElement);

    // Set up the camera
    cameraRef.current.aspect = clientWidth / clientHeight;
    cameraRef.current.updateProjectionMatrix();
    cameraRef.current.position.z = 5;

    // Set up lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    sceneRef.current.add(ambientLight);
    sceneRef.current.add(dirLight);

    // Load models once
    const loader = new GLTFLoader();

    const loadModels = () => {
      const loadPromises = modelConfigs.map(config =>
        new Promise((resolve, reject) => {
          loader.load(config.path, gltf => resolve({ model: gltf.scene, config }), undefined, reject);
        }))
      ;

      return Promise.all(loadPromises);
    };
    loadModels().then(modelDataArray => {
        // Clear previously loaded models if any
        modelsRef.current.forEach(model => sceneRef.current.remove(model));
        modelsRef.current = []; // Reset modelsRef
      
        modelDataArray.forEach(({ model, config }) => {
          const { scale, rotation, pose, positionOffset } = config;
      
          // Scale the model
          model.scale.set(scale, scale, scale);
          
          // Set initial rotation (including pose)
          model.rotation.set(pose.x, pose.y, pose.z); // add pose rotation
          model.rotation.y += rotation; // add additional offset rotation
      
          // Position the model in a circle
          const angle = (modelsRef.current.length / modelConfigs.length) * (Math.PI * 2);
          const radius = 1; // Radius of the circle
          model.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      
          // Apply position offsets
          model.position.x += positionOffset.x;
          model.position.y += positionOffset.y;
          model.position.z += positionOffset.z;
      
          // Log the final position for debugging
        //   console.log(`Model Position (after offsets):`, model.position);
      
          modelsRef.current.push(model); // Store loaded model
          sceneRef.current.add(model); // Add models to the scene
        });
      

        const animate = () => {
            requestAnimationFrame(animate);
          
            modelsRef.current.forEach((model, index) => {
              const config = modelConfigs[index]; // Get corresponding config
              const baseAngle = (index / modelsRef.current.length) * (Math.PI * 2);
              const rotationSpeed = performance.now() * 0.001;
          
              // Compute new position
              const angle = -(rotationSpeed + baseAngle) % (Math.PI * 2);
              const radius = 2;
              
              model.position.set(
                Math.cos(angle) * radius + config.positionOffset.x, // add X offset
                config.positionOffset.y, // add pose offset (height adjustment)
                Math.sin(angle) * radius + config.positionOffset.z // add Z offset
              );
          
              model.rotation.y = angle + config.pose.y; // make proper rotation
            });
          
            rendererRef.current.render(sceneRef.current, cameraRef.current);
          };

      animate();
    }).catch(error => {
      console.error('Error loading models:', error);
    });

    return () => {
      container.removeChild(rendererRef.current.domElement);
      // Clean up models from the scene
      modelsRef.current.forEach(model => sceneRef.current.remove(model));
      modelsRef.current = []; // Clear models reference
    };
  }, []);

  return <div className="model-view" ref={containerRef} />;
};

export default RotatingShowroom;
