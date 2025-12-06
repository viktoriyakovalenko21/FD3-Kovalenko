import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter';
import wordsData from './words.json'; 

const App = () => {
  return (
    <div>
      <Filter initialData={wordsData} />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('container') 
);

export default App;