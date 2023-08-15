import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Content from "./components/Content/Content";

function App() {
  const [recipes, setRecipes] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../data/recipes.json");
      const recipesData = await response.json();
      setRecipes(recipesData);
    };
    fetchData();
  }, []);

  let filteredRecipes;

  useEffect(() => {
    if (!recipes) return;
    if (recipes.recipes.length > 0) {
      filteredRecipes = recipes.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchValue)
      );
      console.log(filteredRecipes);
    } else {
      filteredRecipes = recipes.recipes;
    }
  }, [recipes, searchValue]);

  return (
    <>
      <Header />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Content recipes={recipes} />
    </>
  );
}

export default App;
