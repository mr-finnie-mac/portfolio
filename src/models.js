// export default function RenderModels()
// {
//     return(
//         <div>
//             <div className = "model">
//                 <iframe src="https://hotmail52327.autodesk360.com/shares/public/SH9285eQTcf875d3c5392f619ed6c567a5f0?mode=embed" 
//                 width="640" height="480" allowFullScreen={false} webkitallowfullscreen="false" mozallowfullscreen="false"></iframe>
//             </div>
//         </div>
//     );
// }
import React from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useGLTF, Stage, PresentationControls} from "@react-three/drei";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { MyModel } from "./Model";

// function Box() {
//     return (
//     <mesh>
//         <boxBufferGeometry attach ="geometry" />
//         <meshLambertMaterial attach="material" color="hotpink" />
//         </mesh>
//         )
//     }

function Model(props){

    // const obj = useLoader(OBJLoader, './src/models/NavQPlus_shell.obj')
    // return <primitive object={obj} />
  
    const {scene} = useGLTF("./src/models/model.glb");
    return <primitive object={scene} {...props} /> 
}


export default function MakeModels() {
    return (
    <div className="model-showroom">
        <div className="model">
            <Canvas dpr={[1,2]} shadows camera={{fav: 45}} style={{"position": "absolute"}}>
                <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                    <Stage environment={null}>
                        <Model scale={0.01} />
                    </Stage>
                </PresentationControls>
            </Canvas>
        </div> 
    </div>
);}

// export default function MakeModels() {
//     return (
//     <div className="App">
//         <div className="App-header">
//             <Canvas>
//                 <OrbitControls />
//                 <ambientLight intensity ={0.5} />
//                 <spotLight position={[10, 15,10]} angle={0.3} />
//                 <Box />
//                 </Canvas>
//         </div>
//     </div>
//     );
// }