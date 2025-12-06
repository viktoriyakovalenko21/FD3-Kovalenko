import React from 'react';

const List = ({ items }) => {
  return (
    <div className="FilterList">
      {items.map((word, index) => (
        <div key={index} className="FilterItem">
          {word}
        </div>
      ))}
    </div>
  );
};

export default List;