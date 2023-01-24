import { Canvas, useFrame} from '@react-three/fiber'
import {Logo3D} from "./Logo3D";
import { useEffect,useState ,useRef} from 'react';

function App() {
 const [page,setPage]= useState(0);
  return (
    <div className='h-screen w-screen bg-repeat bg-[#040A18] bg-auto bg-[url("assets/lines.svg")]'>
    
    {/* navBar */}
    <div>
    <p className='text-center p-3 text-[#FBF9FD] font-[VarelaRound]  w-[124px] h-[24px] text-[20px] leading-6'>
        QUICKTECH
    </p> 
    </div>

    {/* 3d model */}
    <div className='absolute m-auto left-0 right-0 bottom-0 top-0 '>
    
    <div className='flex flex-col content-center  h-screen w-full'>
    <div className='h-3/6 w-screen '>
    <Canvas>
    <pointLight castShadow intensity={5} position={[1, 20, 1]} />
    <Logo3D />
    <ambientLight shadow={true}/>
    </Canvas>
    </div>
    <div className='h-3/6  w-screen flex justify-center '>
    <p className='w-36 text-3xl text-[#FBF9FD] font-[VarelaRound] capitalize'>
    Every thing is easy and fast with 
    <br /> 
    <span className='text-[#8C1C3B]'> quick teck </span>
    </p>
    </div>
    </div>
    </div>
   

    {/* bottom left discription */}
    <div className='absolute bottom-10 left-5 flex flex-col items-center'>
      <p className='text-[#FBF9FD] text-[16px] font-[VarelaRound]'>
        1/4
       </p>
       <p className='text-[#FBF9FD] text-[10px] font-[VarelaRound] w-28 text-center'>
       simple discreption 
        about the page 
       </p> 
    </div>

    {/* bottom right discription */}
    <div className='absolute bottom-10 right-5 flex items-center justify-between w-32'>
      <img src="assets/inactiveLeftButton.svg" alt="LeftButton" className='w-10' />
      <img src="assets/inactiveRightButton.svg" alt="RightButton" className='w-10' />
    </div>
    </div>
  )
}

export default App
