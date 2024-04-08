import React from "react";

const Greetings = ({ lang, children }) => {

    const greetings = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour'
    }
    const greetingText = greetings[lang] || 'Hello';

    return (
        <div style={{ border: '1px solid black', margin: '16px', padding: '16px', textAlign: 'left', fontSize: '32px'}}>
          {greetingText} {children}
        </div>
      );
}

export default Greetings;