

export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey there👋, I'm Michael!</p>
            <h1 className="hero--section--title">
              <span className="hero--section--title--color">Front End
              <br />
              <span className="hero--section--title--color--dev">Developer </span>
              </span>
            </h1>
            <p className="hero--section-description">
            I am deeply passionate about front-end designing, where creativity converges with functionality to create seamless and visually appealing user experiences. My proficiency as an application support analyst has equipped me with a robust set of skills that seamlessly transfer to front-end design.
            </p>
          </div>
          
          <br /><br />
          <a target="_blank" rel="noopener noreferrer" href='./img/resume/Michael-Gayle-Resume.pdf'>
          <button  className="btn btn-primary">Download CV</button>
          </a>
          
        </div>
        <div className="hero--section--img"> 
          <img src="./img/hero-new.png" alt="Hero Section" />
        </div>
      </section>
    );
  }
  