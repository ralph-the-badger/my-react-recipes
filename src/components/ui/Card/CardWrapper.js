import styles from "./CardWrapper.module.css";

function CardWrapper({ children }) {
  return <li className={styles.cardWrapper}>{children}</li>;
}

export default CardWrapper;
