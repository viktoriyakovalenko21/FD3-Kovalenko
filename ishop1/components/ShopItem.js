import React from 'react';

import './ShopItem.css';

class ShopItem extends React.Component {

  render() {

    return (
      <tr>
      <td>{this.props.name}</td>
      <td>{this.props.price}</td>
      <td>
        <img src={this.props.url} style={{width: "100px"}} alt={this.props.name} />
      </td>
      <td>{this.props.rest}</td>
    </tr>
  );
}

}

export default ShopItem;