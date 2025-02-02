import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';


import birdScene from '../assets/3d/bird.glb';
import { useFrame } from '@react-three/fiber';


const Bird:React.FC = () => {

    const {scene, animations} = useGLTF(birdScene);
    const birdRef = useRef<THREE.Mesh>(null);

    const { actions } = useAnimations(animations,birdRef);

    useEffect(()=>{
        actions['Take 001']?.play();
    },[]);

    useFrame(({clock,camera})=>{
       //update the Y position that simulate the flight of the bird in sin wave fashion 
       if(birdRef.current)
       birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

       //check if the bird reached a certain endpoint realtive to the camera.
       if(birdRef.current && birdRef.current.position.x > camera.position.x+10){
        //change direction backward and rotate the bird 180 degree on the y axis
              birdRef.current.rotation.y = Math.PI;
       }else if(birdRef.current && birdRef.current.position.x<camera.position.x-10){
        //change direction to forward and reset the rotation of the bird
           birdRef.current.rotation.y=0;
       }

       //update the x and z position based on the direction
       if(birdRef.current && birdRef.current.rotation.y === 0){
        //moving forward
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
       }else{
            //moving backward
            if(birdRef.current){
                birdRef.current.position.x -= 0.01;
                birdRef.current.position.z += 0.01;
            }
       }
    })



    return(
        <mesh ref={birdRef} position={[-5,2,1]} scale={[0.003,0.003,0.003]}> 
            <primitive object={scene}/>
        </mesh>
    )
}

export default Bird;