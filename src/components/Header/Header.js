import styles from "./Header.module.css";

function Header({ title = "Meine liebsten Rezepte" }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </header>
  );
}

export default Header;
