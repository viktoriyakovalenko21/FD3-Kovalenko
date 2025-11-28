import React from 'react';

function withRainbowFrame(colors) {
  return function(Component) {
    
    return class extends React.Component {
      
      render() {

        let content = <Component {...this.props} />;

        colors.forEach(color => {
          content = (
            <div style={{ 
              border: `solid 5px ${color}`, 
              padding: '5px', 
              display: 'inline-block' 
            }}>
              {content}
            </div>
          );
        });

        return (
          <div style={{ display: 'inline-block' }}>
            {content}
          </div>
        );
      }
      
    };
  };
}

export default withRainbowFrame;