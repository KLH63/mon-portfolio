import React from 'react';
import klhub from "/klhub.png";

const AboutMe = () => {
    return (
        <div id="about" className="container-aboutme grid grid-cols-1 md:grid-cols-12 gap-6 px-4 py-8 ">
        {/* Colonne gauche */}
        <div className="col-span-12 md:col-span-5 flex flex-col text-start justify-end md:mx-10 h-full mt-5 mb-20 md:animate-fade-right animate-fade-down">
            <h1 className="text-3xl md:text-5xl mb-2 font-bold">KALLOUHI Jawad,</h1>
            <h2 className="text-2xl md:text-4xl mb-6 font-bold text-fuchsia-700" >Développeur Full Stack</h2>
            <p className="text-base md:text-lg mb-6">
                Passionné par la création d'expériences numériques élégantes et performantes,
                je transforme des idées complexes en interfaces intuitives et fonctionnelles.
            </p>
            <a href="#projects" className="btn-violet button-project flex justify-center items-center mb-5 cursor-pointer animate-bounce [animation-duration:2s]">
                Explorer mes projets
            </a>
        </div>

        {/* Colonne droite */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-end items-center md:animate-fade-left animate-fade-up">

                <img src={klhub} alt="Logo KLHUB" width={400} style={{maxWidth: '100%', height: 'auto'}} />

            {/*<h1 className="text-6xl ">Typewriter animation effect OU Logo</h1>*/}

        </div>

        </div>

    )
};

export default AboutMe;