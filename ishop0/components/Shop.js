import React from 'react';

import './Shop.css';

class Shop extends React.Component {

  render() {
    return (
      <div className='Shop'>
        <p className='Shop_name'>
          {this.props.name}
        </p>
        <p className='Shop_address'>
          {this.props.address}
        </p>
      </div>
    );
  }

}

export default Shop;
