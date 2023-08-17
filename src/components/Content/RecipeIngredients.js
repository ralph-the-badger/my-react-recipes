import styles from "./RecipeIngredients.module.css";

function RecipeIngredients({ ingredients, personsAmount }) {
  const ingredientsList = ingredients.map((ingredient) => ingredient.subgroup);

  return (
    <div className={styles.ingredients}>
      <h2>Zutaten</h2>

      <div className={styles.ingredientsGroup}>
        {ingredientsList.map((group) =>
          group.map((subgroup, i) => (
            <div
              className={styles.ingredientsSubgroup}
              key={Math.random(1000000000)}
            >
              {subgroup.title !== null && <h3>{subgroup.title}</h3>}
              <ul>
                {subgroup.list.map((list) => (
                  <li key={Math.random(1000000000)}>
                    <p>
                      <strong>
                        {list.amount !== null &&
                          list.unit !== null &&
                          `${list.amount * personsAmount}${list.unit}: `}
                        {list.amount === null && list.unit === null && ``}
                        {list.amount !== null &&
                          list.unit === null &&
                          `${list.amount * personsAmount} `}
                      </strong>{" "}
                      {list.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RecipeIngredients;
