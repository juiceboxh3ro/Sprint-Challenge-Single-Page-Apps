import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";

import { MyButton, PickleRick } from "./styles";

export default function CharacterList() {

  const [data, setData] = useState([]);

  const [query, setQuery] = useState('');

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

  const giveMeRick = e => setQuery('Pickle Rick');

  return (
    <div className="container">
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

      
      <MyButton>
        <Link className="search-type" to="/characters">Characters</Link>
      </MyButton><br/>
      <section className="pickle-holder">
        <PickleRick onClick={giveMeRick}>🥒</PickleRick><br/>
      </section>

      <section className="character-list">
        {data.map(datum => {
          return( <CharacterCard key={datum.id} character={datum}/>)
        })}
      </section>
    </div>
  );
}
