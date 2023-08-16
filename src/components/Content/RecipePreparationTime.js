import styles from "./RecipePreparationTime.module.css";

function RecipePreparationTime({ duration }) {
  return (
    <div className={styles.preparationTime}>
      <h2>Zubereitungszeit</h2>
      <p>{duration}</p>
    </div>
  );
}

export default RecipePreparationTime;
