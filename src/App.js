import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import EpisodeList from "./components/EpisodeList";
import FilterList from "./components/FilterList";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>

      <Route path="/characters" >
        <CharacterList />
      </Route>

      <Route path="/episodes" >
        <EpisodeList />
      </Route>

      <Route path="/filters" >
        <FilterList />
      </Route>
    </main>
  );
}
