import React, { Component } from 'react';
import SelectableCard from './components/selectable';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SelectableCard
          title={'I am a selectable card'}
          tags={['News', 'Techs', 'Today']}
        >
          <p>
            Glicky aims to solve this problem by providing a GUI for common CLI
            commands that are necessary when working on a modern project. Glicky
            offers functionality for:
          </p>
        </SelectableCard>
      </div>
    );
  }
}

export default App;
