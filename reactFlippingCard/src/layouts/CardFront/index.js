import React from 'react';
import './style.scss';

export default function CardFront() {
  return (
    <div className="card-front">
      <div className="fluid">
        <div className="col-xs-6">
          <img
            src="https://image.freepik.com/free-vector/web-design-concept-with-flat-design_23-2147860983.jpg"
            alt="Test Pic"
            className="front-img"
          />
        </div>
        <div className="col-xs-6 front-content">
          <h2>Osito Wang</h2>
          <h1>Front-End Developer</h1>
          <p>
            Osito is driven by turning ideas into scalable and and empowering
            experiences that solve real life problems.
          </p>
          <p>
            Osito is currently the new-graduate Front-End developer. Previously,
            he was an graduate student at WPI
          </p>
          <p>
            Over the years, Osito has learned to work with different
            technologies in use in the web development area.
          </p>
        </div>
      </div>
    </div>
  );
}
