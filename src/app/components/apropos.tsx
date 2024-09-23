import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const APropos = () => {
    const avantages = [
        {
            "icon": "big-reseau.png",
            "titre": "Réseau international et local",
            "description": "Grâce à une expertise dans l'import-export et l'e-commerce, nous facilitons l'accès à de nouveaux marchés, offrant une portée globale tout en restant bien ancré localement."
        },
        {
            "icon": "solution-integre.png",
            "titre": "Solutions intégrées",
            "description": "Nous proposons des services couvrant de multiples secteurs (immobilier, BTP, agriculture, etc.), permettant à nos clients de gérer leurs projets de bout en bout avec un seul partenaire fiable."
        },
        {
            "icon": "innovation.png",
            "titre": "Innovation et durabilité",
            "description": "Notre engagement pour des pratiques durables et l'utilisation de technologies modernes, que ce soit dans le commerce, l'agriculture ou le e-commerce, nous distingue comme un partenaire responsable et avant-gardiste."
        }
    ]
    return (
        <section id="a-propos" className='flex  justify-center 
        p-3 py-4 md:py-14 
        bg-red-50
        '>
            <div className='max grid grid-cols-1 md:grid-cols-2 gap-3'>
                <motion.img src="/propos.jpg" alt=""

                    variants={Animations.leftToRight({ duration: 0.5 })}
                    initial="hidden"
                    whileInView="show"
                    className='w-full h-auto  ' />
                <div className='w-full '>
                    <div className='flex items-center'>
                        <p className='text-red-600 uppercase font-poppins font-bold'>A propos de KLM Empire</p>
                        <div className='h-px bg-red-600 w-20 ml-2'></div>

                    </div>
                    <h1 className='font-bricolage text-2xl md:text-3xl  leading-tight
                    my-3
                    '>
                        Pourquoi choisir KLM <span className='text-red-600'>Empire </span>
                        pour vous <span className='text-red-600'>accompagner</span>  dans vos differents projets ?
                    </h1>

                    <div className='w-16 h-1 bg-red-600 rounded-b-full mb-4'></div>

                    {
                        avantages.map((element) => (
                            <motion.div
                                variants={Animations.bottomToTop({ duration: 0.3 * avantages.indexOf(element) })}
                                initial="hidden"
                                whileInView="show"
                                key={element.icon} className='flex my-3'>
                                <img src={"/icons/" + element.icon} alt="" className='h-10' />
                                <div>
                                    <h3>
                                        <span className='font-semibold'>{element.titre}</span>
                                    </h3>
                                    <p>{element.description}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default APropos