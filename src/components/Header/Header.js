import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1>Meine liebsten Rezepte</h1>
      </div>
    </header>
  );
}

export default Header;
