import React from 'react';
import subnations from './All_subnations';
import './App.css';
import './Gallery.css';

function Subnation_gallery() {
  return (
    <div className='gallery' >
      <h1>Image display of all Sub-nations</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {subnations.map((subnation, index) => (
          <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
            <img src={subnation.image} alt={`Subnation Image ${index + 1}`} style={{ width: '200px', height: '110px' }} />
            <p>{subnation.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subnation_gallery;

