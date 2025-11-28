import React from 'react';
import ReactDOM from 'react-dom';
import RainbowFrame from './components/RainbowFrame';

class App extends React.Component {
  render() {
    let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
    
    return (
      <div style={{ padding: '50px' }}>
        
        <RainbowFrame colors={colors}>
          <div style={{ padding: '10px 65px', fontSize: '24px', fontWeight: 'bold' }}>
            Hello!
          </div>
        </RainbowFrame>
        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));