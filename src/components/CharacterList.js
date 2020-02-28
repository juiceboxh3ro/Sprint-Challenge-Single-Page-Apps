import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {

  const [data, setData] = useState([]);

  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(res => {
      console.log(res.data.results);
      const characters = res.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase()));
      setData(characters);
    })
  }, [query]);

  const handleChange = e => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <section className="back">
        <Link to="/">«</Link>
      </section>
      <section className="search">
        <form>
          <input
            type="text"
            onChange={handleChange}
            value={query}
            name="name"
            placeholder="Search by name"
            autoComplete="off"
          />
        </form>
      </section>
      <section className="character-list">
        {data.map(datum => {
          return( <CharacterCard key={datum.id} character={datum}/>)
        })}
      </section>
    </div>
  );
}
