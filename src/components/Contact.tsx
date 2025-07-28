import Card from "../components/Card";

function Contact() {
    return (
        <section
            id="Contact"
            className="relative px-4 py-20 text-foreground overflow-hidden"
        >
            <Card
                heading="Contact"
                background="primary"
                className="place-self-center"
            >
                <h1 className="m-0 p-0 font-bold">Have a question?</h1>
                <p>
                    You can reach me at
                    <a
                        className="hover:text-accent hover:underline"
                        href="mailto:mo_shahid@outlook.com"
                    >
                        {" "}
                        mo_shahid@outlook.com
                    </a>
                    , or drop a message off using the form below:
                </p>
                <form
                    method="POST"
                    action=""
                    className="flex flex-col gap-3 text-foreground"
                >
                    <input
                        className="p-2 bg-accent focus:outline-3 focus:outline-accent focus:bg-primary"
                        placeholder="Your Email"
                        type="email"
                    />
                    <input
                        className="p-2 bg-accent focus:outline-3 focus:outline-accent focus:bg-primary"
                        placeholder="Subject"
                        type="text"
                    />
                    <textarea
                        className="p-2 bg-accent resize-none focus:outline-3 focus:outline-accent focus:bg-primary"
                        placeholder="Message"
                    />
                    <input
                        className="p-2 bg-accent border-foreground border-1 w-fit place-self-end hover:bg-primary"
                        type="submit"
                    />
                </form>
            </Card>
        </section>
    );
}

export default Contact;
