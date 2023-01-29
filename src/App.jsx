import { Canvas, useFrame} from '@react-three/fiber'
import {Logo3D} from "./Logo3D";
import { useEffect,useState ,useRef} from 'react';

// test

function App() {
 const [page,setPage]= useState(0);
  return (
    <div className='h-screen w-screen bg-repeat bg-[#040A18] bg-auto bg-[url("assets/lines.svg")]'>
    
    {/* navBar */}
    <div>
    <img src="assets/TitleLogo.svg" alt="" srcset="" />
    </div>

    {/* 3d model  and description*/}
    <div className='absolute m-auto left-0 right-0 bottom-0 top-0 '>
    
    <div className='flex flex-col content-center h-screen w-full'>
    <div className='h-1/4 pt-52  w-screen flex justify-center items-center '>
        <p className='text-center w-3/4 text-3xl text-[#FBF9FD] font-[VarelaRound] capitalize'>
        Every thing is easy and fast with 
          <br /> 
        <span className='text-[#8C1C3B]'> quick teck </span>
        </p>
      </div>
      <div className='h-2/4 w-screen '>
        <Canvas>
        <pointLight castShadow intensity={5} position={[1, 20, 1]} />
        <Logo3D />
        <ambientLight shadow={true}/>
        </Canvas>
      </div>
      
    </div>
   
    </div>
   
    {/* button navigation */}
    <div className='absolute flex flex-col-reverse w-screen items-center bottom-16 gap-10'>
    <div className='flex flex-col items-center'>
      <p className='text-[#FBF9FD] text-[32px] font-[VarelaRound]'>
        1/4
       </p>
       <p className='text-[#FBF9FD] text-[16px] font-[VarelaRound] w-3/4 text-center'>
       simple discreption 
        about the page 
       </p>
    </div>
    <div className='flex items-center justify-between w-32'>
      <img src="assets/inactiveLeftButton.svg" alt="LeftButton" className='w-[34px]' />
      <img src="assets/inactiveRightButton.svg" alt="RightButton" className='w-[34px]' />
    </div>
    </div>
    </div>
  )
}

export default App
