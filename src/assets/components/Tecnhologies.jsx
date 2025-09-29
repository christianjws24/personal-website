import TechnologiesItem from "./TechnologiesItem";
import "../styles/Technologies.css"

export default function Technologies() {
    return (
        <section id="technologies" className="technologies-section">
            <h1 className="tecnhologies-title">Tecnhnologies</h1>
            <div className="">
                <p className="">Here are the technologies and tools I work with to build modern web applications. I'm constantly learning and expanding my skillset to stay current with industry trends.</p>
            </div>

            <div className="technologies-container">
                <TechnologiesItem
                    title="Frontend"
                    skills={[
                        { title: "HTML", img: "/icons/html.svg" },
                        { title: "CSS", img: "/icons/css.svg" },
                        { title: "JavaScript", img: "/icons/js.svg" },
                        { title: "React", img: "/icons/react.svg" },
                        { title: "SASS", img: "/icons/sass.svg" },
                        { title: "Bootstrap", img: "/icons/bootstrap.svg" },
                        { title: "TailwindCSS", img: "/icons/tailwind.svg" },
                        { title: "Figma", img: "/icons/figma.svg" },
                    ]}
                />

                <TechnologiesItem
                    title="Backend"
                    skills={[
                        { title: "NestJs", img: "/icons/nestjs.svg" },
                    ]}
                />

                <TechnologiesItem
                    title="Learning"
                    skills={[
                        { title: "Next.js", img: "/icons/nextjs.svg" },
                        { title: "Typescript", img: "/icons/typescript.svg" },
                        { title: "Flutter", img: "/icons/flutter.svg" },
                        { title: "Python", img: "/icons/python.svg" },

                    ]}
                />

                <TechnologiesItem
                    title="Tools"
                    skills={[
                        { title: "Git", img: "/icons/git.svg" },
                        { title: "Github", img: "/icons/github.svg" },
                        { title: "Wordpress", img: "/icons/wordpress.svg" },
                        { title: "VS Code", img: "/icons/vscode.svg" },
                        { title: "n8n", img: "/icons/n8n.svg" },
                    ]}
                />
            </div>
        </section>
    )
}