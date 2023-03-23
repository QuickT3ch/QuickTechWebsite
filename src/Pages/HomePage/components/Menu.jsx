import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'
import { MenuOutlined } from '@material-ui/icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser,faEnvelope,faInfoCircle} from '@fortawesome/free-solid-svg-icons'


export default function Menu() {

const [active,setActive] = useState(false)

const showMenu=()=>{
  setActive(!active)
}


  return (
 
    <div className= 'text-white p-3 itmes-center'>

    <nav >
    <div className='  absolute z-20 top-12 right-6 md:hidden scale-150'>
      <MenuOutlined onClick={showMenu}/>
      </div>
      
      <ul className='z-10 text-[17px] font-serif hidden absolute top-2 right-0 md:flex gap-3 p-5 uppercase ' >
      <li><FontAwesomeIcon icon={faHome}/> home</li>
        <li><FontAwesomeIcon icon={faUser}/> Client</li>
        <li><FontAwesomeIcon icon={faEnvelope}/> contact</li>
        <li><FontAwesomeIcon icon={faInfoCircle}/> about</li>
      </ul>
      <MenuItems showMenu={showMenu} active={active}/>
    </nav>
    </div>
  )
}