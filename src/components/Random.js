import React from 'react';

const Random = ({ min, max }) => {

    const randomValue = Math.floor(Math.random() * (max-min+1)) + min;
    return (
        <div style={{ border: '1px solid black', textAlign: 'left', margin: '16px', padding: '16px' }}>
          <h3>Random value between {min} and {max} → {randomValue}</h3>
        </div>
      );
      
  };
  export default Random;
