import '../styles/About.css'

export default function About() {


  return (
    <section id="about" className="">
      <h1 className="">About me</h1>
      <div className="">
        <p className="">Motivated Full Stack Developer with practical experience in building and maintaining web applications, both frontend (React, HTML, CSS, JavaScript, Bootstrap, Tailwind CSS) and backend (Nest.js). Expert in responsive design, creating reusable components, and developing modern interfaces. Knowledge of workflow automation with n8n and experience in agile methodologies such as Scrum and hybrid. Strong team player with a constant desire to learn, currently expanding knowledge in Next.js and modern web development practices through continuous training on platforms such as Platzi.</p>
      </div>
      <div className='about-img-container'>
        <div className="about-img">
          <img src="/public/images/me.jpg" alt="" className="" />
        </div>
      </div>


    </section>
  );
}