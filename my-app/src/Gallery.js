import React from 'react';
import subnations from './All_subnations';

function Subnation_gallery() {
  return (
    <div>
      <h1>Image display of all Sub-nations</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
