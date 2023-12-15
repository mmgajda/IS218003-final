import Image from "next/image";
import React from 'react'

import arrivals1 from '@/public/arrivals-1-shoe.svg'
import arrivals2 from '@/public/arrivals-2-shirt.svg'
import arrivals3 from '@/public/arrivals-3-jeans.svg'
export const Lookbook = () => {
    return (
        <>
        <div className="text-center">
            <h1>Dive Into The Season&apos;s Looks</h1>
        </div>
        <div className="flex flex-row gap-1">
            <Image src={arrivals1} alt="A sneaker leaning precariously against a basketball."/>
            <Image src={arrivals2} alt="The back of a man wearing a vibrantly colored graphic tee."/>
            <Image src={arrivals3} alt="The bottom half of a man wearing distressed jeans with colorful patchwork."/>
        </div>
        </>
    )
}

export default Lookbook;
