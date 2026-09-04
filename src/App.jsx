import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // Rotation in degrees: 0 → 360
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      /*
        Mouse position controls the 360° rotation.

        Far left   = 270°
        Center     = 0°
        Far right  = 90°
      */

      const mousePercent = e.clientX / window.innerWidth;

      const mouseRotation = mousePercent * 360;

      setRotation(mouseRotation);
    };

    const handleScroll = () => {
      /*
        Scrolling also rotates the character.

        Every 300px of scrolling = another rotation.
      */

      const scrollRotation = (window.scrollY / 300) * 360;

      // Keep rotation between 0 and 360
      const normalizedRotation = scrollRotation % 360;

      setRotation(normalizedRotation);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  /*
    Choose the correct character image
    based on the current rotation.
  */

  const getCharacterImage = () => {
    // FRONT
    if (rotation >= 315 || rotation < 45) {
      return "/character/front.png";
    }

    // RIGHT
    if (rotation >= 45 && rotation < 135) {
      return "/character/right.png";
    }

    // BACK
    if (rotation >= 135 && rotation < 225) {
      return "/character/back.png";
    }

    // LEFT
    if (rotation >= 225 && rotation < 315) {
      return "/character/left.png";
    }

    return "/character/front.png";
  };


  return (
    <main className="site">

      {/* TOP STRIP */}

      <div className="top-strip">
        <span>© WE CREATE. YOU INSPIRE.</span>
      </div>


      {/* NAVIGATION */}

      <nav className="navbar">

        <a href="#about">
          ABOUT
        </a>

        <a href="#customers">
          CUSTOMERS
        </a>

        <a href="#projects">
          PROJECTS
        </a>

        <a href="#contact">
          CONTACT
        </a>

      </nav>


      {/* HERO */}

      <section className="hero">

        {/* HUGE TITLE */}

        <h1 className="hero-title">
          MASTERIN7WAYS
        </h1>


        {/* TEXT */}

        <div className="hero-copy">

          <p>
            SEVEN WAYS. ENDLESS POSSIBILITIES.
          </p>

          <p>
            CRAFTING IMPACTFUL STORIES
            <br />
            THROUGH CREATIVITY.
            <span className="star">
              ★
            </span>
          </p>

        </div>


        {/* CHARACTER */}

        <div className="character-container">

          <img
            src={getCharacterImage()}
            alt="Character"
            className="character-image"
            draggable="false"
          />

        </div>


        {/* CONTACT */}

        <div className="hero-contact">

          <button className="contact-button">

            <span>
              CONTACT US
            </span>

            <span className="contact-arrow">
              →
            </span>

          </button>

        </div>

      </section>


      {/* SCROLL CONTENT */}

      <section className="scroll-section">

        <div className="scroll-content">

          <h2>
            EXPLORE
          </h2>

        </div>

      </section>

    </main>
  );
}

export default App;