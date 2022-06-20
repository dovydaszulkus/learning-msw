import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Card({ character }) {
  const { episode: episodes, gender, image, name, species, status } = character;

  const dataList = [
    {
      title: "Gender",
      data: gender,
    },
    {
      title: "Species",
      data: species,
    },
    {
      title: "Status",
      data: status,
    },
    {
      title: "Episodes",
      data: episodes.length,
    },
  ];

  return (
    <article>
      <Image src={`${image}`} width={300} height={300} alt={name} />
      <div>
        <h3 className={styles.cardHeader}>{name}</h3>
        <ul className={styles.dataList}>
          {dataList.map((listItem) => {
            const { title, data } = listItem;
            return (
              <li key={title} className={styles.dataListItem}>
                <span>{title}:</span> {data}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
