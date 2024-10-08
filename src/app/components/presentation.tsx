import React from 'react'
import AppBar from './app_bar'
import { motion } from 'framer-motion'
import Animations from './utils/item'

const Presentation = () => {
    return (
        <section id='' className="flex justify-center bg-blue-950 bg-[url('/phone-bg.png')] md:bg-[url('/bg-blue.png')]  bg-cover">
            <div className='w-full flex justify-center bg-black/70'>
                <div className='w-full flex flex-col items-center text-white'>
                    <AppBar></AppBar>

                    <div className='max w-full p-6 space-y-5 md:space-y-10'>
                        <div className="max space-y-3">
                            <motion.h1
                                variants={Animations.bottomToTop({ duration: 0.7 })}
                                initial="hidden"
                                whileInView="show"
                                className="text-3xl md:text-7xl font-extrabold font-bricolage">KLM <span className='text-red-700'>Empire</span> </motion.h1>
                            <motion.h1
                                variants={Animations.bottomToTop({ duration: 1.3 })}
                                initial="hidden"
                                whileInView="show"
                                className="text-4xl md:text-7xl  font-semibold font-bricolage">Une Entreprise</motion.h1>
                            <motion.h1
                                variants={Animations.bottomToTop({ duration: 1.9 })}
                                initial="hidden"
                                whileInView="show"
                                className="text-4xl md:text-6xl  font-play font-light italic">Mulitiservice</motion.h1>
                        </div>
                        <div className=" max flex  justify-between max-sm:flex-wrap">
                            <motion.p
                                variants={Animations.bottomToTop({ duration: 2.2 })}
                                initial="hidden"
                                whileInView="show"
                                className="w-[400px]">
                                Transformez vos ambitions en expertise sectorielle grâce à notre accompagnement. Que ce soit dans le commerce, l'immobilier, l'agriculture ou la construction, nous vous aidons à réussir dans des secteurs en pleine expansion.
                            </motion.p>
                            <motion.a href='#formations'
                                variants={Animations.scale({ duration: 2.5 })}
                                initial="hidden"
                                whileInView="show"
                                className=" text-black hover:text-white uppercase font-semibold 
                                w-auto
                                px-10 py-4 my-3
                                 self-center
                                 bg-white hover:bg-transparent border-2 border-transparent hover:border-white
                                 ">nos services</motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presentation