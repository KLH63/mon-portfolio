import React from 'react';
import cp from '/cp1.png';
import project from '/project-ecommerce.jpg';
import analytics from '/dashboard.jpg';
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline/index.js";
import data from '/data.jpg'
import supfinance from '/supfinance.png';

const MyProject = () => {

    const projects = [
        {
            title: "Site vitrine - Entreprise d’électricité",
            description: "Développement d’un site web professionnel et responsive pour une société d’électricité, permettant de présenter ses services, renforcer son image de marque et améliorer sa visibilité en ligne.",
            image: cp,
            technologies: ["React", "Node.js", "Material UI", "Framer Motion", "Email JS" ],
            liveUrl: "https://chamrouk-production.fr/",
            featured: true
        },
        {
            title: "Application - Dashboard",
            description: "Développement d’une application interne dédiée au pilotage de projet. Reliée aux API Azure DevOps et Jira, elle centralise et transforme les données de tickets en KPI visuels, graphiques interactifs et tableaux filtrables.\n" +
                "L’outil offre aux chefs de projet une vision en temps réel de la performance d’équipe, facilitant le suivi, l’analyse et la prise de décision stratégique.",
            image: data,
            technologies: ["Spring boot", "React", "API REST", "Azure DevOps Services", "Jira", "MongoDB", "Bootsrap"],
            featured: true
        },
        {
            title: "Site vitrine - SupFinance (Organisme de formation)",
            description: "Conception et développement d’un site web moderne et responsive pour SupFinance, un organisme spécialisé dans les formations et certifications financières. " +
                "Le site met en valeur les offres (CFA, AMF, DCG/DSCG, etc.), présente l’équipe, les certifications, et permet aux visiteurs de contacter facilement l’organisation. " +
                "Il offre une navigation fluide, une identité visuelle professionnelle et une interface adaptée à tous les supports.",
            image: supfinance,
            technologies: ["React", "Next.js", "Tailwind CSS"],
            liveUrl: "https://supfinance.com",
            featured: true
        }
    ];




    return (

        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-foreground">
                        Mes projets
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Découvrez quelques-uns de mes projets récents qui démontrent mes compétences en développement
                    </p>
                </div>

                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`bg-card rounded-2xl overflow-hidden shadow-card shadow-glow transition-all duration-500 hover:-translate-y-2 ${
                                project.featured ? 'lg:grid-cols-2' : ''
                            }`}
                        >
                            <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'md:grid-cols-2'} gap-0`}>
                                <div className={`relative overflow-hidden ${index % 2 === 1 && project.featured ? 'lg:order-2' : ''}`}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="p-8 flex flex-col justify-center">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold mb-3 text-black">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed mb-4">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {project.liveUrl && (
                                        <div className="flex gap-4">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-violet btn-sm"
                                            >
                                                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                                Demo
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>



        /*<div className='container mx-auto flex flex-col items-center py-[100px] box-grey'>
            <h2 className="font-bold mb-10 text-center sticky top-[100px] z-10">
                Mes derniers projets
            </h2>

            <div className='flex flex-col items-center gap-[100px] font-Sansation'>
                <div className='card bg-base-100 card-project rounded-2xl w-[650px] h-[550px] sticky top-[170px] flex items-center justify-center'>
                        <figure className="relative w-full h-full">
                            <img
                                src="/dashboard.jpg"
                                alt="Shoes"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                            <figcaption className="absolute bottom-4 left-0 w-full text-white text-lg font-bold text-center z-10">
                                Test
                            </figcaption>
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="font-bold">
                                Application interne de pilotage des tickets
                            </h2>
                            <p className="mb-3">Un outil connecté à Azure DevOps et Jira, qui transforme les données de tickets en tableaux de bord dynamiques et KPI visuels,
                                pour aider les chefs de projet à suivre la performance d’équipe et optimiser la gestion des projets.
                            </p>
                            <div className="card-actions">
                                <div className="badge badge-outline flex items-center gap-2">
                                    <img src="/React-icon.svg.png" alt="React" className="w-5 h-5" />
                                    React JS
                                </div>
                                <div className="badge badge-outline flex items-center gap-2">
                                    <img src="/spring.png" alt="React" className="w-5 h-5" />
                                    Spring
                                </div>
                                <div className="badge badge-outline flex items-center gap-2">
                                    <img src="/monngoDB.png" alt="React" className="w-5 h-5" />
                                    MongoDB
                                </div>
                            </div>
                        </div>
                </div>

                <div className='card bg-base-100 card-project rounded-2xl w-[650px] h-[550px] sticky top-[170px] flex items-center justify-center'>
                    <figure className="flex items-start h-full">
                        <img
                            src="/cp.png"
                            alt="Shoes"
                            className="object-contain self-start"
                        />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="font-bold">
                            Développement d’un site vitrine – Entreprise d’électricité
                        </h2>
                        <p className="mb-3">
                            Conception et développement d’un site web professionnel mettant en valeur les services et expertises d’une entreprise d’électricité.
                            Le projet a permis d’offrir une présence en ligne moderne et accessible, une mise en avant des prestations et une interface responsive adaptée à tous les supports.
                        </p>
                        <div className="card-actions flex justify-between items-center">
                            <div className="badge badge-outline flex items-center gap-2">
                                <img src="/React-icon.svg.png" alt="React" className="w-5 h-5" />
                                React JS
                            </div>
                            <button
                                className="btn btn-primary ml-auto"
                                onClick={() => window.open('https://chamrouk-production.fr/', '_blank', 'noopener,noreferrer')}
                            >
                                Voir le site
                            </button>

                        </div>
                    </div>
                </div>

                {/!*<div className="card bg-base-100 shadow-sm w-[900px] h-[650px] sticky top-[140px] flex items-center justify-center">
                    <iframe
                        src="https://chamrouk-production.fr/"
                        title="Chamrouk Production"
                        className="w-full h-full border-0"
                    />
                </div>*!/}

            </div>
        </div>*/
    );
};

export default MyProject;