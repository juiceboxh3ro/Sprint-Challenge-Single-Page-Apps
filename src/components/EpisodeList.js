import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {

  const [data, setData] = useState([]);

  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/episode/`)
    .then(res => {
      console.log(res.data.results);
      const episodes = res.data.results.filter(episode => episode.name.toLowerCase().includes(query.toLowerCase()));
      setData(episodes);
    })
    .catch(err => console.log('Something went wrong getting data from the episode API', err))
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
            placeholder="Search by episode name"
            autoComplete="off"
          />
        </form>
      </section>
      <section className="character-list">
        {data.map(datum => {
          return( <EpisodeCard key={datum.id} episode={datum}/>)
        })}
      </section>
    </div>
  );
}
