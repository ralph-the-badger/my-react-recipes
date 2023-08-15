import styles from "./Content.module.css";

function Content({ children }) {
  return <main className={`container ${styles.content}`}>{children}</main>;
}

export default Content;
