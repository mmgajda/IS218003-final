"use client";
import React from 'react'
import Image from 'next/image';
import climberimage from '@/public/membership-1-climber.svg'
import { Card, CardBody } from '@nextui-org/react';
import CTAButton from './ctabutton';

export const About = () => {
    const scrollToForm = (): void => {
		const formElement = document.getElementById('subscribe-form');
		if (formElement) {
			formElement.scrollIntoView({ behavior: 'smooth' });
		}
	};
    return (
        <>
        <div className='flex flex-row justify-center items-center w-full'>
        <div className="">
            <Image src={climberimage} alt="Picture of a man climbing up a sheer mountain wall, suspended by climbing rope that he is holding."/>
        </div>
        <div className='w-full md:w-1/3 ml-[3rem]'>
        <Card className="relative" radius='sm'>
            <CardBody className='flex flex-col items-center justify-center h-full p-4'>
                <h1 className="text-center mb-4 font-extrabold text-lg md:text-2xl lg:text-4xl">
                    Unleash Your Wanderlust
                </h1>
                <p className='text-center'>
                    A brand forged through friendship, inspired by the beauty of the outdoors, crafted from sustainable materials
                </p>
                <div className='py-10'>
                    <CTAButton scrollToForm={scrollToForm}/>
                </div>
                
            </CardBody>
        </Card>
        </div>
    </div>
            </>
    )
}

export default About;