import "../styles/TechnologiesItem.css"

export default function TechnologiesItem ({ title, skills }) {

    return (
        <div className="skills">
            <h1>{title}</h1>
            <div className="skill-imgs-container">
                <ul className="skills-ul">
                    {skills.map((skill, index) => (
                        <li key={index} className="skills-li">
                            <img src={skill.img} alt={skill.title} className="skill-img" />
                            <h2 className="skill-title">{skill.title}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}