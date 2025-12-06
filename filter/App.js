import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter';
import wordsData from './words.json'; 

ReactDOM.render(
  <Filter words={wordsData} />,
  document.getElementById('container') 
);