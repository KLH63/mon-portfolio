import React from 'react';
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/outline/index.js";

const ContactMe = () => {
    return (
        <section id="contact" className="scroll-mt-15 py-10 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-foreground">
                        Restons en contact
                    </h2>
                    <p className="text-gray-500 text-xl leading-relaxed mb-15">
                        Envie de donner vie à votre projet ? Écrivons ensemble la prochaine étape.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Colonne gauche */}
                        <div className="flex flex-col text-start justify-center md:mx-10">
                            <h3 className="text-2xl font-semibold mb-6 ">
                                Informations de contact
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <EnvelopeIcon className="text-primary h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Email</h4>
                                        <a
                                            href="mailto:klhub.contact@email.com"
                                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                        >
                                            klhub.contact@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <PhoneIcon className="text-primary h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Téléphone</h4>
                                        <a
                                            href="tel:+33670610169"
                                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                        >
                                            +33 6 70 61 01 69
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <MapPinIcon className="text-primary h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Localisation</h4>
                                        <span className="text-muted-foreground">Orléans, France</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Colonne droite */}
                        <div className="flex flex-col text-start md:mx-10">
                            <div className="bg-card p-8 rounded-2xl shadow-card">
                                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                                    Envoyez-moi un message
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;