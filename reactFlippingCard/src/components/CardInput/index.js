import React from 'react';
import './style.scss';

const CardInput = (props) => {
  return (
    <div>
      <input
        name={props.name || ''}
        id={props.id}
        type={props.type || 'text'}
        placeholder={props.placeholder || ''}
        required={props.required || false}
      />
    </div>
  );
};

export default CardInput;
