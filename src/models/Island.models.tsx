import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import * as THREE from 'three';

import islandScene from '../assets/3d/island.glb';




type IslandProps = {
  isRotating: boolean;
  setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStage: React.Dispatch<React.SetStateAction<number | null>>;
};



const Island = ({isRotating, setIsRotating,setCurrentStage, ...props}: IslandProps) => {

  const islandRef = useRef<THREE.Group>(null);

  const {gl, viewport} = useThree();

  const { nodes, materials } = useGLTF(islandScene) as any;

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e:MouseEvent | TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = "touches" in e ? e.touches[0].clientX :(e as MouseEvent).clientX;

    lastX.current = clientX;
    
  }

  const handlePointerUp = (e: PointerEvent):void => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handlePointerMove = (e: PointerEvent | TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();

    //  if(isRotating){
    //   const clientX = e.touches ? e.touches[0].clientX:e.clientX;

    if (isRotating) {
      let clientX: number;

      if ("touches" in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
      } else if ("clientX" in e) {
        clientX = e.clientX;
      } else {
        return;
      }

    const delta = (clientX - lastX.current) / viewport.width;

    if (islandRef.current) {
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
    }

    lastX.current = clientX;

    rotationSpeed.current = delta * 0.01 * Math.PI;
  }
  }

  const handleKeyDown = (e:KeyboardEvent):void => {
    if(e.key === 'ArrowLeft'){
      if(!isRotating) setIsRotating(true);
      if(islandRef.current)
      islandRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125;
    }else if(e.key === 'ArrowRight'){
      if(!isRotating) setIsRotating(true);
      if(islandRef.current)
      islandRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  }

  const handleKeyUp = (e:KeyboardEvent):void => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
      setIsRotating(false);
    }
  }

  const handleTouchStart = (e: TouchEvent):void => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
     const clientX = e.touches[0].clientX;
     lastX.current = clientX;
  }

  const handleTouchEnd = (e: TouchEvent):void => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }



  useFrame(()=>{
    if(!isRotating){
      rotationSpeed.current *= dampingFactor;

      if(Math.abs(rotationSpeed.current)<0.001){
        rotationSpeed.current = 0;
      }
      if(islandRef.current)
      islandRef.current.rotation.y += rotationSpeed.current;
    }else{
      if (islandRef.current) {
        const rotation = islandRef.current.rotation.y;

        const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }   
      }
    }
  })



  
  useEffect(()=>{
    const canvas = gl.domElement;
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return ()=>{
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }

  },[gl,handlePointerDown,handlePointerUp,handlePointerMove]);




  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

export default Island;