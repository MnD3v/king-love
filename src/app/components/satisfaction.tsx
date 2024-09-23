import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Satisfaction = () => {

    const chiffres = [
        { titre: "40", subtitre: "projets", description: "terminés avec succès" },
        { titre: "140", subtitre: "jeunes", description: "ayant bénéficié de nos programmes de formation" },
        { titre: "4", subtitre: "ans", description: "d'impact et de croissance continue" },
        { titre: "94", subtitre: "%", description: "de clients satisfaits par nos services" },
    ];

    return (
        <div className='relative flex  justify-center
         py-10 my-10
          bg-slate-100 '>

            <div className='relative font-bricolage text-center  capitalize
              w-auto   max-md:justify-center  
              
            bg-zinc-900
            rounded-xl
            '>

                <div className='flex flex-wrap justify-center
                p-4 py-10 md:py-16 gap-2
                bg-[url("/minimal-2.png")] bg-cover
                '>
                    {
                        chiffres.map((element) => (
                            <motion.div
                                variants={Animations.scale({ duration: 0.3 * chiffres.indexOf(element) })}
                                initial="hidden"
                                whileInView="show"
                                key={element.titre} className='w-72 flex flex-col items-center 
                                my-4
                                '>
                                <h1 className='text-4xl md:text-6xl text-red-600'>{element.titre} <span className='text-2xl font-syne text-white'>{element.subtitre}</span></h1>
                                <p className='font-poppins text-base md:text-lg text-zinc-200'>{element.description}</p>
                            </motion.div>
                        ))
                    }
                </div>



            </div>
        </div>
    )
}

export default Satisfaction