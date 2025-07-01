import React from 'react';

function About() {
  return (
    <div style={styles.page}>
      <section style={styles.container}>
        <h2 style={styles.title}>Про нас</h2>
        <p style={styles.text}>
          - Welcome to our gaming platform — a place where every gamer finds something to love!
          We created this space to unite millions of players worldwide and deliver the best gaming experiences.
        </p>

        <h3 style={styles.subtitle}>What We Offer</h3>
        <ul style={styles.list}>
          <li>A vast library of games for every taste — from indies to AAA hits.</li>
          <li>A convenient store with great deals and regular discounts.</li>
          <li>A strong community for communication, co-op gaming, and competition.</li>
          <li>Innovative tech: cloud gaming, streaming, achievements, and much more.</li>
        </ul>

        <h3 style={styles.subtitle}>Our Mission </h3>
        <p style={styles.text}>
          - We aim to make gaming accessible, exciting, and inspiring for everyone.
By connecting gamers and developers, we help shape the future of the gaming industry.
        </p>

        <h3 style={styles.subtitle}>Contact</h3>
        <div style={styles.contactInfo}>
          <div>
            <strong>Phone:</strong> <a href="tel:+380123456789" style={styles.link}>+38 (012) 345-67-89</a>
          </div>
          <div>
            <strong>Email:</strong> <a href="mailto:support@gamingplatform.com" style={styles.link}>support@gamingplatform.com</a>
          </div>
        </div>

        <h3 style={styles.subtitle}>- Follow Us on Social Media
</h3>
        <div style={styles.socials}>
          <a href="https://facebook.com/gamingplatform" target="_blank" rel="noreferrer" style={styles.socialLink} aria-label="Facebook">
            <svg style={styles.icon} viewBox="0 0 24 24" fill="#3b5998" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12a10 10 0 1 0-11.5 9.85v-6.96h-2.2v-2.9h2.2V9.8c0-2.17 1.3-3.37 3.3-3.37.96 0 1.96.17 1.96.17v2.15h-1.1c-1.08 0-1.42.67-1.42 1.36v1.64h2.4l-.38 2.9h-2.02v6.96A10 10 0 0 0 22 12z"/>
            </svg>
          </a>
          <a href="https://twitter.com/gamingplatform" target="_blank" rel="noreferrer" style={styles.socialLink} aria-label="Twitter">
            <svg style={styles.icon} viewBox="0 0 24 24" fill="#1da1f2" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 3a10.9 10.9 0 0 1-3.14.86 5.48 5.48 0 0 0 2.4-3.02 10.91 10.91 0 0 1-3.48 1.33 5.48 5.48 0 0 0-9.3 5 15.58 15.58 0 0 1-11.3-5.7 5.48 5.48 0 0 0 1.7 7.3 5.4 5.4 0 0 1-2.48-.7v.07a5.48 5.48 0 0 0 4.4 5.38 5.5 5.5 0 0 1-1.44.2 5.3 5.3 0 0 1-1.03-.1 5.48 5.48 0 0 0 5.12 3.8A11 11 0 0 1 1 19.6a15.49 15.49 0 0 0 8.4 2.46c10.07 0 15.6-8.34 15.6-15.56v-.71A11.1 11.1 0 0 0 23 3z"/>
            </svg>
          </a>
          <a href="https://instagram.com/gamingplatform" target="_blank" rel="noreferrer" style={styles.socialLink} aria-label="Instagram">
            <svg style={styles.icon} viewBox="0 0 24 24" fill="#e4405f" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
            </svg>
          </a>
          <a href="https://discord.gg/gamingplatform" target="_blank" rel="noreferrer" style={styles.socialLink} aria-label="Discord">
            <svg style={styles.icon} viewBox="0 0 24 24" fill="#7289da" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4.5a19.8 19.8 0 0 0-4.75-1.5l-.2.5a17.7 17.7 0 0 1 4.45 1.45c-.4-.5-.8-1-1.2-1.45zm-16 0a17.1 17.1 0 0 1 4.4-1.45l-.2-.5A19.8 19.8 0 0 0 4 4.5zm2.5 13.5c0-1 1-1.9 2.5-1.9s2.5.9 2.5 1.9-1 1.9-2.5 1.9-2.5-.9-2.5-1.9zm7 0c0-1 1-1.9 2.5-1.9s2.5.9 2.5 1.9-1 1.9-2.5 1.9-2.5-.9-2.5-1.9z"/>
            </svg>
          </a>
        </div>
      </section>

      <footer style={styles.footer}>
        Thank you for being with us! Gamers are our heart and soul.
      </footer>
    </div>
  );
}

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#121b22',
    color: '#f5f5f5',
  },
  container: {
    flex: '1 0 auto',
    maxWidth: '700px',
    margin: '40px auto',
    padding: '30px 25px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#1b2838',
    borderRadius: '12px',
    boxShadow: '0 0 25px rgba(0,0,0,0.9)',
    lineHeight: '1.7',
    letterSpacing: '0.02em',
  },
  title: {
    fontSize: '2.8rem',
    marginBottom: '20px',
    borderBottom: '3px solid #66c0f4',
    paddingBottom: '10px',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: '1.6rem',
    marginTop: '35px',
    marginBottom: '15px',
    color: '#66c0f4',
    fontWeight: '600',
  },
  text: {
    fontSize: '1.15rem',
  },
  list: {
    marginLeft: '20px',
    fontSize: '1.15rem',
    listStyleType: 'disc',
  },
  contactInfo: {
    fontSize: '1.15rem',
    lineHeight: '1.8',
    color: '#cbd6e7',
  },
  link: {
    color: '#66c0f4',
    textDecoration: 'none',
  },
  socials: {
    marginTop: '10px',
    display: 'flex',
    gap: '20px',
  },
  socialLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '38px',
    height: '38px',
    borderRadius: '8px',
    backgroundColor: '#223447',
    transition: 'background-color 0.3s ease',
  },
  icon: {
    width: '20px',
    height: '20px',
  },
  footer: {
    flexShrink: 0,
    textAlign: 'center',
    padding: '18px 20px',
    backgroundColor: '#171f29',
    color: '#8a98b8',
    fontStyle: 'italic',
    borderTop: '1px solid #2a3b52',
    fontSize: '1rem',
  },
};

export default About;
