
import React, {  useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame  } from '@react-three/fiber';


export function Logo3D(props) {

  const refMesh = useRef();

  const { nodes, materials } = useGLTF('assets/3d/logo.glb')

  useEffect(() =>{},[props.animation[0],props.animation[2]]);

    useFrame(() => {

      if(refMesh.current) {
        console.log(refMesh.current.rotation.z);
        if(props.animation[0] ||props.animation[2]){
          if (props.animation[0]== true) {
            refMesh.current.rotation.z += 0.1;
            if (refMesh.current.rotation.z > (6.3*(1))){
              props.animation[1](false);
            }
          }
          if (props.animation[2] == true) {
            refMesh.current.rotation.z = refMesh.current.rotation.z - 0.01;
          }
        }else{
          if(refMesh.current.rotation.x < 1.5) {
            refMesh.current.rotation.x += 0.01; 
          }
          if(refMesh.current.rotation.y < 0){
            refMesh.current.rotation.y += 0.01;
          }
          if(refMesh.current.rotation.z < 0){
            refMesh.current.rotation.z += 0.01;
          }
        }
      }
    });

    
  return (
    <group castShadow  dispose={null}>
      <group  ref={refMesh} position={[0, 0, 0]} rotation={[0, -1, -1]} scale={[35, 35, 35]}>
        <mesh geometry={nodes.Curve001_1.geometry} material={materials['SVGMat.003']} />
        <mesh geometry={nodes.Curve001_2.geometry} material={materials['SVGMat.003']} />
        <mesh geometry={nodes.Curve001_3.geometry} material={materials['SVGMat.003']} />
        <mesh geometry={nodes.Curve001_4.geometry} material={materials['SVGMat.003']} />
        <mesh geometry={nodes.Curve001_5.geometry} material={materials['SVGMat.003']} />
        <mesh geometry={nodes.Curve001_6.geometry} material={materials['SVGMat.003']} />
      </group>
    </group>
  )
  
}

useGLTF.preload('/logo-transformed.glb')
