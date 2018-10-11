import React, { Component } from 'react';

const GenerateQuote = ({selectQuote}) => {
  return (
    <div className="GenerateQuote">
    <button 
    onClick={selectQuote}>Generate a simpsons quote !</button>
    </div>
  );
};


export default GenerateQuote;