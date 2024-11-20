export const getUserMapping = (users) => {
    const userMapping = {};
    users.forEach((user) => {
      if (!userMapping[user.id]) {
        userMapping[user.id] = [];
      }
      userMapping[user.id].push(user);
    });
    return userMapping;
  };
  
  export const groupByPriority = (tickets) => {
    const grouped = [];
    tickets.forEach((ticket) => {
      const priority = ticket.priority;
      if (!grouped[priority]) {
        grouped[priority] = [];
      }
      grouped[priority].push(ticket);
    });
  
    return grouped;
  };
  
  export const groupByStatus = (tickets) => {
    const statusMap = {};
  
    tickets.forEach((ticket) => {
      const { status } = ticket;
  
      if (!statusMap[status]) {
        statusMap[status] = [];
      }
      statusMap[status].push(ticket);
    });
  
    return Object.values(statusMap);
  };
  
  export const groupByUsers = (tickets) => {
    const userMap = {};
  
    tickets.forEach((ticket) => {
      const { userId } = ticket;
  
      if (!userMap[userId]) {
        userMap[userId] = [];
      }
      userMap[userId].push(ticket);
    });
  
    return Object.values(userMap);
  };
  
  export const sortGroupedTicketsByPriority = (groupedTickets) => {
    return groupedTickets.map((group) =>
      group.sort((a, b) => b.priority - a.priority)
    );
  };
  
  export const sortGroupedTicketsByTitle = (groupedTickets) => {
    return groupedTickets.map((group) =>
      group.sort((a, b) => a.title.localeCompare(b.title))
    );
  };
  