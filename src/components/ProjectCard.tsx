import Slider from "react-slick";
import githubLogo from "./../assets/logo-github.png";
import type { Project } from "../types/Project";

type ProjectCardProps = {
    project: Project;
};

interface ArrowProps {
    onClick?: () => void;
}

function ProjectCard({ project }: ProjectCardProps) {
    const NextArrow = ({ onClick }: ArrowProps) => (
        <div
            onClick={onClick}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer pointer-events-auto
        text-white text-2xl text-center content-center h-full w-1/12 hover:bg-accent/30 active:bg-accent/30 transition-colors duration-300"
        >
            <div className="mx-auto w-8/10 aspect-square content-center rounded-full bg-accent/15">
                ❯
            </div>
        </div>
    );

    const PrevArrow = ({ onClick }: ArrowProps) => (
        <div
            onClick={onClick}
            className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer
        text-white text-2xl text-center content-center h-full w-1/12 hover:bg-accent/30 active:bg-accent/30 transition-colors duration-300"
        >
            <div className="mx-auto w-8/10 aspect-square content-center rounded-full bg-accent/15">
                ❮
            </div>
        </div>
    );

    const settings = {
        dots: true,
        customPaging: () => (
            <div className="border-1 border-foreground w-full h-full bg-foreground rounded-full hover:bg-primary transition-all duration-500" />
        ),
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="w-9/10 place-self-center bg-accent mt-20">
            <div className="flex flex-row gap-4 w-fit p-2 border-foreground border-t-2 border-l-4">
                <div className="content-center">
                    <div
                        className="w-20 h-20 bg-center bg-cover bg-no-repeat rounded-full outline-1 outline-foreground"
                        style={{ backgroundImage: `url(${project.icon})` }}
                    ></div>
                </div>
                <div>
                    <h1 className="text-3xl">{project.name}</h1>
                    <h2 className="text-xl font-light">{project.period}</h2>
                    <h2 className="text-xl font-light italic">
                        {project.subheading}
                    </h2>
                </div>
            </div>
            <div className="px-4">{project.description}</div>

            <div className="bg-transparent border-foreground border-b-2 border-r-4 flex flex-col lg:flex-row">
                {/* Images */}
                <div className="w-full p-2 lg:w-8/10 lg:p-8">
                    <Slider {...{ ...settings, infinite: project.images.length > 1 }}>
                        {project.images.map((src: string, index: number) => (
                            <div key={`${project.name}-img-${index}`}>
                                <div className="relative w-full">
                                    <img
                                        src={src}
                                        alt={`Slide ${index}`}
                                        className="w-full rounded-xl p-1 border-foreground border-4"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="ml-auto w-40 p-6 lg:w-50 lg:p-8">
                    <div className="mx-auto">
                        <a
                            className="text-center text-xl flex flex-col gap-2 underline p-2 border-foreground border-b-1 border-r-3 hover:border-r-12 hover:border-b-6 transition-all duration-300"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link to repository
                            <img
                                className="w-fit h-fit"
                                src={githubLogo}
                                alt="Link to github repository"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
