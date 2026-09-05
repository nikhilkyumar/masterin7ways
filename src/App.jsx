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

  let animationFrame = null;

  let isScrolling = false;

  const updateRotation = () => {
    animationFrame = null;

    if (isScrolling) {
      setRotation(scrollRotation);
    } else {
      setRotation(mouseRotation);
    }
  };

  const requestUpdate = () => {
    if (animationFrame === null) {
      animationFrame = requestAnimationFrame(updateRotation);
    }
  };

  const handleMouseMove = (e) => {
    const mousePercent =
      e.clientX / window.innerWidth;

    mouseRotation = mousePercent * 360;

    isScrolling = false;

    requestUpdate();
  };

  const handleScroll = () => {
    /*
      Scroll controls character rotation.
      1200px = 360°
    */

    scrollRotation =
      (window.scrollY / 1200) * 360;

    scrollRotation =
      scrollRotation % 360;

    isScrolling = true;

    requestUpdate();
  };

  window.addEventListener(
    "mousemove",
    handleMouseMove,
    { passive: true }
  );

  window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
  );

  return () => {
    window.removeEventListener(
      "mousemove",
      handleMouseMove
    );

    window.removeEventListener(
      "scroll",
      handleScroll
    );

    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
    }
  };
}, []);

  // Stop marquee compositing when it is offscreen or while the page is moving.
  useEffect(() => {
    const tracks = document.querySelectorAll(".brands-track, .gallery-track");
    let scrollTimeout;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        entry.target.classList.toggle("is-in-viewport", entry.isIntersecting);
      }),
      { rootMargin: "200px 0px" }
    );

    tracks.forEach((track) => observer.observe(track));
    const pauseWhileScrolling = () => {
      document.documentElement.classList.add("is-scrolling");
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        document.documentElement.classList.remove("is-scrolling");
      }, 140);
    };
    window.addEventListener("scroll", pauseWhileScrolling, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", pauseWhileScrolling);
      window.clearTimeout(scrollTimeout);
      document.documentElement.classList.remove("is-scrolling");
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
  <img src="/logos/sony.png" alt="Sony" loading="lazy" decoding="async" />
</div>

<div className="brand">
  <img src="/logos/dji.png" alt="DJI" loading="lazy" decoding="async" />
</div>

<div className="brand">
  <img src="/logos/hasselblad.png" alt="Hasselblad" loading="lazy" decoding="async" />
</div>

<div className="brand">
  <img src="/logos/sigma.png" alt="Sigma" loading="lazy" decoding="async" />
</div>

<div className="brand">
  <img src="/logos/insta360.png" alt="Insta360" loading="lazy" decoding="async" />
</div>

      {/* duplicate for seamless loop */}
<div className="brand">
  <img src="/logos/sony.png" alt="Sony" loading="lazy" decoding="async" />
</div>

<div className="brand">
  <img src="/logos/dji.png" alt="DJI" loading="lazy" decoding="async" />
</div>

<div className="brand">
  <img src="/logos/hasselblad.png" alt="Hasselblad" loading="lazy" decoding="async" />
</div>

<div className="brand">
  <img src="/logos/sigma.png" alt="Sigma" loading="lazy" decoding="async" />
</div>

<div className="brand">
  <img src="/logos/insta360.png" alt="Insta360" loading="lazy" decoding="async" />
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
          src="/projects/image1.webp"
          alt="Mountain landscape"
          decoding="async"
        />
      </div>

      <div className="gallery-card large">
        <img
          src="/projects/ganesh.webp"
          alt="ganesh"
          decoding="async"
        />
      </div>

      <div className="gallery-card extra-large">
        <img
          src="/projects/portrait.webp"
          alt="Portrait"
          decoding="async"
        />
      </div>

      <div className="gallery-card medium">
        <img
          src="/projects/horse.webp"
          alt="horse"
          decoding="async"
        />
      </div>


      {/* duplicate */}
      <div className="gallery-card large">
        <img
          src="/projects/image1.webp"
          alt="Mountain landscape"
          decoding="async"
        />
      </div>

      <div className="gallery-card large">
        <img
          src="/projects/ganesh.webp"
          alt="ganesh"
          decoding="async"
        />
      </div>

      <div className="gallery-card extra-large">
        <img
          src="/projects/portrait.webp"
          alt="Portrait"
          decoding="async"
        />
      </div>

      <div className="gallery-card medium">
        <img
          src="/projects/horse.webp"
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
          src="/projects/sitting.webp"
          alt="sitting near ghat"
          decoding="async"
        />
      </div>

      <div className="gallery-card wide">
        <img
          src="/projects/model.webp"
          alt="3d model"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="gallery-card wide">
        <img
          src="/projects/temple.webp"
          alt="Temple"
          loading="lazy"
          decoding="async"
        />
      </div>


  <div className="gallery-card extra-large">
    <img src="/projects/table.webp" alt="Project 7" loading="lazy" decoding="async" />
  </div>


      {/* duplicate */}

      <div className="gallery-card wide">
        <img
          src="/projects/sitting.webp"
          alt="sitting near ghat"
          decoding="async"
        />
      </div>

      <div className="gallery-card wide">
        <img
          src="/projects/model.webp"
          alt="3d model"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="gallery-card wide">
        <img
          src="/projects/temple.webp"
          alt="Temple"
          loading="lazy"
          decoding="async"
        />
      </div>

  <div className="gallery-card extra-large">
    <img src="/projects/table.webp" alt="Project 7" loading="lazy" decoding="async" />
    
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
{/* ABOUT SECTION */}

<About embedded={true} />

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
