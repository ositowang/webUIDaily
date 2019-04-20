import React, { Component } from 'react';
import NeonButton from './NeonButton';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="display-container">
          <NeonButton />
        </div>
      </div>
    );
  }
}

export default App;
