import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
    return (
        <section
            id="Projects"
            className="relative px-4 py-20 text-foreground overflow-hidden"
        >
            <Card
                heading="Projects"
                background="primary"
                className="place-self-center"
            >
                <div>
                    This portfolio was built using React + TypeScript and styled with TailwindCSS. It’s powered by a lightweight Vite build system, with backend functionality handled via an AWS Serverless framework.
                </div>
                <div>
                    Below are some of the other projects I’ve worked on:
                </div>
            </Card>
            {/* creates a card for each project in the assets/projects */}
            {projects.map((project) => (
                <ProjectCard
                    key={project.name} project={project}
                ></ProjectCard>
            ))}
        </section>
    );
}

export default Projects;