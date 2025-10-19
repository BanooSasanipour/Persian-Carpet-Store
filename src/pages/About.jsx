import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="container">
      <div className="aboutPage">
      <h2>Über Teppichgeschäft</h2>

      <section className="aboutIntro">
        <p>
          Willkommen bei <strong>Persian Carpet Store</strong> – In unserem Geschäft finden Sie die besten iranischen Teppiche hinsichtlich Vielfalt und Qualität.
        </p>
      </section>

      <section className="aboutMission">
        <h3>Unsere Mission</h3>
        <p>
          Wir glauben, dass jeder Mensch auf der Welt Teppiche aus den besten und hochwertigsten Materialien haben sollte.
        </p>
      </section>

      <section className="aboutValues">
        <h3>Was uns auszeichnet</h3>
        <ul>
          <li>Hohe Diversität</li>
          <li>Einfacher Zugang</li>
          <li>Beste Qualität</li>
          <li>Schneller und kostenloser Versand</li>
        </ul>
      </section>

      <section className="aboutTeam">
        <h3>Unser Team</h3>
        <p>
          Iranische Teppichspezialisten mit langjähriger Berufserfahrung. Professionelle Weber und hochprofessionelle Materiallieferanten.
        </p>
      </section>

      <section className="aboutCTA">
        <p>
          Sind Sie bereit, die herrliche Präsenz eines Perserteppichs in Ihrem Zuhause zu erleben? <strong>Entdecke unseren Shop</strong> und Wählen Sie den passenden Teppich für sich!
        </p>
        <a href="/shop" className="aboutButton">Zum Shop</a>
      </section>
    </div>

    </div>
    
  );
}