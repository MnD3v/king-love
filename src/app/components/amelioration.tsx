import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Amelioration = () => {
    return (
        <div className="bg-[url('/formation.jpg')] bg-cover  flex justify-center">
            <div className='flex justify-center
            w-full
            py-6 md:py-12 
            bg-black/30 backdrop-blur-sm'>
                <div className='max w-full'>
                    <motion.div
                        variants={Animations.leftToRight({ duration: 0.5 })}
                        initial="hidden"
                        whileInView="show"
                        className='bg-white/10 max-w-[500px] p-6 mr-2'>
                        <img src="/icons/quote.png" alt="" className='h-12 md:h-24 my-6' />
                        <p className='text-white text-2xl md:text-3xl italic font-play'>Nous améliorons constamment notre expertise, en visant l’excellence dans chaque interaction avec nos clients.</p>

                        <h3 className='pt-6 font-bricolage text-2xl text-red-600'>PDG</h3>
                    </motion.div>

                </div>

            </div>

        </div>
    )
}

export default Amelioration