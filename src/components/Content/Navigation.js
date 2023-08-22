import styles from "./Navigation.module.css";

function Navigation({ children }) {
  return (
    <section className={`container ${styles.navigation}`}>{children}</section>
  );
}

export default Navigation;
