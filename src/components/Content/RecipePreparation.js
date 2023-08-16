import styles from "./RecipePreparation.module.css";

function RecipePreparation({ preparation }) {
  const preparationList = preparation
    .map((prep) => prep)
    .sort((a, b) => {
      if (a.step > b.step) return 1;
      if (a.step < b.step) return -1;
      return 0;
    });

  return (
    <div className={styles.preparation}>
      <h2>Zubereitung</h2>
      <ul>
        {preparationList.map((step) => (
          <li key={step.step}>
            <p>
              <strong>Schritt {step.step}</strong>: {step.todo}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipePreparation;
