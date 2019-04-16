import React from 'react';
import './style.scss';

const Button = (props) => {
  function onClick() {
    props.onClick && props.onClick();
  }
  return (
    <button
      className={props.className}
      onClick={onClick}
      type={props.type}
      value={props.value}
    >
      {props.value}
    </button>
  );
};

export default Button;
