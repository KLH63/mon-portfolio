import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 left-0 w-full px-6 py-4 flex items-center shadow-md z-50 bg-white">
            {/* Logo */}
            <div className="flex items-center font-bold text-violet-900  gap-2">
                <img src="/klhub(1).png" alt="logo" className="h-10 w-10 object-contain" />
                <span>Jawad Kallouhi</span>
            </div>

            {/* Liens Desktop (centrés) */}
            <ul className="hidden md:flex flex-1 justify-center gap-6">
                <li><a href="#about" >À propos</a></li>
                <li><a href="#projects" >Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            {/* Bouton Mobile (menu hamburger) */}
            <button
                className="md:hidden ml-auto text-2xl focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "✖" : "☰"}
            </button>

            {/* Menu Mobile */}
            {isOpen && (
                <ul className="absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-center gap-6 py-6 md:hidden">
                    <li><a href="#about" className="hover:text-blue-400">À propos</a></li>
                    <li><a href="#projects" className="hover:text-blue-400">Projets</a></li>
                    <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
