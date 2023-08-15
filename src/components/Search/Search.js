import styles from "./Search.module.css";
import Button from "../ui/Button/Button";

function Search({ searchValue, setSearchValue }) {
  // function handleSearchSubmit(e) {
  //   e.preventDefault();
  //   setSearchValue(e.target.value);
  // }

  return (
    <form
      className={`container ${styles.searchForm}`}
      // onSubmit={handleSearchSubmit}
    >
      <p>Worauf hast du heute Lust?</p>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button className={styles.button}>Suchen</Button>
    </form>
  );
}

export default Search;
