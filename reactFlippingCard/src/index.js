import React from 'react';
import ReactDOM from 'react-dom';
import CardFront from './layouts/CardFront';
import CardBack from './layouts/CardBack';
import './styles.scss';

function App() {
  return (
    <div className="app-wrapper">
      <div className="card-container">
        <CardFront />
        <CardBack />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
