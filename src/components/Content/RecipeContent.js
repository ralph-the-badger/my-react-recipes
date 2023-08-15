import styles from "./RecipeContent.module.css";

function RecipeContent({ children }) {
  return <section className={styles.recipeContent}>{children}</section>;
}

export default RecipeContent;
