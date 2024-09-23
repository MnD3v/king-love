import React from 'react'

const Equipe = () => {
    const membres = [{ image: "/vice.jpg", poste: "PDG", nom: "King Love" }, { image: "/vice.jpg", poste: "Vice Président", nom: "Steve " },]
    return (
        <div className='flex justify-center'>
            <div className='max my-10'>
                <h1 className='font-bricolage my-6 text-center text-2xl md:text-4xl'>Nos Membres</h1>
                <div className='flex flex-wrap justify-center gap-3'>
                    {
                        membres.map((element) => (
                            <div key={element.poste} className='w-72 flex flex-col items-center'>
                                <img src={element.image} alt="" className='w-full h-80 object-cover' />
                                <div className='-top-10 relative p-5 w-[70%] bg-white shadow-lg'>
                                    <p className='text-red-600 font-semibold'> {element.poste}</p>
                                    <p className='font-bricolage font-bold text-lg'>{element.nom}</p>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Equipe