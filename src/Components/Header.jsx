import React from 'react'
import '../Styles/Header.css'
import toDo from '../icons/Done.svg'
import add from '../icons/add.svg';
import menu from '../icons/3 dot menu.svg'

export default function Header() {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <img src={toDo} />
            <p>ToDo</p>
            <p>2</p>
        </div>
        <div className='headerRight'>
            <img src={add} alt="" />
            <img src={menu} alt="" />
        </div>
    </div>
  )
}
