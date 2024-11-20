import React from "react";
import "../Styles/Card.css";
import LowPriority from '../icons/Img - Low Priority.svg';
import MediumPriority from '../icons/Img - Medium Priority.svg';
import HighPriority from '../icons/Img - High Priority.svg';
import UrgentPriority from '../icons/SVG - Urgent Priority grey.svg';
import NoPriority from '../icons/No-priority.svg';

const Card = ({title, id, status, priority}) => {
    const priorityMap = {
        4: UrgentPriority,
        3: HighPriority,
        2: MediumPriority,
        1: LowPriority,
        0: NoPriority
      };
    function cutString(input,length) {
        return input.length > length ? input.substring(0, length)+'..' : input;
      }
  return (
    <div className="card">
      <div className="card-header-avatar">
        <div className="card-header">
        <span className="card-id">{id}</span>
        <div className="avatar">
          <img
            src="https://via.placeholder.com/24"
            alt="User Avatar"
          />
        </div>
        </div>
        <span className="card-title">{cutString(title,80)}</span>
      </div>
      <div className="card-footer">
        <div className="card-priority">
          {/* <span className="priority-icon">{priority}</span> */}
          <img className="priority-icon" src={priorityMap[priority]} alt="" />
          <span className="feature-request">{cutString(title,20)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
