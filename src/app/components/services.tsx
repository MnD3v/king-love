import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Services = () => {
    const domaines = [
        {
            icon: "commerce-general.png",
            titre: "Commerce Général",
            description: "Englobe toutes les activités liées à l'achat, la vente et la distribution de biens et services dans divers secteurs économiques.",
            link: "commerce-general"
        },
        {
            icon: "immobilier.png",
            titre: "Opérations Immobilières",
            description: "Comprend la gestion, l'achat, la vente, la location et l'entretien des biens immobiliers résidentiels et commerciaux.",
            link: "operations-immobilieres"
        },
        {
            icon: "import-export.png",
            titre: "Import-Export",
            description: "Commerce international impliquant l'importation et l'exportation de marchandises et services à travers les frontières, facilitant le flux global de produits.",
            link: "import-export"
        },
        {
            icon: "e-commerce.png",
            titre: "E-Commerce",
            description: "Transactions commerciales et vente de produits ou services effectuées en ligne via des plateformes digitales et des sites web.",
            link: "e-commerce"
        },
        {
            icon: "agriculture.png",
            titre: "Agriculture",
            description: "Activités liées à la culture des plantes, production alimentaire et autres matières premières agricoles destinées à la consommation ou à l'industrie.",
            link: "agriculture-elevage"
        },
        {
            icon: "elevage.png",
            titre: "Élevage",
            description: "Pratiques liées à la reproduction, l'élevage et la gestion d'animaux destinés à la production de viande, de lait, de laine, et autres produits.",
            link: "agriculture-elevage"
        },
        {
            icon: "btp.png",
            titre: "BTP",
            description: "Construction, rénovation et entretien des bâtiments, routes, ponts et autres infrastructures publiques ou privées dans le domaine des travaux publics.",
            link: "btp"
        },
        {
            icon: "sylviculture.png",
            titre: "Sylviculture",
            description: "Gestion durable des forêts et boisements, incluant la plantation, l'entretien et l'exploitation des forêts pour le bois et d'autres ressources naturelles.",
            link: "sylviculture"
        }
    ];


    return (
        <section id="formations" className='my-10 flex flex-col items-center'>

            <div className='max grid sm:grid-cols-2 md:grid-cols-3
           
            gap-6'>

                <div className='flex flex-col w-full p-2 gap-3'>
                    <p className=' uppercase text-red-500 font-semibold'>{"// CE QUE NOUS OFFRONS"}</p>

                    <h1>Solution Business</h1>
                    <p>Nous apportons des solutions dans divers domaines d'activités.</p>
                    <div className='flex justify-between items-center
                    w-44
                    bg-red-500 rounded-full p-2'>
                        <p className='text-white font-semibold px-4'>Tout voir</p>
                        <div className='p-4 rounded-full bg-white'>
                            <img src="/icons/arrow-go.png" alt="" className='w-4 ' />
                        </div>
                    </div>
                </div>

                {
                    domaines.map((element) => (
                        <motion.a
                            variants={Animations.bottomToTop({ duration: 0.3 * domaines.indexOf(element) + 0.2 })}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            key={element.icon} className='p-2'> <div
                                style={
                                    { boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)" }
                                }
                                className='relative group

                                

                                w-full h-full
                                my-4 space-y-4 p-6

                                bg-[url(/four.png)] bg-cover
                                hover:scale-105
                                transition-all duration-200'>
                                <div className='flex items-center justify-center
                                -top-12 absolute  
                                h-20 w-20
                            group-hover:bg-black   bg-white  rounded-full shadow-2xl
                               
                               '>
                                    <img src={"/icons/" + element.icon} alt="" className='h-12' />

                                </div>
                                <div className='relative h-full w-full overflow-hidden'>
                                    <h3 className='font-semibold font-bricolage'>{element.titre}</h3>
                                    <div className='h-px bg-zinc-200 w-30'></div>
                                    <p>{element.description}</p>
                                    <button className='flex items-center justify-center right-0 bottom-0 absolute  font-bold text-red-600 bg-zinc-100 group-hover:bg-black  h-14 w-14 rotate-45'>
                                        <div className='flex items-center'>
                                            <img src="/icons/arrow-go.png" alt="" className='h-6' />
                                        </div>
                                    </button>
                                </div>

                            </div>
                        </motion.a>
                    ))
                }
            </div>
        </section>
    )
}

export default Services