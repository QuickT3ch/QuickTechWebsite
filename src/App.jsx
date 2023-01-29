import { Canvas, useFrame} from '@react-three/fiber'
import {Logo3D} from "./Logo3D";
import { useEffect,useState ,useRef} from 'react';

// test

function App() {
 const [page,setPage]= useState(1);
 const [isRotatingLeft, setIsRotatingLeft] = useState(false)
const [isRotatingRight, setIsRotatingRight] = useState(false)
 const [touchStart, setTouchStart] = useState(null)
const [touchEnd, setTouchEnd] = useState(null)

// the required distance between touchStart and touchEnd to be detected as a swipe
const minSwipeDistance = 50 

const onTouchStart = (e) => {
  setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  setTouchStart(e.targetTouches[0].clientX)
}

const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance
  if (isLeftSwipe) {
console.log('leftSwip');
  }else if (isRightSwipe) {
    console.log('rightSwip');
  }
  // add your conditional logic here
}
  return (
    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className='h-screen w-screen bg-repeat bg-[#040A18] bg-auto bg-[url("assets/lines.svg")]'>
    
    {/* navBar */}
    <div>
    <img src="assets/TitleLogo.svg" alt=""  />
    </div>

    {/* 3d model  and description*/}
    <div className='absolute m-auto left-0 right-0 bottom-0 top-0 '>
    
    <div className='flex flex-col content-center h-screen w-full'>
    <div className='h-1/4 pt-52  w-screen flex justify-center items-center '>
        <p className='text-center w-3/4 text-3xl text-[#FBF9FD] font-[VarelaRound] capitalize'>
        Every thing is easy and fast with 
          <br /> 
        <span className='text-[#8C1C3B]'> quick tech </span>
        </p>
      </div>
      <div className='h-2/4 w-screen '>
        <Canvas>
        <pointLight castShadow intensity={5} position={[1, 20, 1]} />
        <Logo3D animation={[isRotatingLeft,setIsRotatingLeft,isRotatingRight,setIsRotatingRight]}/>
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
      <img onClick={()=>{
        setIsRotatingLeft(!isRotatingLeft);
      }} src="assets/inactiveLeftButton.svg" alt="LeftButton" className='w-[34px]' />
     
      <img onClick={()=>{
        setIsRotatingRight(!isRotatingRight);
      }}src="assets/inactiveRightButton.svg" alt="RightButton" className='w-[34px]' />
    </div>
    </div>
    </div>
  )
}

export default App
