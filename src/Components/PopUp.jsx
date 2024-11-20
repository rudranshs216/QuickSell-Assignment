import React, { useState } from 'react'
import '../Styles/PopUp.css'

export default function PopUp() {
    const [grouping, setGrouping] = useState("status");
    const [ordering, setOrdering] = useState("priority");
    console.log(grouping);
    return (
        <div className="App">
          <div className="controls">
            <div className="control">
              <label>Grouping</label>
              <select
                value={grouping}
                onChange={(e) => setGrouping(e.target.value)}
              >
                <option value="status">Status</option>
                <option value="userId">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="control">
              <label>Ordering</label>
              <select
                value={ordering}
                onChange={(e) => setOrdering(e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
          {/* <div className="results">
            {sortedAndGroupedTickets.map(({ key, tickets }) => (
              <div key={key} className="group">
                <h3>{key}</h3>
                <ul>
                  {tickets.map((ticket) => (
                    <li key={ticket.id}>
                      <strong>{ticket.title}</strong> (Priority: {ticket.priority})
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
        </div>
      );
    };
