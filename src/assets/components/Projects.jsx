import ProjectsItem from "./ProjectsItem";
import '../styles/Projects.css'

export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-title">Projects</h2>
            <p className="description">Here you can explore a selection of my personal and academic projects developed using modern web technologies. Each project showcases my skills in front-end development, problem-solving, and creating responsive, user-friendly interfaces. I enjoy experimenting with new tools and frameworks, and I focus on writing clean, maintainable code while delivering engaging user experiences.</p>

            <div className="projects-container">
                <ProjectsItem 
                    img="./src/assets/404-page.png"
                    title="404 Page example"
                    description="A simple and modern 404 Error Page with a clean design and responsive layout."
                />
            </div>
            
        </section>
    )
}