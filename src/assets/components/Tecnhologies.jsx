import TechnologiesItem from "./TechnologiesItem";
import "../styles/Technologies.css"

export default function Technologies() {
    return (
        <section id="technologies" className="technologies-section">
            <h1 className="">Tecnhnologies</h1>
            <div className="">
                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem officiis aperiam incidunt minima est, adipisci amet? Assumenda nesciunt eveniet reiciendis odit obcaecati aperiam vel quam laboriosam provident adipisci, veniam dignissimos.</p>
            </div>

            <div className="technologies-container">
                <TechnologiesItem
                    title="Frontend"
                    skills={[
                        { title: "HTML", img: "/src/assets/icons/html.svg" },
                        { title: "CSS", img: "/src/assets/icons/css.svg" },
                        { title: "JavaScript", img: "/src/assets/icons/js.svg" },
                        { title: "React", img: "/src/assets/icons/react.svg" },
                        { title: "SASS", img: "/src/assets/icons/sass.svg" },
                        { title: "Bootstrap", img: "/src/assets/icons/bootstrap.svg" },
                        { title: "TailwindCSS", img: "/src/assets/icons/tailwind.svg" },
                        { title: "Figma", img: "/src/assets/icons/figma.svg" },
                    ]}
                />

                <TechnologiesItem
                    title="Learning"
                    skills={[
                        { title: "Next.js", img: "/src/assets/icons/nextjs.svg" },
                        { title: "Typescript", img: "/src/assets/icons/typescript.svg" },
                    ]}
                />

                <TechnologiesItem
                    title="Tools"
                    skills={[
                        { title: "Git", img: "/src/assets/icons/git.svg" },
                        { title: "Github", img: "/src/assets/icons/github.svg" },
                        { title: "Wordpress", img: "/src/assets/icons/wordpress.svg" },
                        { title: "VS Code", img: "/src/assets/icons/vscode.svg" },
                    ]}
                />
            </div>
        </section>
    )
}