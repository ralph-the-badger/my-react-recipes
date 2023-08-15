import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";

function App() {
  const [recipes, setRecipes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("../data/recipes.json", {
          signl: abortController.signal,
        });
        if (!response.ok) {
          throw new Error("Die Daten können nicht geladen werden.");
        }
        const recipesJSON = await response.json();
        const recipesData = recipesJSON.recipes
          .map((recipe) => recipe)
          .sort((a, b) => {
            if (a.name < b.name) return -1;
            else if (a.name > b.name) return 1;
            return 0;
          });
        setRecipes(recipesData);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message);
        }
      } finally {
        setError("");
        setIsLoading(false);
      }
    }
    fetchData();
    return function () {
      abortController.abort();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Home recipes={recipes} isLoading={isLoading} error={error} />
          }
        />
        <Route
          path="/rezepte"
          element={
            <Recipes recipes={recipes} isLoading={isLoading} error={error} />
          }
        />
        <Route
          path="/rezepte/:id"
          element={
            <Recipe recipes={recipes} isLoading={isLoading} error={error} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
