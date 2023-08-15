import { useState, useEffect } from "react";

import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import RecipeOverview from "../components/Content/RecipeOverview";
import RecipeContent from "../components/Content/RecipeContent";

function Home({ recipes, isLoading, error }) {
  const [filteredHighlights, setFilteredHighlights] = useState([]);

  useEffect(() => {
    if (!recipes) return;
    if (recipes.length > 0) {
      const filteredData = recipes.filter(
        (recipe) => recipe.highlight === true
      );
      setFilteredHighlights([...filteredData]);
    }
  }, [recipes, setFilteredHighlights]);

  return (
    <>
      <Header />
      {isLoading && <p>Loading ...</p>}
      {error && <p>Highlights können leider nicht geladen werden. Sorry!</p>}
      {!isLoading && !error && (
        <Content>
          <RecipeContent>
            <h2>Hier gibt es die besten Rezepte</h2>
            <p>
              In den vergangenen Jahren habe ich eine Sammlung aus den besten
              Familienrezepten zusammengestellt. Diese Website fasst meine
              liebsten Gerichte an einer Stelle zusammen. Auch das Nachkochen
              macht Spaß!
            </p>
            <p>Hier finden Sie eine Auswahl meiner absoluten Highlights:</p>
            <h2>Highlights</h2>
          </RecipeContent>
          <RecipeOverview recipes={filteredHighlights} />
        </Content>
      )}
    </>
  );
}

export default Home;
