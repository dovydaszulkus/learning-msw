import { useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import fetch from "node-fetch";
import SEO from "../components/SEO";
import Heading from "../components/Heading";
import Search from "../components/Search";
import Cards from "../components/Cards";
import Error from "../components/Error";

export default function Home({ data }) {
  const [filteredData, setFilteredData] = useState();
  const searchInput = useRef(null);

  let characters = data.results;

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchInputValue = searchInput.current.value.trim();

    if (searchInputValue.length <= 0) {
      setFilteredData(null);
      return true;
    }

    fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/rickandmorty`, {
      method: "POST",
      body: JSON.stringify({ searchValue: searchInputValue }),
    })
      .then((res) => res.json())
      .then((filteredCharacters) => setFilteredData(filteredCharacters));
  };

  return (
    <div className={styles.container}>
      <SEO />
      <main className={styles.main}>
        <Heading />
        <Search handleSubmit={handleSubmit} searchInput={searchInput} />
        {filteredData?.error || data.error ? (
          <Error />
        ) : (
          <Cards
            filteredData={filteredData}
            searchInput={searchInput}
            characters={characters}
          />
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  let url = process.env.NEXT_PUBLIC_API_URL;

  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled" && query.error) {
    url += `?error=true`;
  }

  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
