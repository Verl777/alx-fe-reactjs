import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div className="p-6 text-center">Loading recipe...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-72 object-cover rounded-lg shadow-md mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>

      {/* Ingredients Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <Link
        to="/"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
