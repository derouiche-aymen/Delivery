import React from "react";

const Card = ({photo, description}) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
