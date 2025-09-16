import TechnologiesItem from "./TechnologiesItem";
import "../styles/Technologies.css"

export default function Technologies() {
    return (
        <section id="technologies" className="technologies-section">
            <h1 className="">Tecnhnologies</h1>
            <div className="">
                <p className="">Here are the technologies and tools I work with to build modern web applications. I'm constantly learning and expanding my skillset to stay current with industry trends.</p>
            </div>

            <div className="technologies-container">
                <TechnologiesItem
                    title="Frontend"
                    skills={[
                        { title: "HTML", img: "/public/icons/html.svg" },
                        { title: "CSS", img: "/public/icons/css.svg" },
                        { title: "JavaScript", img: "/public/icons/js.svg" },
                        { title: "React", img: "/public/icons/react.svg" },
                        { title: "SASS", img: "/public/icons/sass.svg" },
                        { title: "Bootstrap", img: "/public/icons/bootstrap.svg" },
                        { title: "TailwindCSS", img: "/public/icons/tailwind.svg" },
                        { title: "Figma", img: "/public/icons/figma.svg" },
                    ]}
                />

                <TechnologiesItem
                    title="Backend"
                    skills={[
                        { title: "NestJs", img: "/public/icons/nestjs.svg" },
                    ]}
                />

                <TechnologiesItem
                    title="Learning"
                    skills={[
                        { title: "Next.js", img: "/public/icons/nextjs.svg" },
                        { title: "Typescript", img: "/public/icons/typescript.svg" },
                        { title: "Flutter", img: "/public/icons/flutter.svg" },
                        { title: "Python", img: "/public/icons/python.svg" },

                    ]}
                />

                <TechnologiesItem
                    title="Tools"
                    skills={[
                        { title: "Git", img: "/public/icons/git.svg" },
                        { title: "Github", img: "/public/icons/github.svg" },
                        { title: "Wordpress", img: "/public/icons/wordpress.svg" },
                        { title: "VS Code", img: "/public/icons/vscode.svg" },
                        { title: "n8n", img: "/public/icons/n8n.svg" },
                    ]}
                />
            </div>
        </section>
    )
}