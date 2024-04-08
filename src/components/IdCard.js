//IdCard.js
import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <div style={{display: 'flex', alignItems: 'center', margin: '16px', border: '1px solid black', padding: '10px'}}>
          <img style={{height: '150px'}} src={picture} alt={`${firstName} ${lastName}`} />
          <div style={{ textAlign: 'left',  padding: '0px 16px' }}>
            <p><strong>First name:</strong> {firstName}</p>
            <p><strong>Last name:</strong> {lastName}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Height:</strong> {height / 100}m</p>
            <p><strong>Birth:</strong> {birth.toDateString()}</p>
          </div>
        </div>
    );
}

export default IdCard;