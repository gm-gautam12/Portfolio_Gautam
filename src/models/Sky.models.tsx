import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import skyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";

type skyprops = {
    isRotating:boolean;
}


const Sky = ({isRotating}:skyprops) => {

    const sky = useGLTF(skyScene);
    const skyRef = useRef<THREE.Mesh>(null);

    useFrame((_,delta)=>{
        if(isRotating){
            if(skyRef.current)
            skyRef.current.rotation.y += 0.25 * delta;
        }
    })

    return(
        <mesh ref={skyRef}>
             {/* this is used to render threejs object */}
            <primitive object={sky.scene}/>
        </mesh>
    )
}


export default Sky;