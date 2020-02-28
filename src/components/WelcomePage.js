import React from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to="/characters">
          <img
          className="main-img"
          src="https://i.pinimg.com/474x/3d/44/40/3d4440f47bb6b4451aec6474fa972087.jpg"
          alt="Floating Head"/>
        </Link>
      </header>
    </section>
  );
}
