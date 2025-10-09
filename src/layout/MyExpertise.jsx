import React from 'react';
import {CircleStackIcon, CodeBracketSquareIcon, GlobeAltIcon, ServerIcon} from "@heroicons/react/24/outline/index.js";


const MyExpertise = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: GlobeAltIcon,
            skills: ["React", "Angular", "Vite", "Next.js", "Symfony"],
            color: "text-tech-blue"
        },
        {
            title: "Backend",
            icon: ServerIcon,
            skills: ["Spring", "Node", "Python", "API REST"],
            color: "text-tech-purple"
        },
        {
            title: "Base de données",
            icon: CircleStackIcon,
            skills: ["PostgreSQL", "MongoDB", "MySQL", "MariaDB"],
            color: "text-success"
        },
        {
            title: "Outils & DevOps",
            icon: CodeBracketSquareIcon,
            skills: ["Git", "Docker", "Mircosoft Azure", "Azure DevOps", "Jira", "Confluence"],
            color: "text-warning"
        }
    ];



    return (
        <section id="skills" className="py-20 ">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-foreground">
                        Mes compétences
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Technologies et outils que j'utilise pour créer des applications web modernes
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="card p-6 rounded-xl shadow-card shadow-glow transition-all duration-200 hover:-translate-y-2"
                        >
                            <div className="text-center mb-4">
                                <div className={`inline-flex p-3 rounded-full bg-gray-100 ${category.color}`}>
                                    {React.createElement(category.icon, { className: "w-8 h-8" })}
                                </div>
                                <h3 className="text-xl font-semibold mt-3 text-foreground">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-2">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="bg-gray-100 px-3 py-2 rounded-lg text-center text-sm font-semibold text-gray-500 hover:bg-primary/10 hover:text-primary transition-colors duration-100"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>










        /*<div className="container mx-auto mt-25 mb-40">
            <h2 className="font-bold mb-10 text-center mb-25">Mon expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="card max-w-sm p-6 rounded-lg shadow-sm justify-center content-center">
                            <CodeBracketIcon className=" mx-auto mb-5 icon" />
                            <h3 className="mb-3  font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                                Frontend
                            </h3>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
                                Maîtrise de la construction d'interfaces utilisateur modernes et réactives.
                            </p>
                        </div>

                        <div className="card max-w-sm p-6 rounded-lg shadow-sm justify-center content-center">
                            <CircleStackIcon className="mx-auto mb-5 icon"></CircleStackIcon>
                            <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                                Backend
                            </h3>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
                                Conception de backends performants et API RESTful.
                            </p>
                        </div>

                        <div className="card max-w-sm p-6 rounded-lg shadow-sm justify-center content-center">
                            <CloudIcon className="mx-auto mb-5 icon"></CloudIcon>
                            <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                                Cloud Deployment
                            </h3>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
                                Déploiement et gestion d'applications sur des plateformes cloud.
                            </p>
                        </div>
                    </div>
                </div>*/



        /*<div className='flex flex-col items-center py-[200px]'>
            <h2 className={"font-bold mb-10 text-center"}>Mon expertise</h2>
            <div className='flex flex-col gap-[100px] font-Sansation sticky'>
                <div className='card bg-base-100 shadow-2xl rounded-2xl w-[400px] h-[350px] sticky top-[300px] flex items-center justify-center'>
                    <div className="flex flex-col items-center text-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                        <div className="card-body">
                            <h2 className="font-bold">
                                Frontend
                            </h2>
                            <p>Maîtrise de la construction d'interfaces utilisateur modernes et réactives.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card bg-base-100 shadow-sm w-[400px] h-[350px] sticky top-[300px] flex items-center justify-center'>
                    <div className="flex flex-col items-center text-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>

                        <div className="card-body">
                            <h2 className="font-bold">
                                Backend
                            </h2>
                            <p>Maîtrise de la construction d'interfaces utilisateur modernes et réactives.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>*/


);
};

export default MyExpertise;