import React, {useEffect, useState} from "react";
import klhub from "/klhub.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-1 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 right-0 mx-auto w-[95%]
             sm:w-[98%] md:max-w-3xl px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-start shadow-md bg-gray-900 rounded-4xl gap-2 ${
                isScrolled ? "md:max-w-3xl" : "md:max-w-5xl"
            }`
        }>
            {/* Logo */}
            <div className="flex items-center font-bold text-violet-500 gap-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <img src={klhub} alt="logo" className="h-12 w-12 object-contain bg-gray-200 rounded-4xl p-1 animate-pulse [animation-duration:2.5s]" />
                <span className="hidden md:inline">Jawad Kallouhi</span>
                <a href="#about" className="text-gray-200 inline md:hidden animate-flip-down">À propos</a>
                <a href="#projects" className="text-gray-200 inline md:hidden animate-flip-down">Projets</a>
                <a href="#contact" className="text-gray-200 inline md:hidden animate-flip-down">Contact</a>
            </div>

            {/* Liens Desktop (centrés) */}
            <ul className="hidden md:flex flex-1 items-center justify-center gap-6 text-gray-200 text-lg relative w-full">
                <div className="flex flex-1 items-center justify-center gap-6">
                    <li>
                        <a
                            href="#about"
                            className="btn-style503 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md font-medium duration-500 cursor-pointer "
                        >
                            <div className="translate-y-0 transition group-hover:-translate-y-[150%]">À propos</div>
                            <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">À propos</div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="btn-style503 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md font-medium duration-500 cursor-pointer "
                        >
                            <div className="translate-y-0 transition group-hover:-translate-y-[150%]">Projets</div>
                            <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">Projets</div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="btn-style503 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md font-medium duration-500 cursor-pointer "
                        >
                            <div className="translate-y-0 transition group-hover:-translate-y-[150%]">Contact</div>
                            <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">Contact</div>
                        </a>
                    </li>
                </div>
                <li className="flex items-center justify-center gap-2 text-lg bg-gray-200 p-3 rounded-4xl text-black ml-auto group relative overflow-hidden font-medium duration-500 cursor-pointer">
                    <a
                        href="mailto:klhub.contact@email.com"
                        className="flex items-center transition-colors duration-200"
                    >
                        <div className="translate-y-0 transition group-hover:-translate-y-[150%]">klhub.contact@gmail.com</div>
                        <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">klhub.contact@gmail.com</div>
                    </a>
                </li>

            </ul>
            {/*<div className="flex items-center justify-center gap-6 text-lg bg-gray-200 p-3 rounded-4xl">
                <a
                    href="mailto:klhub.contact@email.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                    klhub.contact@gmail.com
                </a>
            </div>*/}

            {/* Bouton Mobile (menu hamburger) */}
            {/*<button
                className="md:hidden ml-auto text-2xl focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "✖" : "☰"}
            </button>*/}

            {/* Menu Mobile */}
            {/*{isOpen && (
                <ul className="absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-center gap-6 py-6 md:hidden">
                    <li><a href="#about" className="hover:text-blue-400">À propos</a></li>
                    <li><a href="#projects" className="hover:text-blue-400">Projets</a></li>
                    <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                </ul>
            )}*/}
        </nav>
    );
};

export default Navbar;
