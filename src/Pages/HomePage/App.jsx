import { Canvas, useFrame} from '@react-three/fiber'
import {Logo3D} from "./components/Logo3D";
import { useEffect,useState ,useRef} from 'react';
import {Detail} from "./components/Detail";
import {ButtonNavigation} from "./components/ButtonNavigation";
import Menu from './components/Menu';
function App() {
  
function enableScroll() {
    window.onscroll = function() {};
}
const [page,setPage]= useState(0);

// slide left and right gestures vars
const [touchStart, setTouchStart] = useState(null)
const [touchEnd, setTouchEnd] = useState(null)

// rotation of the gestures vars
const [isRotatingLeft, setIsRotatingLeft] = useState(false)
const [isRotatingRight, setIsRotatingRight] = useState(false)

// next page or previous page
const pageRoute = (option) => {
  if (page !=0 && page !=3) {
    if (option == "next") {
      setPage(page+1);
      setIsRotatingLeft(true);
    }else if (option == "prev") {
      setPage(page-1);
      setIsRotatingRight(true);
    }else{
      throw new Error("invalid option");
    }
  }else if (page == 0) {
    if (option == "next") {
      setPage(page+1);
      setIsRotatingLeft(true);
    }
  }else if (page == 3){
    if (option == "prev") {
      setPage(page-1);
      setIsRotatingRight(true);
    }
  }
  console.log(page);
}


// swipe function for siwping left and right on mobile devices
const minSwipeDistance = 50 
const onTouchStart = (e) => {
  setTouchEnd(null)
  setTouchStart(e.targetTouches[0].clientX)
}
const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance
  if (isLeftSwipe) {
    pageRoute("next");
  }else if (isRightSwipe) {
    pageRoute("prev");
  }
}

  return (
    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className='h-screen w-screen bg-repeat bg-[#040A18] bg-auto bg-[url("assets/lines.svg")] overflow-y-clip'>
    
    {/* navBar */}

    <div>
      <Menu />
    </div>


    <div>
    <img src="assets/TitleLogo.svg" alt=""  />
    </div>


    {/* 3d model  and description*/}
    <div className='absolute m-auto left-0 right-0 bottom-0 top-0 '>
    <div className='flex flex-col content-center h-full w-full'>
       <Detail/>
    <div className='h-2/4 w-screen '>
        <Canvas>
        <pointLight castShadow intensity={5} position={[1, 20, 1]} />
        <Logo3D page={page} isRotatingLeft={isRotatingLeft} isRotatingRight={isRotatingRight} setIsRotatingLeft={setIsRotatingLeft} setIsRotatingRight={setIsRotatingRight}/>
        <ambientLight shadow={true}/>
        </Canvas>
    </div>
    </div>
    </div>
    
    {/* button navigation */}
    <ButtonNavigation page={page} pageRoute={pageRoute}/> 
    </div>  
  )
}

export default App
