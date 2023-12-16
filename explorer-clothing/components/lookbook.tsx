import Image from "next/image";
import React from 'react'

import arrivals1 from '@/public/boots.webp'
import arrivals2 from '@/public/arrivals-2-shirt.svg'
import arrivals3 from '@/public/arrivals-3-jeans.svg'
export const Lookbook = () => {
    return (
        <>

        <div className="relative inset-0 flex flex-row gap-0.5 place-items-center">
            <Image src={arrivals1} alt="A man's legs, clad in jeans and brown boots, lying in a green forest in front of a waterfall." className="md:w-[368px] md:h-[356px]"/>
            <Image src={arrivals2} alt="The back of a man wearing a vibrantly colored graphic tee."/>
            <Image src={arrivals3} alt="The bottom half of a man wearing distressed jeans with colorful patchwork."/>
        </div>
        </>
    )
}

export default Lookbook;
