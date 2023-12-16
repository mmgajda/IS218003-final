import Image from "next/image";
import React from 'react'

import arrivals1 from '@/public/boots.svg'
import arrivals2 from '@/public/arrivals-2-shirt.svg'
import arrivals3 from '@/public/arrivals-3-jeans.svg'
export const Lookbook = () => {
    return (
        <>

        <div className="relative inset-0 flex flex-row gap-0.5 place-items-center">
            <Image src={arrivals1} alt="A man's legs, clad in jeans and brown boots, lying in a green forest in front of a waterfall." className="md:w-[35%] md:h-auto"/>
            <Image src={arrivals2} alt="The back of a man wearing a vibrantly colored graphic tee." className="md:w-[35%] md:h-auto"/>
            <Image src={arrivals3} alt="The bottom half of a man wearing distressed jeans with colorful patchwork." className="md:w-[35%] md:h-auto"/>
        </div>
        </>
    )
}

export default Lookbook;
