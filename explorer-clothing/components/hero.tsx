import React from 'react'
import { Link } from "@nextui-org/link";
import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/react';
import heroImage from "@/public/hero-1-manInJacket.svg";

export const Hero = () => {
    return (
        <div>
        <Card>
        <Image src={heroImage} alt="Picture of a man in a jacket on rugged mountain landscape." height="376" width="525"/>
        </Card>
        <Card>
        <CardBody>
        <h1 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl">Explore your favorite styles here.</h1>
            <p className='uppercase'>Limited time offer! buy 1, get 50% off of any item of your choice!</p>
        </CardBody>
        </Card>
        </div>
    )
}

export default Hero;