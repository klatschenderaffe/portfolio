import React from 'react';
import './Title.css';

const Title = ({ title, subtitle }) => {
  return (
    <div className="Title-Container">
      <div className="subtitle">
        <p>{subtitle}</p>
      </div>
      <div className="title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Title;
