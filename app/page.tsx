
declare const process: {
  env: {
    NEXT_PUBLIC_PORTFOLIO_DESCRIPTION?: string;
  };
};

export default function Home() {
  return (
    <main>
      <header className="header">
        <h2>Mon Portfolio</h2>
        <nav>
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <p className="subtitle">Bienvenue sur mon portfolio</p>
        <h1>Bonjour, je suis développeur web</h1>
        <p>
          Je suis passionné par le développement web et les technologies
          modernes. Découvrez mon parcours et mes réalisations.
        </p>
        <a className="button" href="#projects">Voir mes projets</a>
      </section>

      <section id="about" className="section">
        <h2>À propos</h2>
        <p>
          {process.env.NEXT_PUBLIC_PORTFOLIO_DESCRIPTION ||
            "Je suis un développeur motivé, curieux et passionné par les nouvelles technologies."}
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Mes compétences</h2>
        <div className="cards">
          <article className="card">HTML / CSS</article>
          <article className="card">JavaScript / TypeScript</article>
          <article className="card">React / Next.js</article>
          <article className="card">Node.js</article>
          <article className="card">Git / GitHub</article>
          <article className="card">Docker</article>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Mes projets</h2>
        <div className="cards">
          <article className="card">
            <h3>Portfolio personnel</h3>
            <p>Un site personnel réalisé avec Next.js.</p>
          </article>
          <article className="card">
            <h3>Projet DevOps</h3>
            <p>Automatisation et déploiement avec Docker.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Me contacter</h2>
        <p>Email : contact@example.com</p>
        <p>GitHub : github.com</p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Mon Portfolio</p>
      </footer>
    </main>
  );
}
