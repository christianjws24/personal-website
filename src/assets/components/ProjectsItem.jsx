import '../styles/ProjectsItem.css'

export default function ExperienceItem ({img, title, description}) {


    return (        
        <a href="/" className="main-item">
            <div className="project-item">
                <img src={img} alt="" />
                <div className="info">
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                </div>

            </div>
        </a>    
    )

}