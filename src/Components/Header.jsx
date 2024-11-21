import React from "react";
import "../Styles/Header.css";
import add from "../icons/add.svg";
import menu from "../icons/3 dot menu.svg";
import Todo from "../icons/To-do.svg";
import Backlog from "../icons/Backlog.svg";
import UrgentPriority from "../icons/SVG - Urgent Priority grey.svg";
import highPriority from "../icons/Img - High Priority.svg";
import mediumPriority from "../icons/Img - Medium Priority.svg";
import lowPriority from "../icons/Img - Low Priority.svg";
import userImg from "../icons/user.svg";
import InProgress from "../icons/in-progress.svg";
import noPriority from "../icons/No-priority.svg";
import { useData } from "../context/dataContext";

export default function Header({ tickets, users }) {
  const { groupByKey } = useData();
  const mapping = {
    Todo: Todo,
    Backlog: Backlog,
    "In progress": InProgress,
  };
  function getHeader(tickets) {
    switch (groupByKey) {
      case "priority":
        return priorityMap[tickets[0].priority];
      case "userId":
        return {
          heading: users[tickets[0].userId][0].name,
          headingIcon: userImg,
        };
      default:
        return {
          heading: tickets[0].status,
          headingIcon: mapping[tickets[0].status],
        };
    }
  }
  const priorityMap = {
    4: { heading: "Urgent Priority", headingIcon: UrgentPriority },
    3: { heading: "High Priority", headingIcon: highPriority },
    2: { heading: "Medium Priority", headingIcon: mediumPriority },
    1: { heading: "Low Priority", headingIcon: lowPriority },
    0: { heading: "No Priority", headingIcon: noPriority },
  };
  var title = getHeader(tickets);

  return (
    <div className="header">
      <div className="headerLeft">
        <img src={title.headingIcon} alt="icon" />
        {/* <p>{tickets[0].status}</p> */}
        <p>{title.heading}</p>
        <p className="count">{tickets.length}</p>
      </div>
      <div className="headerRight">
        <img src={add} alt="" />
        <img src={menu} alt="" />
      </div>
    </div>
  );
}
