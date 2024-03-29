import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Close } from '@material-ui/icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser,faEnvelope,faInfoCircle} from '@fortawesome/free-solid-svg-icons'




export default function MenuItems({showMenu,active}) {

     

  return (

      <div>
        
        <ul className={active ? 'text-[25px] font-serif z-30 active uppercase flex flex-col items-center gap-6 justify-center inset-0 backdrop-blur-lg fixed' : 'hidden'}>
        <Close className='absolute top-10 right-10 scale-150 md:hiddens'  onClick={showMenu}/>
        <li><FontAwesomeIcon icon={faHome}/> home</li>
        <li><FontAwesomeIcon icon={faUser}/> Client</li>
        <li><FontAwesomeIcon icon={faEnvelope}/> contact</li>
        <li><FontAwesomeIcon icon={faInfoCircle}/> about</li>
        </ul>
        </div>
       
  )
  }
