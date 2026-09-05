import "./About.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function About( {embedded = false }) {

  useEffect(() => {
  const animatedElements =
    document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          // Animate only once
          observer.unobserve(entry.target);
        }

      });
    },
    {
      threshold: 0.15,
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    observer.disconnect();
  };

}, []);


  return (
    <main
  id={embedded ? "about" : undefined}
  className={embedded ? "about-page about-embedded" : "about-page"}>


      {/* =====================================================
          TOP NAV
      ===================================================== */}

     <header className="about-header">

  {!embedded && (
    <Link
      to="/"
      className="about-back"
    >
      ← HOME
    </Link>
  )}

  {!embedded && (
    <div className="about-logo">
      MASTERIN7WAYS
    </div>
  )}

  <div className="about-header-space"></div>

</header>


      {/* =====================================================
          PAGE TITLE
      ===================================================== */}

      <section className="about-hero">

        {/* Decorations */}

        <img
          src="/about/star.png"
          alt=""
          className="about-decoration decor-star scroll-animate"
        />

        <img
          src="/about/fist.png"
          alt=""
          className="about-decoration decor-fist scroll-animate"
        />

        <div className="about-title-group scroll-animate">

          <h1>
            ABOUT US
          </h1>

          <div className="about-line">
            <span></span>
          </div>

        </div>

      </section>


      {/* =====================================================
          FOUNDER
      ===================================================== */}

      <section className="person-section person-one">

        {/* Decoration */}

        <img
          src="/about/heart.png"
          alt=""
          className="about-decoration decor-heart-one scroll-animate"
        />


        {/* Character */}

        <div className="person-image person-image-left scroll-animate">

          <img
            src="/about/spiker.png"
            alt="Founder"
          />

        </div>


        {/* Information */}

        <div className="person-info person-info-right scroll-animate">

          <div className="person-line"></div>

          <div className="person-content">

            <h2>
              Spiker Sameeyol
              <br />
              (Sanjit Raghuvanshi)
            </h2>

            <h3>
              Founder of Masterin7ways
            </h3>

            <p>
              Sanjit is the Founder of Masterin7ways and the
              creative force behind its visual production. He leads
              camera operations, filmmaking, editing, photography,
              and on-ground production, bringing ideas to life
              through powerful visual storytelling. From capturing
              a moment to crafting the final frame, Sanjit oversees
              the complete visual journey of every project.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CO-FOUNDER
      ===================================================== */}

      <section className="person-section person-two">


        {/* Decorations */}

        <img
          src="/about/splash.png"
          alt=""
          className="about-decoration decor-splash scroll-animate"
        />

        <img
          src="/about/heart.png"
          alt=""
          className="about-decoration decor-heart-two scroll-animate"
        />


        {/* Information */}

        <div className="person-info person-info-left scroll-animate">

          <div className="person-line"></div>

          <div className="person-content">

            <h2>
              Nimmy
            </h2>

            <h3>
              Co-Founder of Masterin7ways
            </h3>

            <p>
              Nimmy is the Co-Founder and Creative Director of
              Masterin7ways, bringing together psychology,
              storytelling, art, strategy, and emerging technology.
              A psychologist and storyteller at heart, she
              specialises in conceptualising ideas, developing
              creative strategies, AI-generated content, and
              understanding the human emotions behind every story.
              Her work bridges creativity and human psychology to
              create content that not only looks compelling, but
              connects, communicates, and stays with the audience.
            </p>

          </div>

        </div>


        {/* Character */}

        <div className="person-image person-image-right scroll-animate">

          <img
            src="/about/nimmy.png"
            alt="Nimmy"
          />

        </div>

      </section>


      {/* =====================================================
          BOTTOM DECORATIONS
      ===================================================== */}

      <img
        src="/about/flower.png"
        alt=""
        className="about-decoration decor-flower scroll-animate"
      />

      <img
        src="/about/ring.png"
        alt=""
        className="about-decoration decor-ring scroll-animate"
      />


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="about-footer scroll-animate">

        <Link to="/">
          ← BACK TO HOME
        </Link>

      </footer>

    </main>
  );
}

export default About;