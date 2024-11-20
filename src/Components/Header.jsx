import React from 'react'
import '../Styles/Header.css'
import add from '../icons/add.svg';
import menu from '../icons/3 dot menu.svg'
import Todo from '../icons/To-do.svg';
import Backlog from '../icons/Backlog.svg';
import InProgress from '../icons/in-progress.svg';

export default function Header({tickets}) {
    const mapping = {
        'Todo': Todo,
        'Backlog': Backlog,
        'In progress': InProgress
      };
  return (
    <div className='header'>
        <div className='headerLeft'>
            <img src={mapping[tickets[0].status]} />
            <p>{tickets[0].status}</p>
            <p className='count'>{tickets.length}</p>
        </div>
        <div className='headerRight'>
            <img src={add} alt="" />
            <img src={menu} alt="" />
        </div>
    </div>
  )
}
