import styles from "../styles/Home.module.css";

export default function Search({ handleSubmit, searchInput }) {
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2 className={`${styles.secondaryHeading} ${styles.searchHeading}`}>
          Search
        </h2>
        <label className={styles.searchLabel}>
          Character name
          <input
            className={styles.searchInput}
            ref={searchInput}
            type="text"
            placeholder="Enter a character name"
          />
        </label>
        <button className={styles.cta} type="submit">
          Filter
        </button>
      </form>
    </section>
  );
}
