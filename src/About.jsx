import { tw } from "./tailwind";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function About( {embedded = false }) {

  useEffect(() => {
  const animatedElements =
    document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.dataset.visible = "true";

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
  className={tw.about}>


      {/* =====================================================
          TOP NAV
      ===================================================== */}

     <header className={tw.aboutHeader}>

  {!embedded && (
    <Link
      to="/"
      className={tw.aboutBack}
    >
      ← HOME
    </Link>
  )}

  {!embedded && (
    <div className={tw.aboutLogo}>
      MASTERIN7WAYS
    </div>
  )}

  <div className={tw.aboutHeaderSpace}></div>

</header>


      {/* =====================================================
          PAGE TITLE
      ===================================================== */}

      <section className={tw.aboutHero}>

        {/* Decorations */}

        <img
          src="/about/star.png"
          alt=""
          data-reveal className={`${tw.decor} ${tw.decorStar} ${tw.reveal}`}
        />

        <img
          src="/about/fist.png"
          alt=""
          data-reveal className={`${tw.decor} ${tw.decorFist} ${tw.reveal}`}
        />

        <div data-reveal className={tw.reveal}>

          <h1 className={tw.aboutTitle}>
            ABOUT US
          </h1>

          <div className={tw.aboutLine}>
            <span className={tw.aboutLineInner}></span>
          </div>

        </div>

      </section>


      {/* =====================================================
          FOUNDER
      ===================================================== */}

      <section className={`${tw.personSection} ${tw.personOne}`}>

        {/* Decoration */}

        <img
          src="/about/heart.png"
          alt=""
          data-reveal className={`${tw.decor} ${tw.decorHeartOne} ${tw.reveal}`}
        />


        {/* Character */}

        <div data-reveal className={`${tw.personImage} ${tw.reveal}`}>

          <img
            src="/about/spiker.png"
            alt="Founder"
            className="motion-safe:[animation:gentleFloat_5s_ease-in-out_infinite]"
          />

        </div>


        {/* Information */}

        <div data-reveal className={`${tw.personInfo} ${tw.reveal}`}>

          <div className={tw.personLine}></div>

          <div className={tw.personContent}>

            <h2 className={tw.personName}>
              Spiker Sameeyol
              <br />
              (Sanjit Raghuvanshi)
            </h2>

            <h3 className={tw.personRole}>
              Founder of Masterin7ways
            </h3>

            <p className={tw.personBio}>
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

      <section className={`${tw.personSection} ${tw.personTwo}`}>


        {/* Decorations */}

        <img
          src="/about/splash.png"
          alt=""
          data-reveal className={`${tw.decor} ${tw.decorSplash} ${tw.reveal}`}
        />

        <img
          src="/about/heart.png"
          alt=""
          data-reveal className={`${tw.decor} ${tw.decorHeartTwo} ${tw.reveal}`}
        />


        {/* Information */}

        <div data-reveal className={`${tw.personInfo} ${tw.reveal}`}>

          <div className={tw.personLine}></div>

          <div className={tw.personContent}>

            <h2 className={tw.personName}>
              Nimmy
            </h2>

            <h3 className={tw.personRole}>
              Co-Founder of Masterin7ways
            </h3>

            <p className={tw.personBio}>
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

        <div data-reveal className={`${tw.personImage} ${tw.reveal}`}>

          <img
            src="/about/nimmy.png"
            alt="Nimmy"
            className="motion-safe:[animation:gentleFloat_5s_ease-in-out_infinite]"
          />

        </div>

      </section>


      {/* =====================================================
          BOTTOM DECORATIONS
      ===================================================== */}

      <img
        src="/about/flower.png"
        alt=""
        data-reveal className={`${tw.decor} ${tw.decorFlower} ${tw.reveal}`}
      />

      <img
        src="/about/ring.png"
        alt=""
        data-reveal className={`${tw.decor} ${tw.decorRing} ${tw.reveal}`}
      />


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer data-reveal className={`${tw.footer} ${tw.reveal}`}>

        <Link to="/">
          ← BACK TO HOME
        </Link>

      </footer>

    </main>
  );
}

export default About;
