import { useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import planeScene from "../assets/3d/plane.glb";
import { useEffect, useRef } from 'react';



interface PlaneProps {
    isRotating: boolean;
}

const Plane = ({ isRotating, ...props }:PlaneProps) => {

    const ref = useRef<THREE.Mesh>(null);
    const { scene,animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations,ref);

    useEffect(()=>{
        if(isRotating){
            actions['Take 001']?.play();
        }else{
            actions['Take 001']?.stop();
        }
    },[actions,isRotating]);

    return(
        <mesh {...props} ref={ref}>
            <primitive object={scene}/>
        </mesh>
    )
}


export default Plane;   