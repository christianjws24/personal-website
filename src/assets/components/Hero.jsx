import DownloadButton from './DownloadButton';
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">
      <h2 className="hero-title">
        FRONTEND DEVELOPER
      </h2>
      <h2 className="hero-name">
        CHRISTIAN WILHELM
      </h2>
      <p className="hero-description">
        I'm a Junior Front-End Developer passionate about building modern and interactive web applications.
      </p>

      <div className="hero-buttons">
        <a href="https://www.linkedin.com/in/christian-wilhelm-8071802b2/" target="_blank">
          <button className="hero-btn">
            LinkedIn
          </button>
        </a>
        <a href="https://github.com/christianjws24" target="_blank">
          <button className="hero-btn">
            Github
          </button>
        </a>
        <DownloadButton 
          fileUrl=""
          fileName="Christian Wilhelm CV"
          buttonText="Download CV" 
        />
      </div>
    </section>

  );
}
