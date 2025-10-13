import React from 'react';
import klhub from "/klhub.png";

const AboutMe = () => {
    return (
        <div id="about" className="container-aboutme grid grid-cols-1 md:grid-cols-12 gap-6 px-4 py-8">
        {/* Colonne gauche */}
        <div className="col-span-12 md:col-span-5 flex flex-col text-start justify-center md:mx-10">
            <h1 className="text-3xl md:text-5xl mb-2 font-bold">KALLOUHI Jawad,</h1>
            <h2 className="text-2xl md:text-4xl mb-6 font-bold text-fuchsia-700" >Développeur Full Stack</h2>
            <p className="text-base md:text-lg mb-6">
                Passionné par la création d'expériences numériques élégantes et performantes,
                je transforme des idées complexes en interfaces intuitives et fonctionnelles.
            </p>
            <button className="btn-violet button-project flex justify-center items-center">
                Explorer mes projets
            </button>
        </div>

        {/* Colonne droite */}
        <div className="mt-10 md:mt-25  animate-bounce [animation-duration:2s] col-span-12 md:col-span-7 flex flex-col justify-center">
            <div className=" w-full h-auto sm:max-w-xs md:max-w-md lg:max-w-lg mx-auto flex items-end justify-center backdrop-blur-sm">
                <img src= {klhub} className="rounded-4xl w-27 h-27 sm:w-40 sm:h-40 md:w-full md:h-auto object-cover" />
            </div>
        </div>

        </div>

    )
};

export default AboutMe;