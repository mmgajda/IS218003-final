import React from 'react'
import Image from 'next/image';
import NextLink from "next/link";
import rei from '@/public/Recreational_Equipment,_Inc.-Logo 1.svg'
import backcountry from '@/public/backcountry_logo 1.svg'
import moosejaw from '@/public/moosejaw-logo-vector 2.svg'

const Retailers = () => {
    return (
        <>
        <div className='relative place-items-center md:w-[64rem] flex gap-[2rem] bg-slate-400 bg-opacity-40 rounded-md'>

                <NextLink href="https://www.rei.com/">
                    <Image src={rei} alt="Logo of Recreational Equipment Inc." className='object-contain'/>
                </NextLink>
                <NextLink href="https://www.backcountry.com/">
                    <Image src={backcountry} alt="Logo of Backcountry.com" className='object-contain mt-[2rem]'/>
                </NextLink>
                <NextLink href="https://www.moosejaw.com/">
                    <Image src={moosejaw} alt="Logo of Moosejaw" className='object-contain mt-[1.5rem]'/>
                </NextLink>
        </div>
        </>
    )
}

export default Retailers;