import styles from "./Error404.module.css";

function Error404() {
  return (
    <div className={styles.error}>
      <h1>ERROR 404</h1>
      <h2>Page not found</h2>
    </div>
  );
}

export default Error404;
