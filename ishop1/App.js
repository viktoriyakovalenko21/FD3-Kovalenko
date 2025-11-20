import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';

import itemsArr from './items.json';

ReactDOM.render(
  <Shop 
  name="Интернет-магазин тканей" 
  address ="Минск, пр. Независимости 134"
  items = {itemsArr}/>,

  document.getElementById('container') 
);
