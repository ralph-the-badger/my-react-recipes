import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Content from "../components/Content/Content";
import RecipeOverview from "../components/Content/RecipeOverview";
import RecipeContent from "../components/Content/RecipeContent";
import Navigation from "../components/Content/Navigation";
import Button from "../components/ui/Button/Button";

function Recipes({ recipes, isLoading, error }) {
  const navigate = useNavigate();

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
      {!isLoading && !error && (
        <Content>
          <RecipeContent>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            {shownRecipes.length === 0 && (
              <p style={{ textAlign: "center" }}>
                Sorry, das Rezepte konnte leider nicht gefunden werden.
              </p>
            )}
          </RecipeContent>
          <RecipeOverview recipes={shownRecipes} />
          <Navigation>
            <Button onClick={() => navigate("/")}>Zurück zur Startseite</Button>
          </Navigation>
        </Content>
      )}
    </>
  );
}

export default Recipes;
