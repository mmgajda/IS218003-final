"use client";
import React from 'react';
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
        <div className='justify-center flex flex-col md:flex-row w-full'>
            <div className='ml-[5%] w-auto lg:w-1/3 max-w-[90%]'>
                <Card className="flex flex-col justify-right h-full w-full mx-auto" radius='sm'>
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
            <div className='relative w-full mx-auto md:max-w-[55%]'>
                <Image src={heroImage} alt="Picture of a happy group of people joyously running through an open field" layout="responsive" className="w-full" />
            </div>
        </div>
    );
}

export default Hero;
