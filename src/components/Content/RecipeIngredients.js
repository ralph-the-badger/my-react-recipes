function RecipeIngredients({ ingredients }) {
  const ingredientsList = ingredients.map((ingredient) => ingredient.subgroup);

  const bubu = ingredientsList.map((group) => group);
  console.log(bubu);

  return (
    <div>
      {ingredientsList.map((group) =>
        group.map((subgroup, i) => (
          <div key={Math.random(1000000000)}>
            <h3>{subgroup.title}</h3>
            <ul>
              {subgroup.list.map((list) => (
                <li key={Math.random(1000000000)}>
                  {list.amount}
                  {list.unit}: {list.name}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeIngredients;
