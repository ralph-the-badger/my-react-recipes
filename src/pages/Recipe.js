import { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import RecipeContent from "../components/Content/RecipeContent";
import RecipeDescription from "../components/Content/RecipeDescription";
import RecipePreparationTime from "../components/Content/RecipePreparationTime";
import RecipeIngredientsCalculator from "../components/Content/RecipeIngredientsCalculator";
import RecipeIngredients from "../components/Content/RecipeIngredients";
import RecipePreparation from "../components/Content/RecipePreparation";
import Navigation from "../components/Content/Navigation";
import Button from "../components/ui/Button/Button";

function Recipe({ recipes, isLoading, error }) {
  const navigate = useNavigate();

  const [personsAmount, setPersonsAmount] = useState(2);

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
            <RecipeDescription
              description={recipe.description}
              image={recipe.image}
              title={recipe.name}
            />
            <RecipePreparationTime duration={recipe.duration} />
            <RecipeIngredientsCalculator
              onHandlePersonsAmount={setPersonsAmount}
            />
            <RecipeIngredients
              ingredients={recipe.ingredients}
              personsAmount={personsAmount}
            />
            <RecipePreparation preparation={recipe.preparation} />
          </RecipeContent>
          <Navigation>
            <Button onClick={() => navigate("/")}>Zur Startseite</Button>
            <Button onClick={() => navigate("/rezepte")}>
              Zur Rezept-Übersicht
            </Button>
          </Navigation>
        </Content>
      )}
    </>
  );
}

export default Recipe;
