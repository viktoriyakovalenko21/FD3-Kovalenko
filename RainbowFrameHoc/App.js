import React from 'react';
import ReactDOM from 'react-dom';

// ИСПРАВЛЕННЫЕ ПУТИ: добавляем ./components/ перед названием файлов
import DoubleButton from './components/DoubleButton';
import withRainbowFrame from './components/withRainbowFrame';

class App extends React.Component {
  
  handlePressed = (num) => {
    alert(num);
  }

  render() {
    let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
    
    // Создаем компонент с рамками
    let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

    return (
      <div style={{ padding: '20px' }}>
        
        {/* Обычный DoubleButton */}
        <div style={{ marginBottom: '30px' }}>
          <DoubleButton 
            caption1="однажды" 
            caption2="пору" 
            cbPressed={this.handlePressed}
          >
            в студеную зимнюю
          </DoubleButton>
        </div>

        {/* DoubleButton внутри рамок */}
        <div>
          <FramedDoubleButton 
            caption1="я из лесу" 
            caption2="мороз" 
            cbPressed={this.handlePressed}
          >
            вышел, был сильный
          </FramedDoubleButton>
        </div>

      </div>
    );
  }
}

// Запускаем отрисовку в div id="container"
ReactDOM.render(<App />, document.getElementById('container'));