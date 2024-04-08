import React from "react";

const BoxColor = ({ r, g, b }) => {

    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        //map into R(255),G(0),B(0) to get hex => # + ff0000
        const hex = x.toString(16); //hexadecimal( 255=> x16 => string)
        return hex.length === 1 ? '0' + hex : hex; //5 = 05 (2 characters for hex ff)
    }).join(''); //no space 255,0,0 => ff0000

    const boxStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        color: '#444',
        padding: '20px',
        margin: '10px',
        border: '1px solid black',
        textAlign: 'center'
    };
      
    const hexColor = rgbToHex(r, g, b);

    return (
     
        <div style={boxStyle}>
            <h2>rgb({r},{g},{b})</h2>
            <h2>{hexColor}</h2>
        </div>  

    )
}

export default BoxColor;