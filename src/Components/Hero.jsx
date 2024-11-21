import React, { useEffect, useState } from "react";
import "../Styles/Hero.css";
import Ticket from "./Ticket";
import axios from "axios";
import { useData } from "../context/dataContext";
import {
  getUserMapping,
  groupByPriority,
  groupByStatus,
  groupByUsers,
  sortGroupedTicketsByPriority,
  sortGroupedTicketsByTitle,
} from "../Utilities/util";

export default function Hero() {
  const { groupByKey, orderByKey } = useData();
  const [ticket, setTicket] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        console.log(response.data);

        setTicket(response.data.tickets);
        setUsers(response.data.users);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const userMapping = getUserMapping(users);

  const manageGrouping = () => {
    switch (groupByKey) {
      case "priority":
        return groupByPriority(ticket);
      case "userId":
        return groupByUsers(ticket);
      default:
        return groupByStatus(ticket);
    }
  };

  const manageOrdering = (data) => {
    switch (orderByKey) {
      case "title":
        return sortGroupedTicketsByTitle(data);
      default:
        return sortGroupedTicketsByPriority(data);
    }
  };

  const display = () => manageOrdering(manageGrouping());

  return (
    <div className="hero">
      {ticket.length === 0 ? (
        <p>Loading...</p>
      ) : (
        display()?.map((ticketArray) => (
          <Ticket
            key={ticketArray[0]?.id}
            ticketArray={ticketArray}
            users={userMapping}
          />
        ))
      )}
    </div>
  );
}
