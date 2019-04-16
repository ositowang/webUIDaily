import React from 'react';
import './style.scss';

const CardTextarea = (props) => {
  return (
    <textarea
      name={props.name || ''}
      id={props.id}
      placeholder={props.placeholder || ''}
      required={props.required || false}
    />
  );
};

export default CardTextarea;
