import styles from "./Pagination.module.css";

function Pagination({ handlePrevPage, handleNextPage, isPrev, isNext }) {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.btn}
        disabled={!isPrev}
        onClick={handlePrevPage}
      >
        ⬅
      </button>
      <button
        className={styles.btn}
        disabled={!isNext}
        onClick={handleNextPage}
      >
        ➡
      </button>
    </div>
  );
}

export default Pagination;
