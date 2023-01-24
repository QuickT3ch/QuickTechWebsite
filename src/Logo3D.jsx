
import React, {  useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Logo3D(props) {

  const refMesh = useRef();

  const { nodes, materials } = useGLTF('assets/3d/logo.glb')

  
    useFrame(({ clock }) => {
      if(refMesh.current) {
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
    });

    
  return (
    <group castShadow  dispose={null}>
      <group  ref={refMesh} position={[0, 0, 0]} rotation={[0,-1,-1]} scale={[35, 35, 35]}>
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
