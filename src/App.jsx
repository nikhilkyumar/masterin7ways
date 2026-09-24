import { tw } from "./tailwind";
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
    const tracks = document.querySelectorAll("[data-marquee]");
    let scrollTimeout;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        entry.target.classList.toggle("running", entry.isIntersecting);
      }),
      { rootMargin: "200px 0px" }
    );

    tracks.forEach((track) => observer.observe(track));
    const pauseWhileScrolling = () => {
      tracks.forEach((track) => track.classList.add("paused"));
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        tracks.forEach((track) => track.classList.remove("paused"));
      }, 140);
    };
    window.addEventListener("scroll", pauseWhileScrolling, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", pauseWhileScrolling);
      window.clearTimeout(scrollTimeout);
      tracks.forEach((track) => track.classList.remove("paused"));
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
    <main className={tw.site}>

      {/* TOP STRIP */}

      <div className={tw.strip}>
        <span>© WE CREATE. YOU INSPIRE.</span>
      </div>


      {/* NAVIGATION */}

      <nav className={tw.nav}>

        <a className={tw.navLink} style={{ "--nav-delay": ".3s" }} href="/about">
          ABOUT
        </a>

        <a className={`${tw.navLink} max-[700px]:hidden`} style={{ "--nav-delay": ".4s" }} href="#customers">
          CUSTOMERS
        </a>

        <a className={tw.navLink} style={{ "--nav-delay": ".5s" }} href="#projects">
          PROJECTS
        </a>

        <a className={tw.navLink} style={{ "--nav-delay": ".6s" }} href="mailto:masterin7ways@gmail.com?subject=Website%20Enquiry&body=Hello%20Masterin7ways,%0A%0AI%20would%20like%20to%20discuss%20a%20project.">
          CONTACT
        </a>

      </nav>


      {/* HERO */}

      <section className={tw.hero}>

        {/* HUGE TITLE */}

        <h1 className={tw.title}>
          MASTERIN7WAYS
        </h1>


        {/* TEXT */}

        <div className={tw.copy}>

          <p className={tw.copyP}>
            SEVEN WAYS. ENDLESS POSSIBILITIES.
          </p>

          <p className={`${tw.copyP} ${tw.copySecond}`}>
            CRAFTING IMPACTFUL STORIES
            <br />
            THROUGH CREATIVITY.
            <span className={tw.star}>
              ★
            </span>
          </p>

        </div>


        {/* CHARACTER */}

        <div className={tw.char}>

          <img
            src={getCharacterImage()}
            alt="Character"
            className={tw.charImage}
            draggable="false"
          />

        </div>


        {/* CONTACT */}

        <div className={tw.contactWrap}>

         <a
           href="mailto:masterin7ways@gmail.com?subject=Website%20Enquiry&body=Hello%20Masterin7ways,%0A%0AI%20would%20like%20to%20discuss%20a%20project."
          className={`${tw.button} group`}>

            <span className={tw.buttonText}>
              CONTACT US
            </span>

            <span className={tw.arrow}>
              →
            </span>

          </a>

        </div>

      </section>


{/* =====================================================
    PROJECT SHOWCASE
===================================================== */}

<section id="projects" className={tw.showcase}>

  {/* BRAND LOGOS */}

  <div id="customers" className={tw.brandWrap}>

    <div data-marquee className={tw.brandTrack}>
<div className={tw.brand}>
  <img className={tw.brandImage} src="/logos/sony.png" alt="Sony" loading="lazy" decoding="async" />
</div>

<div className={tw.brand}>
  <img className={tw.brandImage} src="/logos/dji.png" alt="DJI" loading="lazy" decoding="async" />
</div>

<div className={tw.brand}>
  <img className={tw.brandImage} src="/logos/hasselblad.png" alt="Hasselblad" loading="lazy" decoding="async" />
</div>

<div className={tw.brand}>
  <img className={tw.brandImage} src="/logos/sigma.png" alt="Sigma" loading="lazy" decoding="async" />
</div>

<div className={tw.brand}>
  <img className={tw.brandImage} src="/logos/insta360.png" alt="Insta360" loading="lazy" decoding="async" />
</div>

      {/* duplicate for seamless loop */}
<div className={tw.brand}>
  <img className={tw.brandImage} src="/logos/sony.png" alt="Sony" loading="lazy" decoding="async" />
</div>

<div className={tw.brand}>
  <img className={tw.brandImage} src="/logos/dji.png" alt="DJI" loading="lazy" decoding="async" />
</div>

<div className={tw.brand}>
  <img className={tw.brandImage} src="/logos/hasselblad.png" alt="Hasselblad" loading="lazy" decoding="async" />
</div>

<div className={tw.brand}>
  <img className={tw.brandImage} src="/logos/sigma.png" alt="Sigma" loading="lazy" decoding="async" />
</div>

<div className={tw.brand}>
  <img className={tw.brandImage} src="/logos/insta360.png" alt="Insta360" loading="lazy" decoding="async" />
</div>

    </div>

  </div>


  {/* =================================================
      IMAGE ROW 1
  ================================================= */}

  <div className={tw.galleryRow}>

    <div data-marquee className={`${tw.galleryTrack} ${tw.galleryLeft}`}>
       <div className={`${tw.card} ${tw.cardLarge}`}>
        <img
          src="/projects/image1.webp"
          alt="Mountain landscape"
          decoding="async"
        />
      </div>

      <div className={`${tw.card} ${tw.cardLarge}`}>
        <img
          src="/projects/ganesh.webp"
          alt="ganesh"
          decoding="async"
        />
      </div>

      <div className={`${tw.card} ${tw.cardXL}`}>
        <img
          src="/projects/portrait.webp"
          alt="Portrait"
          decoding="async"
        />
      </div>

      <div className={`${tw.card} ${tw.cardMedium}`}>
        <img
          src="/projects/horse.webp"
          alt="horse"
          decoding="async"
        />
      </div>


      {/* duplicate */}
      <div className={`${tw.card} ${tw.cardLarge}`}>
        <img
          src="/projects/image1.webp"
          alt="Mountain landscape"
          decoding="async"
        />
      </div>

      <div className={`${tw.card} ${tw.cardLarge}`}>
        <img
          src="/projects/ganesh.webp"
          alt="ganesh"
          decoding="async"
        />
      </div>

      <div className={`${tw.card} ${tw.cardXL}`}>
        <img
          src="/projects/portrait.webp"
          alt="Portrait"
          decoding="async"
        />
      </div>

      <div className={`${tw.card} ${tw.cardMedium}`}>
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

  <div className={tw.galleryRow}>

    <div data-marquee className={`${tw.galleryTrack} ${tw.galleryRight}`}>

      <div className={`${tw.card} ${tw.cardWide}`}>
        <img
          src="/projects/sitting.webp"
          alt="sitting near ghat"
          decoding="async"
        />
      </div>

      <div className={`${tw.card} ${tw.cardWide}`}>
        <img
          src="/projects/model.webp"
          alt="3d model"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={`${tw.card} ${tw.cardWide}`}>
        <img
          src="/projects/temple.webp"
          alt="Temple"
          loading="lazy"
          decoding="async"
        />
      </div>


  <div className={`${tw.card} ${tw.cardXL}`}>
    <img src="/projects/table.webp" alt="Project 7" loading="lazy" decoding="async" />
  </div>


      {/* duplicate */}

      <div className={`${tw.card} ${tw.cardWide}`}>
        <img
          src="/projects/sitting.webp"
          alt="sitting near ghat"
          decoding="async"
        />
      </div>

      <div className={`${tw.card} ${tw.cardWide}`}>
        <img
          src="/projects/model.webp"
          alt="3d model"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={`${tw.card} ${tw.cardWide}`}>
        <img
          src="/projects/temple.webp"
          alt="Temple"
          loading="lazy"
          decoding="async"
        />
      </div>

  <div className={`${tw.card} ${tw.cardXL}`}>
    <img src="/projects/table.webp" alt="Project 7" loading="lazy" decoding="async" />
    
  </div>

    </div>

  </div>


  {/* DOTS */}

  <div className={tw.dots}>

    <span className={`${tw.dot} ${tw.dotActive}`}></span>
    <span className={tw.dot}></span>
    <span className={tw.dot}></span>
    <span className={tw.dot}></span>
    <span className={tw.dot}></span>
    <span className={tw.dot}></span>

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
