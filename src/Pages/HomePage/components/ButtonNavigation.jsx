import React from 'react'

//data of the page
var Data = [{
detail:"this is the home page"
},{
detail:"this is the clients page"
},{
detail:"this is projects page"
},{
detail:"this is about page"
}]


export  function ButtonNavigation({page, pageRoute}) {
  return (
    <div className='absolute flex flex-col-reverse w-screen items-center bottom-2 gap-10'>
    <div className='flex flex-col items-center'>
      <p className='text-[#FBF9FD] text-[32px] font-[VarelaRound]'>
        {page+1}/4
       </p>
       <p className='text-[#FBF9FD] text-[16px] font-[VarelaRound] w-3/4 text-center'>
       {Data[page].detail}
       </p>
    </div>
    <div className='flex items-center justify-between w-32'>

      {page == 0? 
        <img src="assets/inactiveLeftButton.svg" alt="LeftButton" className='w-[34px]' />
      :
      <img onClick={()=>{
        pageRoute("prev");
      }} src="assets/activeLeftButton.svg" alt="LeftButton" className='w-[34px]' />
      }
     
     {page == 3?
      <img src="assets/inactiveRightButton.svg" alt="RightButton" className='w-[34px]' />
      :
      <img onClick={()=>{
        pageRoute("next");
      }}src="assets/activeRightButton.svg" alt="RightButton" className='w-[34px]' />
      }
      
    </div>
   
    </div>
  )
}
