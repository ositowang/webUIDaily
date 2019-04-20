import React from 'react';
import './style.scss';

export default function NeonButton() {
  return (
    <div className="toggle toggle-neon">
      <input type="checkbox" id="toggle-neon" className="toggle-checkbox" />
      <label htmlFor="toggle-neon" className="toggle-btn" />
    </div>
  );
}
