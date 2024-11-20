import React from 'react'
import '../Styles/Navbar.css'
import display from '../icons/Display.svg'
import arrowDown from '../icons/down.svg'

export default function Navbar () {
  return (
    <div className='Navbar'>
      <div className='Display'>
        <p>
          <img src={display} alt='Display Icon' /> {' '}Display{' '}
          <img src={arrowDown} alt='ArrowDown Icon' />
        </p>
      </div>
    </div>
  )
}
