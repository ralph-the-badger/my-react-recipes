import styles from "./RecipeDescription.module.css";

function RecipeDescription({ description, image, title }) {
  return (
    <div className={styles.description}>
      <div>
        <h2>Zum Rezept</h2>
        <p>{description}</p>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default RecipeDescription;
