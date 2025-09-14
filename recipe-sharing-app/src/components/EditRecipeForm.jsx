import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ now explicitly uses "event"
    if (!title.trim() || !description.trim()) return;

    updateRecipe({ id: recipe.id, title, description });
    // optionally navigate somewhere else, for now stay on details page
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button type="submit">Save changes</button>
      <button type="button" onClick={() => navigate('/')}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
