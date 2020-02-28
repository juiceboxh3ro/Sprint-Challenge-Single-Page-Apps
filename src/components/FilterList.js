import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {

  const [data, setData] = useState([]);

  const [query, setQuery] = useState('Rick');

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then(res => {
      console.log("Successful get request", res.data);
      const characters = res.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase()));
      setData(characters);
    })
    .catch(err => console.log('Something went wrong getting data from the character API', err))
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
        <Link to="/characters">Characters</Link>
      </section>
      <section className="character-list">
        {data.map(datum => {
          return( <CharacterCard key={datum.id} character={datum}/>)
        })}
      </section>
    </div>
  );
}
