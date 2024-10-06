"use client"
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Animations from './utils/item'

const Contact = () => {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const contacts = [{
        icon: "chat.png", title: "Ecrivez nous un message", description: `+228 96 36 88 43
       `, link: "https://wa.me/22896368843"
    }, { icon: "red-mail.png", title: "Envoyez nous un mail", description: "kingloveempire@gmail.com", buttonText: "Envoyer un mail", link: "mailto:kinglovemedina@gmail.com" }, { icon: "phone-call.png", title: "Appelez nous", description: "+228 96 36 88 43", link: "tel:+22896368843" },
    ]
    return (
        <section id="contact" className='font-poppins flex flex-col items-center justify-center'>

            <div className='flex justify-center'>
                <div className='max md:flex md:justify-between w-full  bg-red-100 p-6 md:p-16 my-12'>
                    <div className='font-bricolage w-[43%] max-md:w-full'>
                        <h1 className='text-3xl md:text-5xl'>
                            Faites vous accompagner par <span className='text-red-600'>KLM Empire</span>
                        </h1>
                        <p className='font-play italic'>Devenez un acteur clé dans des secteurs stratégiques. Que ce soit dans le commerce, l'immobilier, l'import-export, ou l'agriculture, nos solutions vous apportent l'expertise et l'accompagnement nécessaires pour réussir et innover dans des domaines en pleine croissance.</p>
                    </div>
                    <div className='w-full md:max-w-[43%]'>
                        <div className='w-full flex flex-col md:grid  gap-3'>
                            <input type="text" name="" placeholder='Nom complet' id=""
                                onChange={(event) => {
                                    setName(event?.target.value)
                                    console.log("changed")
                                }}
                                className='px-1 w-full py-3 border-b-[1px] border-zinc-500 focus:border-red-500 bg-transparent outline-none' />

                            <textarea name="" placeholder='Votre message' id=""
                                onChange={(event) => {
                                    setMessage(event?.target.value)
                                    console.log("changed")
                                }}
                                className='px-1 w-full py-3 border-b border-zinc-500 focus:border-red-500 bg-transparent outline-none' />

                        </div>
                        <a href={'https://wa.me/22896368843' + `?text=Bonjour, je me nomme ${name}, ${message}`} target='_blank' className='inline-block bg-red-600 text-white font-semibold px-8 py-4 my-4'>Envoyer</a>
                    </div>
                </div>

            </div>
            <div className='max-w-[800px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 m-3'>
                <div>
                    <div className='flex items-center gap-1'> <div className='h-px bg-zinc-800 w-16'></div> <h3>Retrouvez nous</h3> </div>
                    <h1>Contactez <span className='text-red-500'>Nous</span></h1>
                    <p>Nous avons des experts en social en direct qui attendent pour vous aider du lundi au vendredi de 7h à 18h</p>
                </div>
                {contacts.map((element) => (
                    <motion.div

                        variants={Animations.bottomToTop({ duration: 0.4 * contacts.indexOf(element) + 0.4, })}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        key={element.icon} className='w-full  rounded-xl flex flex-col p-4 gap-3'>

                        <img src={`/icons/${element.icon}`} alt="" className='h-10 md:h-14 self-start' />

                        <h3>{element.title}</h3>
                        <p style={{ whiteSpace: 'pre-wrap' }} className=''>{element.description} </p>
                        <a href={element.link} target='_blank' className='inline-block px-6 py-3 bg-red-600 rounded-md text-white self-start'> Contacter </a>

                    </motion.div>
                ))}
                <motion.div

                    variants={Animations.bottomToTop({ duration: 0.4 })}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='w-full  rounded-xl flex flex-col p-4 gap-3'>

                    <img src={`/icons/red-map.png`} alt="" className='h-10 md:h-14 self-start' />

                    <h3>Adresse</h3>
                    <p style={{ whiteSpace: 'pre-wrap' }} className=''>Kara-Tomdè </p>


                </motion.div>

            </div>
        </section>

    )
}

export default Contact