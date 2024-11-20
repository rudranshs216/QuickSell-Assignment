import React, { useState } from 'react'
import '../Styles/Navbar.css'
import display from '../icons/Display.svg'
import arrowDown from '../icons/down.svg'
import PopUp from './PopUp'

export default function Navbar () {
    const[click,setClick] = useState(false);
  return (
    <div className='Navbar'>
    <div className="popup" style={{display: click ? "block" : "none",}}>
      <PopUp />
    </div>
      <div className='Display' onClick={()=> setClick(!click)}>
        <p>
          <img src={display} alt='Display Icon' /> {' '}Display{' '}
          <img src={arrowDown} alt='ArrowDown Icon' />
        </p>
      </div>
    </div>
  )
}
