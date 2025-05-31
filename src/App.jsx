import React, { useState } from 'react';
import RecipeInput from './components/RecipeInput';
import RecipeDisplay from './components/RecipeDisplay';
import { getRecipeFromHuggingFace } from './api/hfapi';
import './index.css';
import chefLogo from './assets/chef.jpg';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError('');
    setRecipe('');

    try {
      const result = await getRecipeFromHuggingFace(prompt);
      setRecipe(result);
    } catch (e) {
      setError('Failed to get recipe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <img src={chefLogo} alt="Chef Claude" className="chef-logo" />
        <h1>Chef Claude</h1>
      </div>

      <RecipeInput prompt={prompt} onChange={setPrompt} onSubmit={handleSubmit} disabled={loading} />
      <RecipeDisplay loading={loading} error={error} recipe={recipe} />
    </div>
  );
};

export default App;
