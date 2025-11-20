import React from 'react';

import './Shop.css';

import ShopItem from './ShopItem';

class Shop extends React.Component {

  render() {
   
    const itemsCode=this.props.items.map( v =>
      <ShopItem key={v.code} name={v.name} price={v.price} url={v.url} rest={v.rest} />
    );


    return (
      <div className='Shop'>
        <p className='Shop_name'>
          {this.props.name}
        </p>
        <p className='Shop_address'>
          {this.props.address}
        </p>
        <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Цена</th>
          <th>Фото</th>
          <th>Остаток</th>
        </tr>
      </thead>
      <tbody>
        {itemsCode}
      </tbody>
    </table>
      </div>
    );
  }

}

export default Shop;
