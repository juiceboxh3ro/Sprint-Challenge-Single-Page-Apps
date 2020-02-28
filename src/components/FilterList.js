import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {

  const [data, setData] = useState([]);

  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?name=${query}`)
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
            placeholder="Filter by name"
            autoComplete="off"
          />
        </form>
      </section>

      <div className="search-type-container">
        <Link className="search-type" to="/characters">Characters</Link>
      </div>

      <section className="character-list">
        {data.map(datum => {
          return( <CharacterCard key={datum.id} character={datum}/>)
        })}
      </section>
    </div>
  );
}
