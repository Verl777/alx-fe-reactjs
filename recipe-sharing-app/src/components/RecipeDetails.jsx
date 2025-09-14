import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate('/')}>Back to list</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <hr />
      <h3>Edit recipe</h3>
      <EditRecipeForm recipe={recipe} />

      <hr />
      <DeleteRecipeButton id={recipe.id} />
      <p style={{ marginTop: 10 }}>
        <Link to="/">← Back to list</Link>
      </p>
    </div>
  );
};

export default RecipeDetails;
