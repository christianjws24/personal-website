import TechnologiesItem from "./TechnologiesItem";
import "../styles/Technologies.css"

export default function Technologies() {
    return (
        <section className="technologies-section">
            <h1 className="">Tecnhnologies</h1>
            <div className="">
                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem officiis aperiam incidunt minima est, adipisci amet? Assumenda nesciunt eveniet reiciendis odit obcaecati aperiam vel quam laboriosam provident adipisci, veniam dignissimos.</p>
            </div>

            <div className="technologies-container">
                <TechnologiesItem
                    title="Frontend"
                    skills={[
                        { title: "HTML", img: "./src/assets/html.svg" },
                        { title: "CSS", img: "./src/assets/css.svg" },
                        { title: "JavaScript", img: "./src/assets/js.svg" },
                        { title: "React", img: "./src/assets/react.svg" },
                        { title: "SASS", img: "./src/assets/sass.svg" },
                        { title: "Bootstrap", img: "./src/assets/bootstrap.svg" },
                        { title: "TailwindCSS", img: "./src/assets/tailwind.svg" },
                        { title: "Figma", img: "./src/assets/figma.svg" },
                    ]}
                />

                <TechnologiesItem
                    title="Learning"
                    skills={[
                        { title: "Next.js", img: "./src/assets/nextjs.svg" },
                        { title: "Typescript", img: "./src/assets/typescript.svg" },
                    ]}
                />

                <TechnologiesItem
                    title="Tools"
                    skills={[
                        { title: "Git", img: "./src/assets/git.svg" },
                        { title: "Github", img: "./src/assets/github.svg" },
                        { title: "Wordpress", img: "./src/assets/wordpress.svg" },
                        { title: "VS Code", img: "./src/assets/vscode.svg" },
                    ]}
                />
            </div>
        </section>
    )
}