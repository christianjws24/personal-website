import ExperienceItem from "./ExperienceItem";
import '../styles/Experience.css'


export default function Experience() {
    return (
        <section id="experience" className="experience-section">
            <h2 className="experience-title">Experience</h2>
            <ExperienceItem 
                img="/public/images/job.png"
                role="Junior Front-End"
                company="Deepcommpany"
                duration="October 2022 - September 2023"
                description={[
                                "Created and maintained UI components using React.",
                                "Developed responsive page layouts using HTML, CSS, and Bootstrap.",
                                "Modified web application screens and behaviors using jQuery.",
                                "Collaborated in Scrum-based teams using Trello to manage tasks and sprints.",
                                "Delivered UI updates and bug fixes in a fast-paced production environment."
                            ]}
            />
        </section>
    )
}