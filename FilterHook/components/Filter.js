import React, { useState } from 'react';

import Controls from './Controls';
import List from './List';
import './Filter.css'; 

const Filter = ({ initialData }) => {
  
  const [filterStr, setFilterStr] = useState('');
  const [isSorted, setIsSorted] = useState(false);

  const sortChanged = (isChecked) => {
    setIsSorted(isChecked);
  };

  const filterChanged = (text) => {
    setFilterStr(text);
  };

  const reset = () => {
    setFilterStr('');
    setIsSorted(false);
  };

  let processedData = initialData.filter(word => 
    word.toLowerCase().includes(filterStr.toLowerCase())
  );

  if (isSorted) {
    processedData.sort();
  }

  return (
    <div className="FilterBlock">
      <Controls 
        isSorted={isSorted}
        filterStr={filterStr}
        cbSort={sortChanged}
        cbFilter={filterChanged}
        cbReset={reset}
      />

      <List items={processedData} />
    </div>
  );
};

export default Filter;