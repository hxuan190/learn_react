  import { recipes } from './data.js';
import { Recipe } from './types.js';

  export default function RecipeList() {
    return (
      <div>
        <h1>Recipes</h1>
        {recipes.map((recipe: Recipe) => <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient: string) => <li key={ingredient}>{ingredient}</li>)}
          </ul>
        </div>)}
      </div>
    );
  }
