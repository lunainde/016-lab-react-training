import React from 'react';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  const cardStyle = {
    backgroundColor: '#455eb5',
    borderRadius: '8px',
    color: 'white',
    padding: '16px',
    margin: '16px auto',
    display: 'flex',
    alignItems: 'center',
    width: '50%',
  };

  const imgStyle = {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginRight: '20px',
  };

  return (
    <div style={cardStyle}>
      <img src={img} alt={name} style={imgStyle} />
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
