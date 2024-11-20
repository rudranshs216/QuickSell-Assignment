import React from "react";
import "../Styles/Card.css";

const Card = ({title}) => {
    function cutString(input,length) {
        return input.length > length ? input.substring(0, length)+'..' : input;
      }
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">CAM-11</span>
        <span className="card-title">{cutString(title,50)}</span>
      </div>
      <div className="card-footer">
        <div className="card-priority">
          <span className="priority-icon">❗</span>
          <span className="feature-request">{cutString(title,20)}</span>
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
