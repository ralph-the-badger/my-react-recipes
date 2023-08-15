import Button from "../Button/Button";

import styles from "./CardContent.module.css";

function CardContent({ recipe }) {
  function onClickHandler(id) {
    console.log(id);
  }
  return (
    <>
      <img src={recipe.image} alt={recipe.name} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{recipe.name}</h3>
      <div className={styles.cardFlexible}></div>
      <Button
        className={styles.cardButton}
        onClick={() => onClickHandler(recipe.id)}
      >
        Zum Rezept
      </Button>
    </>
  );
}

export default CardContent;
