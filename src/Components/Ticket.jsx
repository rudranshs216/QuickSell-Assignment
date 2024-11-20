import React from 'react'
import '../Styles/Ticket.css'
import Header from './Header'
import Card from './Card'
import '../Styles/Ticket.css'

export default function Ticket({ticketArray}) {
  return (
    <div>
        <Header />
        <div className='cards'>
        {ticketArray.map((ticket) =>{
            return <Card key={ticket.id} title={ticket.title}/>
        })}
        </div>
        {/* <Card /> */}
    </div>
  )
}
