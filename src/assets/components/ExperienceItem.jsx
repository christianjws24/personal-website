import '../styles/ExperienceItem.css'

export default function ExperienceItem ({img, role, company, duration, description}) {
    return (
        <div className="experience-item">
            <img src={img} alt="svg" className="svg" />
            <div className="item">
                <h2 className="role">{role} - {company}</h2>
                <h4 className="duration">{duration}</h4>
                {Array.isArray(description) ? (
                    <ul className="description-list">
                        {description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="description">{description}</p>
                )}
            </div>
        </div>
    )
}