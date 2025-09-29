import '../styles/ProjectsItem.css'

export default function ExperienceItem ({img, title, description, url}) {


    return (        
        <a href={url} className="main-item">
            <div className="project-item">
                <img src={img} alt={`${title} project screenshot`} />
                <div className="info">
                    <h2 className="title">{title}</h2>
                    <p className="project-description">{description}</p>
                </div>

            </div>
        </a>    
    )

}