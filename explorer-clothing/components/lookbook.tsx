import Image from "next/image";
import React from 'react'

import arrivals1 from '@/public/arrivals1.webp'
import arrivals2 from '@/public/arrivals2.webp'
import arrivals3 from '@/public/arrivals3.webp'
export const Lookbook = () => {
    return (
        <>

        <div className="relative inset-0 grid grid-cols-1 grid-rows-3 md:flex md:flex-row gap-0.5 place-items-center">
            <Image src={arrivals1} alt="A man's legs, clad in jeans and brown boots, lying in a green forest in front of a waterfall." className="md:w-[35%] md:h-auto"/>
            <Image src={arrivals2} alt="The back of a man wearing a vibrantly colored graphic tee." className="md:w-[35%] md:h-auto"/>
            <Image src={arrivals3} alt="The bottom half of a man wearing distressed jeans with colorful patchwork." className="md:w-[35%] md:h-auto"/>
        </div>
        </>
    )
}

export default Lookbook;
