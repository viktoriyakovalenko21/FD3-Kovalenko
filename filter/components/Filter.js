import React from 'react';
import './Filter.css';

class Filter extends React.Component {

  state = {
    filterStr: '',
    isSorted: false,
  };

  sortChanged = (eo) => {
    this.setState({ isSorted: eo.target.checked });
  };

  filterChanged = (eo) => {
    this.setState({ filterStr: eo.target.value });
  };

  reset = () => {
    this.setState({
      filterStr: '',
      isSorted: false,
    });
  };

  render() {

    const { words } = this.props;

    let processedWords = words.filter(word => 
      word.toLowerCase().includes(this.state.filterStr.toLowerCase())
    );

    if (this.state.isSorted) {
      processedWords.sort();
    }

    return (
      <div className="FilterBlock">
        
        <div className="FilterControls">
          <input 
            type="checkbox" 
            checked={this.state.isSorted} 
            onChange={this.sortChanged} 
          />
          
          <input 
            type="text" 
            className="FilterInput"
            value={this.state.filterStr} 
            onChange={this.filterChanged} 
          />
          
          <input 
            type="button" 
            value="сброс" 
            onClick={this.reset} 
          />
        </div>

        <div className="FilterList">
          {processedWords.map((word, index) => (
            <div key={index} className="FilterItem">
              {word}
            </div>
          ))}
        </div>

      </div>
    );
  }
}

export default Filter;