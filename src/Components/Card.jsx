import React from "react";
import "../Styles/Card.css";

const Card = ({title}) => {
    console.log(title);
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">CAM-11</span>
        <span className="card-title">{title}</span>
      </div>
      <div className="card-footer">
        <div className="card-priority">
          <span className="priority-icon">❗</span>
          <span className="feature-request">{title}</span>
        </div>
        <div className="avatar">
          <img
            src="https://via.placeholder.com/32" // Replace with avatar URL
            alt="User Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
