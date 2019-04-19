import React from 'react';
import './style.scss';

export default function Card(props) {
  return <div className="card">{props.children}</div>;
}
