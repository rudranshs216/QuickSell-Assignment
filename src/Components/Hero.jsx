import React, { useState } from 'react'
import '../Styles/Hero.css'
import Ticket from './Ticket'
import axios from 'axios';

export default function Hero() {
    const[ticket,setTicket] = useState([]);
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.quicksell.co/v1/internal/frontend-assignment',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response?.data.tickets));
  setTicket(response.data.tickets);
})
.catch((error) => {
  console.log(error);
});

const groupByPriority = (tickets) => {
        const grouped = [];
        tickets.map((ticket) => {
          const priority = ticket.priority;
      
          // Ensure the index for the current priority exists
          if (!grouped[priority]) {
            grouped[priority] = [];
          }
      
          // Push the ticket to the corresponding priority group
          grouped[priority].push(ticket);
        });
      
        return grouped;
      };

      var groupedTickets = groupByPriority(ticket);
      console.log(groupedTickets);
// Group tickets by their status
const groupByStatus = (tickets) => {
    // Create a map to store tickets grouped by status
    const statusMap = {};
  
    // Iterate through each ticket
    tickets.forEach((ticket) => {
      const { status } = ticket;
  
      // Initialize the array if the status key doesn't exist
      if (!statusMap[status]) {
        statusMap[status] = [];
      }
  
      // Add the ticket to the corresponding status group
      statusMap[status].push(ticket);
    });
  
    // Convert the map values to an array of arrays
    return Object.values(statusMap);
  };
  
   groupedTickets = groupByStatus(ticket);
  
  console.log(groupedTickets);
  // Group tickets by their assigned userId
const groupByUsers = (tickets) => {
    // Create a map to store tickets grouped by userId
    const userMap = {};
  
    // Iterate through each ticket
    tickets.forEach((ticket) => {
      const { userId } = ticket;
  
      // Initialize the array if the userId key doesn't exist
      if (!userMap[userId]) {
        userMap[userId] = [];
      }
  
      // Add the ticket to the corresponding user group
      userMap[userId].push(ticket);
    });
  
    // Convert the map values to an array of arrays
    return Object.values(userMap);
  };
  
  const groupedByUsers = groupByUsers(ticket);
  
  console.log(groupedByUsers);
  const sortGroupedTicketsByPriority = (groupedTickets) => {
    return groupedTickets.map((group) =>
      group.sort((a, b) => b.priority - a.priority) // Sort in descending order
    );
  };
  const sortedGroupedByUsers = sortGroupedTicketsByPriority(groupedByUsers);
  
  console.log(sortedGroupedByUsers);

  // Sort each grouped array by title alphabetically
const sortGroupedTicketsByTitle = (groupedTickets) => {
    return groupedTickets.map((group) =>
      group.sort((a, b) => a.title.localeCompare(b.title)) // Sort alphabetically by title
    );
  };
  const sortedGroupedByTitle = sortGroupedTicketsByTitle(groupedByUsers);
  console.log(sortedGroupedByTitle);
  return (
    <div className='hero'>
        {groupedTickets.map((ticketArray) => {
            return <Ticket key={ticketArray[0].id} ticketArray = {ticketArray} />
        })}
       
    </div>
  )
}
