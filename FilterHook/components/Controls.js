import React from 'react';

const Controls = ({ isSorted, filterStr, cbSort, cbFilter, cbReset }) => {
  return (
    <div className="FilterControls">

      <input 
        type="checkbox" 
        checked={isSorted} 
        onChange={(eo) => cbSort(eo.target.checked)} 
      />
      
      <input 
        type="text" 
        className="FilterInput"
        value={filterStr} 
        onChange={(eo) => cbFilter(eo.target.value)} 
      />

      <input 
        type="button" 
        value="сброс" 
        onClick={cbReset} 
      />
    </div>
  );
};

export default Controls;