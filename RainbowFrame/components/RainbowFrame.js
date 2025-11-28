import React from 'react';

class RainbowFrame extends React.Component {
  render() {
    let content = this.props.children;

    for (let color of this.props.colors) {
      content = (
        <div style={{ 
          border: `solid 5px ${color}`, 
          padding: '5px', 
          textAlign: 'center'
        }}>
          {content}
        </div>
      );
    }

    return (
      <div style={{ display: 'inline-block' }}>
        {content}
      </div>
    );
  }
}

export default RainbowFrame;