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
        <div className='flex flex-row justify-center items-center w-full'>
            <div className='flex-1'>
                <Card className="max-w-[80%] ml-[10%]" radius='sm'>
                    <CardBody className='flex flex-col items-center justify-center h-full p-4'>
                        <h1 className="text-center mb-4 font-extrabold text-lg md:text-2xl lg:text-4xl">
                            Discover the New Collection
                        </h1>
                        <p className='text-center'>
                            Sign up now for 25% off of your first purchase
                        </p>
                        <div className='py-10'>
                            <CTAButton scrollToForm={scrollToForm}/>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className=''>
                <Image src={heroImage} alt="Picture of a happy group of people joyously running through an open field." layout="responsive"/>
            </div>
        </div>
    );
    
}

export default Hero;