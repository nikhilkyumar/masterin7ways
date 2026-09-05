import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";

function Homepage() {
  // Rotation in degrees: 0 → 360
  const [rotation, setRotation] = useState(0);

useEffect(() => {

  let mouseRotation = 0;
  let scrollRotation = 0;

  const handleMouseMove = (e) => {

    const mousePercent = e.clientX / window.innerWidth;

    /*
      Convert mouse position to 0 → 360 degrees
    */

    mouseRotation = mousePercent * 360;

    setRotation(mouseRotation);
  };


  const handleScroll = () => {

    /*
      Every 1200px of scrolling
      completes one 360° rotation.
    */

    scrollRotation = (window.scrollY / 1200) * 360;

    scrollRotation = scrollRotation % 360;

    setRotation(scrollRotation);
  };


  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("scroll", handleScroll);


  return () => {

    window.removeEventListener(
      "mousemove",
      handleMouseMove
    );

    window.removeEventListener(
      "scroll",
      handleScroll
    );

  };

}, []);


/*
  CHARACTER VIEW
*/

const getCharacterImage = () => {

  /*
    FRONT
    315° → 360°
    0° → 45°
  */

  if (
    rotation >= 315 ||
    rotation < 45
  ) {
    return "/character/front.png";
  }


  /*
    RIGHT
    45° → 135°
  */

  if (
    rotation >= 45 &&
    rotation < 135
  ) {
    return "/character/right.png";
  }


  /*
    BACK
    135° → 225°
  */

  if (
    rotation >= 135 &&
    rotation < 225
  ) {
    return "/character/back.png";
  }


  /*
    LEFT
    225° → 315°
  */

  if (
    rotation >= 225 &&
    rotation < 315
  ) {
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

        <a href="/about">
          ABOUT
        </a>

        <a href="#customers">
          CUSTOMERS
        </a>

        <a href="#projects">
          PROJECTS
        </a>

        <a href="mailto:masterin7ways@gmail.com?subject=Website%20Enquiry&body=Hello%20Masterin7ways,%0A%0AI%20would%20like%20to%20discuss%20a%20project.">
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

         <a
           href="mailto:masterin7ways@gmail.com?subject=Website%20Enquiry&body=Hello%20Masterin7ways,%0A%0AI%20would%20like%20to%20discuss%20a%20project."
          className="contact-button">

            <span>
              CONTACT US
            </span>

            <span className="contact-arrow">
              →
            </span>

          </a>

        </div>

      </section>


{/* =====================================================
    PROJECT SHOWCASE
===================================================== */}

<section className="showcase-section">

  {/* BRAND LOGOS */}

  <div className="brands-track-wrapper">

    <div className="brands-track">
<div className="brand">
  <img src="/logos/sony.png" alt="Sony" />
</div>

<div className="brand">
  <img src="/logos/dji.png" alt="DJI" />
</div>

<div className="brand">
  <img src="/logos/hasselblad.png" alt="Hasselblad" />
</div>

<div className="brand">
  <img src="/logos/sigma.png" alt="Sigma" />
</div>

<div className="brand">
  <img src="/logos/insta360.png" alt="Insta360" />
</div>

      {/* duplicate for seamless loop */}
<div className="brand">
  <img src="/logos/sony.png" alt="Sony" />
</div>

<div className="brand">
  <img src="/logos/dji.png" alt="DJI" />
</div>

<div className="brand">
  <img src="/logos/hasselblad.png" alt="Hasselblad" />
</div>

<div className="brand">
  <img src="/logos/sigma.png" alt="Sigma" />
</div>

<div className="brand">
  <img src="/logos/insta360.png" alt="Insta360" />
</div>

    </div>

  </div>


  {/* =================================================
      IMAGE ROW 1
  ================================================= */}

  <div className="gallery-row gallery-row-left">

    <div className="gallery-track">
       <div className="gallery-card large">
        <img
          src="/projects/image1.jpg"
          alt="Mountain landscape"
          decoding="async"
        />
      </div>

      <div className="gallery-card large">
        <img
          src="/projects/ganesh.jpg"
          alt="ganesh"
          decoding="async"
        />
      </div>

      <div className="gallery-card extra-large">
        <img
          src="/projects/portrait.jpg"
          alt="Portrait"
          decoding="async"
        />
      </div>

      <div className="gallery-card medium">
        <img
          src="/projects/horse.jpg"
          alt="horse"
          decoding="async"
        />
      </div>


      {/* duplicate */}
      <div className="gallery-card large">
        <img
          src="/projects/image1.jpg"
          alt="Mountain landscape"
          decoding="async"
        />
      </div>

      <div className="gallery-card large">
        <img
          src="/projects/ganesh.jpg"
          alt="ganesh"
          decoding="async"
        />
      </div>

      <div className="gallery-card extra-large">
        <img
          src="/projects/portrait.jpg"
          alt="Portrait"
          decoding="async"
        />
      </div>

      <div className="gallery-card medium">
        <img
          src="/projects/horse.jpg"
          alt="horse"
          decoding="async"
        />
      </div>

    </div>

  </div>


  {/* =================================================
      IMAGE ROW 2
  ================================================= */}

  <div className="gallery-row gallery-row-right">

    <div className="gallery-track">

      <div className="gallery-card wide">
        <img
          src="/projects/sitting.jpg"
          alt="sitting near ghat"
          decoding="async"
        />
      </div>

      <div className="gallery-card wide">
        <img
          src="/projects/model.jpg"
          alt="3d model"
          decoding="async"
        />
      </div>

      <div className="gallery-card wide">
        <img
          src="/projects/temple.jpg"
          alt="Temple"
          decoding="async"
        />
      </div>


  <div className="gallery-card extra-large">
    <img src="/projects/table.jpg" alt="Project 7" decoding="async"/>
  </div>


      {/* duplicate */}

      <div className="gallery-card wide">
        <img
          src="/projects/sitting.jpg"
          alt="sitting near ghat"
          decoding="async"
        />
      </div>

      <div className="gallery-card wide">
        <img
          src="/projects/model.jpg"
          alt="3d model"
          decoding="async"
        />
      </div>

      <div className="gallery-card wide">
        <img
          src="/projects/temple.jpg"
          alt="Temple"
         decoding="async"
        />
      </div>

  <div className="gallery-card extra-large">
    <img src="/projects/table.jpg" alt="Project 7" decoding="async" />
    
  </div>

    </div>

  </div>


  {/* DOTS */}

  <div className="showcase-dots">

    <span className="active"></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>

  </div>

</section>

    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Homepage />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;