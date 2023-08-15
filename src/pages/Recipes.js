import { useState, useEffect } from "react";

import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Content from "../components/Content/Content";
import RecipeOverview from "../components/Content/RecipeOverview";
import RecipeContent from "../components/Content/RecipeContent";

function Recipes({ recipes, isLoading, error }) {
  const [searchValue, setSearchValue] = useState("");
  const [shownRecipes, setShownRecipes] = useState([]);

  useEffect(() => {
    if (!recipes) return;
    if (recipes.length > 0) {
      const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchValue)
      );
      setShownRecipes(filteredRecipes);
    } else {
      setShownRecipes(recipes);
    }
  }, [recipes, searchValue]);

  return (
    <>
      <Header />
      {isLoading && <p>Loading ...</p>}
      {error && <p>Die Rezepte können leider nicht geladen werden. Sorry!</p>}
      {shownRecipes.length === 0 && (
        <p style={{ textAlign: "center" }}>
          Sorry, die Rezepte konnten leider nicht gefunden werden.
        </p>
      )}
      {!isLoading && !error && (
        <Content>
          <RecipeContent>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </RecipeContent>
          <RecipeOverview recipes={shownRecipes} />
        </Content>
      )}
    </>
  );
}

export default Recipes;
