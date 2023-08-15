import Card from "../ui/Card/Card";

import styles from "./Content.module.css";

function Content({ recipes }) {
  return (
    recipes && (
      <main className={`container ${styles.content}`}>
        <ul className={styles.list}>
          {recipes.recipes.map((recipe) => (
            <Card key={recipe.id} recipe={recipe} />
          ))}
        </ul>
      </main>
    )
  );
}

export default Content;
