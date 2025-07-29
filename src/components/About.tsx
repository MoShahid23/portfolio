import Card from "../components/Card";

const skillImages = import.meta.glob<{ default: string }>(
    "../assets/skill-images/*skill*.{jpg,jpeg,png,webp,gif}",
    { eager: true }
);
const images: string[] = Object.values(skillImages).map((mod) => mod.default);

const skillNames: string[] = [
  'HTML', 'JS', 'Nodejs',
  'React', 'Tailwind', 'AWS',
  'Python', 'MySQL', 'Java'
];

function About() {
    return (
        <section
            id="About"
            data-aos="fade-up"
            className="relative px-4 py-20 text-foreground"
        >
            <Card heading="About" className="place-self-center">
                <p>
                    I’m a computer science graduate with a decade-long obsession
                    for building things, from my first Scratch game at 10 to
                    full-stack web apps, cloud deployments, and automation
                    projects today.
                </p>

                <div className="flex lg:flex-row gap-6 flex-col">
                    <div className="space-y-6">
                        <p>
                            My strongest lane right now is web development,
                            where I work confidently with Node.js, React,
                            Express, and AWS services like Lambda, S3, and API
                            Gateway. I’ve built both front and backend systems,
                            designed REST APIs, and integrated everything from
                            MySQL databases to LLM-powered automations.
                        </p>
                        <p>
                            While I specialize in web right now, my experience
                            is broader and spans Java, Python, C, C#, Flutter,
                            and more. I approach development as a skillset that
                            transfers, not a single stack to stay locked in.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 w-fit place-self-center">
                        {images.map((image, index) => (
                            <div className=" bg-accent p-2 rounded pb-0 hover:scale-110 transition-all duration-100">
                                <img src={image} className="bg-foreground rounded lg:w-80 w-20"></img>
                                <div className="font-extralight text-sm place-self-center">{skillNames[index]}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <p>
                    If I don’t know something, I’ll figure it out. My goal is to
                    bring that adaptability and problem-solving mindset into
                    whichever environment i work in, and to continue expanding
                    from there.
                </p>
            </Card>
        </section>
    );
}

export default About;
