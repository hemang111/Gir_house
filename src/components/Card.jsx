import React from "react";

const Card = ({ title, copy, index }) => (
    <div className="card" id={`card-${index + 1}`}>
      <div className="card-inner font-robert-medium">
        <div className="card-content">
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
        <div className="card-img">
          <img src={`./img/card-${index + 1}.png`} alt={title} />
        </div>
      </div>
    </div>
  )

export default Card;
  