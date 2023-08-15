import { useParams } from "react-router-dom";

import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import RecipeContent from "../components/Content/RecipeContent";
import RecipeDescription from "../components/Content/RecipeDescription";
import RecipePreparationTime from "../components/Content/RecipePreparationTime";
import RecipeIngredients from "../components/Content/RecipeIngredients";
import RecipeIngredientsCalculator from "../components/Content/RecipeIngredientsCalculator";

function Recipe({ recipes, isLoading, error }) {
  const { id } = useParams();

  let recipe;
  if (!recipes) return null;
  if (recipes.length > 0) {
    recipe = recipes.find((recipe) => recipe.id === Number(id));
  }

  return (
    <>
      <Header title={recipe.name} />
      {isLoading && <p>Loading ...</p>}
      {error && <p>Das Rezept konnte leider nicht geladen werden. Sorry!</p>}
      {!recipe && (
        <p style={{ textAlign: "center" }}>
          Sorry, das Rezept konnte leider nicht gefunden werden.
        </p>
      )}
      {!isLoading && !error && (
        <Content>
          <RecipeContent>
            <RecipeDescription>{recipe.description}</RecipeDescription>
            <RecipePreparationTime>{recipe.duration}</RecipePreparationTime>
            <RecipeIngredientsCalculator />
            <RecipeIngredients ingredients={recipe.ingredients} />
          </RecipeContent>
        </Content>
      )}
    </>
  );
}

export default Recipe;
