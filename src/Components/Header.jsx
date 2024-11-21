import React from 'react'
import '../Styles/Header.css'
import add from '../icons/add.svg';
import menu from '../icons/3 dot menu.svg'
import Todo from '../icons/To-do.svg';
import Backlog from '../icons/Backlog.svg';
import InProgress from '../icons/in-progress.svg';
import { useData } from '../context/dataContext';

export default function Header({tickets, users}) {
    const { groupByKey, orderByKey} = useData();
    function getHeader(tickets) {
        switch (groupByKey) {
          case "priority":
            return priorityMap[tickets[0].priority];
          case "userId":
            return users[tickets[0].userId][0].name;
          default:
            return tickets[0].status;
        }
      }
      const priorityMap = {
        4: "Urgent Priority",
        3: "High Priority",
        2: "Medium Priority",
        1: "Low Priority",
        0: "No Priority"
      };
    console.log(users[tickets[0].userId][0].name);
    var title = getHeader(tickets);
    const mapping = {
        'Todo': Todo,
        'Backlog': Backlog,
        'In progress': InProgress
      };
  return (
    <div className='header'>
        <div className='headerLeft'>
            <img src={mapping[tickets[0].status]} />
            {/* <p>{tickets[0].status}</p> */}
            <p>{title}</p>
            <p className='count'>{tickets.length}</p>
        </div>
        <div className='headerRight'>
            <img src={add} alt="" />
            <img src={menu} alt="" />
        </div>
    </div>
  )
}
