import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="notFoundPage">
      <h2>Seite nicht gefunden</h2>
      <p>Die angeforderte Seite existiert nicht.</p>
      <Link to="/">
        <button>Zur Startseite</button>
      </Link>
    </div>
  );
}