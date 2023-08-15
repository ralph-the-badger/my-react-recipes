import Card from "../ui/Card/Card";

import styles from "./RecipeOverview.module.css";

function RecipeOverview({ recipes }) {
  if (!recipes) return;
  if (recipes.length > 0) {
    return (
      <ul className={styles.list}>
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    );
  }
}

export default RecipeOverview;
