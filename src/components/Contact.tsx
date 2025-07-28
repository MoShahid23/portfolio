import Card from "../components/Card";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xpwlrywy");
    if (state.succeeded) {
    return (
        <section
            id="Contact"
            className="relative px-4 py-20 text-foreground overflow-hidden"
            >
            <Card heading="Contact" background="primary" className="place-self-center">
            <p className="mb-4">Thank you! Your message has been sent. I’ll get back to you shortly.</p>
            <button
                className="p-2 bg-accent hover:bg-primary transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                Back to Top
            </button>
            </Card>
        </section>
    );
    }
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
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 text-foreground"
                >
                    <input
                        className="p-2 bg-accent focus:outline-3 focus:outline-accent focus:bg-primary"
                        placeholder="Your Email"
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <input
                        className="p-2 bg-accent focus:outline-3 focus:outline-accent focus:bg-primary"
                        placeholder="Subject"
                        type="text"
                        id="subject"
                        name="_subject"
                        required
                    />
                    <ValidationError
                        prefix="Subject"
                        field="_subject"
                        errors={state.errors}
                    />
                    <textarea
                        className="p-2 bg-accent resize-none focus:outline-3 focus:outline-accent focus:bg-primary"
                        placeholder="Message"
                        id="message"
                        name="message"
                        required
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <input
                        className="p-2 bg-accent border-foreground border-1 w-fit place-self-end hover:bg-primary"
                        type="submit"
                        disabled={state.submitting}
                    />
                </form>
            </Card>
        </section>
    );
}

export default Contact;