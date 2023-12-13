"use client";
import React from 'react'
import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/react';
import CTAButton from './ctabutton';
import heroImage from "@/public/hero1.svg";

export const Hero = () => {
    const scrollToForm = (): void => {
		const formElement = document.getElementById('subscribe-form');
		if (formElement) {
			formElement.scrollIntoView({ behavior: 'smooth' });
		}
	};
    return (
        <div className='relative flex flex-col md:flex-row justify-center items-center gap-5 w-full'>
    <div className='w-full md:w-1/2'>
        <Card className="right-[240px]" radius='sm'>
            <CardBody className='flex flex-col items-center justify-center h-full p-4'>
                <h1 className="text-center mb-4 font-extrabold text-lg md:text-2xl lg:text-4xl">
                    Discover the New Collection
                </h1>
                <p className='text-center'>
                    Some kind of text regarding reciprocity.
                </p>
                <div className='py-10'>
                    <CTAButton scrollToForm={scrollToForm}/>
                </div>
            </CardBody>
        </Card>
    </div>
    <div className='w-full h-full absolute left-[180px]'>
        <Image src={heroImage} alt="Picture of a happy group of people joyously running through an open field." layout="fill"/>
    </div>
</div>

    

    )
}

export default Hero;