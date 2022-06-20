import Card from "../components/Card";
import styles from "../styles/Home.module.css";

export default function Cards({ filteredData, searchInput, characters }) {
  return (
    <section>
      <h2 className={styles.secondaryHeading}>
        {filteredData
          ? `Search results for ${searchInput.current.value} (${filteredData.length} results)`
          : "Rick and Morty characters"}
      </h2>
      <div className={styles.grid}>
        {(filteredData || characters).map((character) => {
          return <Card key={character.id} character={character} />;
        })}
      </div>
    </section>
  );
}
