import React from 'react';
import './RecipeDisplay.css';
import LoadingDots from './LoadingDots';

const RecipeDisplay = ({ loading, error, recipe }) => {
  if (loading) return <LoadingDots />;
  if (error) return <div className="error-msg">{error}</div>;
  if (recipe) return <div className="recipe-box">{recipe}</div>;
  return null;
};

export default RecipeDisplay;