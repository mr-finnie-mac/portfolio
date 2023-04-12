import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const loader = new GLTFLoader();

const loadedData = await loader.loadAsync('/bmw.glb');

