import React from "react";

//define CC component
const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    
    const cardNumber = '**** **** **** ' + number.slice(-4);

    const formattedMonth = expirationMonth.toString().padStart(2, '0');
    const expirationDate = `${formattedMonth}/${expirationYear.toString().slice(-2)}`;
    
    const cardStyle = {
        backgroundColor: bgColor,
        color: color,
        borderRadius: '10px',
        padding: '24px',
        margin: '12px',
        width: '350px', 
        height: '150px', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '1px 1px 5px rgba(0,0,0,0.3)',
        position: 'relative', // logo absolute position
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      };
      
      return (
        <div style={cardStyle}>
              <div>{type === 'Visa' ? 'Visa' : 'MasterCard'}</div>
              <div style={{ margin: '0px auto'}}><h1>{cardNumber}</h1></div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <p>Expires {expirationDate}</p>
                  <p>{bank}</p>
              </div>
            <div>{owner}</div>
        </div>
      );
  };

export default CreditCard;