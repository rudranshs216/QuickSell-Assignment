import React from 'react'
import '../Styles/Ticket.css'
import Header from './Header'
import Card from './Card'
import '../Styles/Ticket.css'

export default function Ticket({ticketArray}) {
  return (
    <div>
        <Header tickets = {ticketArray}/>
        <div className='cards'>
        {ticketArray.map((ticket) =>{
            return <Card key={ticket.id} id={ticket.id} title={ticket.title} status={ticket.status} priority={ticket.priority}/>
        })}
        </div>
        {/* <Card /> */}
    </div>
  )
}
