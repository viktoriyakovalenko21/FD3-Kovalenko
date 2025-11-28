import React from 'react';

const DoubleButton = (props) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <input 
        type="button" 
        value={props.caption1} 
        onClick={() => props.cbPressed(1)} 
      />
      
      <span>{props.children}</span>
      
      <input 
        type="button" 
        value={props.caption2} 
        onClick={() => props.cbPressed(2)} 
      />
    </div>
  );
};

export default DoubleButton;
