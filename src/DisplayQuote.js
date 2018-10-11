import React from 'react';

const DisplayQuote = ({quote}) => {
  return (
    <div>
        <h1>{quote.character}</h1>
        <img src={quote.image} alt="quote.character"/>
        <h5>{quote.quote}</h5>
    </div>
  )
}

export default DisplayQuote;