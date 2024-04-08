import React from 'react';

const Rating = ({ children }) => {

    const roundedValue = Math.round(children);
    const stars = [...Array(5)].map((star, index) => {
        return index < roundedValue ? '★' : '☆';
      }).join('');
      
      return (
        <div style={{fontSize:'60px'}}>
          {stars}
        </div>
      );
      

  };
  export default Rating;

  