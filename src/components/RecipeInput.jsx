import React from 'react';
import './RecipeInput.css';

const RecipeInput = ({ prompt, onChange, onSubmit, disabled }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="input-box"
        placeholder="e.g., Chocolate pancakes with banana"
        value={prompt}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
      <button className="cook-btn" onClick={onSubmit} disabled={disabled}>
        🍽️ Cook!
      </button>
    </div>
  );
};

export default RecipeInput;