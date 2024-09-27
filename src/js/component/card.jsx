import React from "react";

const Card = ({ title, text, imgSrc }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
