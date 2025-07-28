import { useEffect, useState } from "react";
import { Link, scrollSpy } from "react-scroll";
const navLinks = [
    { to: "Home", label: "Home" },
    { to: "About", label: "About" },
    { to: "Projects", label: "Projects" },
    { to: "Contact", label: "Contact" },
];

function Navbar() {
    const [initialAnimate, setInitialAnimate] = useState(true);

    useEffect(() => {
        scrollSpy.update();

        const timer = setTimeout(() => {
            setInitialAnimate(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <nav
            className={`
              justify-center h-16 p-4 bg-secondary bg-[url(/stripe-texture.png))] bg-repeat bg-[x: unset] bg-[length:100px] text-foreground flex sticky top-0 z-50 animate-scroll-bg animate-scroll-bg:hover
              ${initialAnimate ? "animate-running" : ""}
            `}
        >
            <div className="space-x-10 flex w-full justify-end animate-fade-in-slow">
                {navLinks.map(({ to, label }) => (
                    <Link
                        key={to}
                        to={to}
                        smooth={true}
                        duration={500}
                        offset={-110}
                        spy={true}
                        activeClass="underline"
                        className="  font-[weight:500] text-lg hover:scale-110 cursor-pointer hover:underline transition content-center"
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
