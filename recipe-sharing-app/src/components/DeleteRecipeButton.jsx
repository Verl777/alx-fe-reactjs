import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const ok = window.confirm('Delete this recipe?');
    if (!ok) return;
    deleteRecipe(id);
    navigate('/');
  };

  return <button onClick={handleDelete} style={{ color: 'white', background: 'red', padding: '6px 10px' }}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
