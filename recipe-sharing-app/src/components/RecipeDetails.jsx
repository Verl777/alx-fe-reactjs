import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  if (!recipe) return <p>Recipe not found</p>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Favorite / Unfavorite button */}
      {isFavorite ? (
        <button onClick={() => removeFavorite(recipe.id)}>
           Remove from Favorites
        </button>
      ) : (
        <button onClick={() => addFavorite(recipe.id)}>
           Add to Favorites
        </button>
      )}
    </div>
  );
};

export default RecipeDetails;
