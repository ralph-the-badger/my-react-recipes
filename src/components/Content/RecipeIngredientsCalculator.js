import styles from "./RecipeIngredientsCalculator.module.css";

function RecipeIngredientsCalculator({ onHandlePersonsAmount }) {
  function handlePersonsAmount(e) {
    e.preventDefault();
    onHandlePersonsAmount(e.target.value);
  }

  return (
    <div className={styles.calculator}>
      <h2>Anpassen der Zutatenmenge</h2>
      <select id="persons-amount-select" onChange={handlePersonsAmount}>
        <option value={1}>1 Person</option>
        <option value={2}>2 Personen</option>
        <option value={3}>3 Personen</option>
        <option value={4}>4 Personen</option>
        <option value={5}>5 Personen</option>
        <option value={6}>6 Personen</option>
        <option value={7}>7 Personen</option>
        <option value={8}>8 Personen</option>
        <option value={9}>9 Personen</option>
        <option value={10}>10 Personen</option>
      </select>
    </div>
  );
}

export default RecipeIngredientsCalculator;
