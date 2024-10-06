import React from 'react'

const AVenir = () => {
    const evenements = [
        {
            image: "e-commerce.jpg",
            title: "Formation sepciale en e-commerce",
            descrption: "Comment acheter en toute securite depuis la CHINE & la TURQUIE",
            date: "13 sept 2024",
        },
        {
            image: "graphisme.jpg",
            title: "Formation en Graphisme",
            descrption: "Apprendre a concevoir les affiches, flyers, baches...",
            date: "13 sept 2024",
        },
        {
            image: "informatique.jpg",
            title: "Formation pratique en initation en informatique",
            descrption: "Connaître les base des systèmes d'exploitation, internet, word, excel, powerpoint",
            date: "13 sept 2024",
        }
    ]
    return (
        <div className='flex justify-center my-6'>
            <div className='max w-full'>
                <p className='m-2 text-red-500 text-lg font-semibold'>{"//Evenements"}</p>
                <h1 className='m-2 text-2xl md:text-4xl'>Evenements à venir</h1>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 m-2'>
                    {
                        evenements.map((element) => (
                            <div key={element.title} className='w-full p-1 border rounded-md'>
                                <img src={"/evenements/" + element.image} alt="" className='rounded-sm' />
                                <div>
                                    <p className='font-bricolage text-2xl text-red-600 font-bold'>{element.title}</p>
                                    <p>{element.descrption}</p>
                                    <a href={'https://wa.me/22896368843' + `?text=Bonjour, je suis interessé par ${element.title}. J'aimerais en savoir plus !!!`} target='_blank' className='inline-block px-6 py-3 bg-teal-500 text-white rounded-md my-1'>
                                        Contacter
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AVenir