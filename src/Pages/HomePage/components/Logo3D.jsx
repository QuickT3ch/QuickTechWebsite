
import React, {  useEffect,useState, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame  } from '@react-three/fiber';


export function Logo3D({page,isRotatingLeft,isRotatingRight,setIsRotatingLeft,setIsRotatingRight}) {

  const refMesh = useRef();

  const { nodes, materials } = useGLTF('assets/3d/logo.glb')


  
  
  useEffect(() =>{},[isRotatingLeft,isRotatingRight]);

    useFrame(() => {
      if(refMesh.current) {
        if(isRotatingLeft ||isRotatingRight){
          if (isRotatingLeft == true) {
            refMesh.current.rotation.z += 0.1;
            if (refMesh.current.rotation.z > (6.3*page)){
              setIsRotatingLeft(false);
            }
          }
          if (isRotatingRight == true) {
            refMesh.current.rotation.z -=  0.1;
            if (refMesh.current.rotation.z < (6.3*page)){
             setIsRotatingRight(false);
            }
          }
        }else{
          if(refMesh.current.rotation.x < 1.5) {
            refMesh.current.rotation.x += 0.01; 
          }
          if(refMesh.current.rotation.y < 0){
            refMesh.current.rotation.y += 0.01;
          }
        }
      }
    });


  return (
    <group castShadow  dispose={null}>
      <group  ref={refMesh} position={[0, 0, 0]} rotation={[0, -1, 0]} scale={[35, 35, 35]}>
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
