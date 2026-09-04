import "./App.css";

function App() {
  return (
    <main className="site">

      {/* TOP STRIP */}
      <div className="top-strip">
        <span>© WE CREATE. YOU INSPIRE.</span>
      </div>

      {/* NAVIGATION */}
      <nav className="navbar">

        <a href="#about">ABOUT</a>
        <a href="#customers">CUSTOMERS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>

      </nav>

      {/* HERO */}
      <section className="hero">

        {/* HUGE BACKGROUND TITLE */}
        <h1 className="hero-title">
          MASTERIN7WAYS
        </h1>

        {/* LEFT TEXT */}
        <div className="hero-copy">

          <p>
            SEVEN WAYS. ENDLESS POSSIBILITIES.
          </p>

          <p>
            CRAFTING IMPACTFUL STORIES
            <br />
            THROUGH CREATIVITY.
            <span className="star">★</span>
          </p>

        </div>

        {/* CHARACTER */}
        <div className="character-container">

          <img
            src="/character/front.png"
            alt="Character"
            className="character-image"
          />

        </div>

        {/* CONTACT BUTTON */}
        <div className="hero-contact">

          <button className="contact-button">
            <span>CONTACT US</span>

            <span className="contact-arrow">
              →
            </span>
          </button>

        </div>

      </section>

    </main>
  );
}

export default App;