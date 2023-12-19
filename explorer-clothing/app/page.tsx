import Hero from "@/components/hero";
import About from '@/components/about';
import Reviews from "@/components/reviews";
import Lookbook from "@/components/lookbook";
import Image from "next/image";
import Retailers from "@/components/retailers";

export default function LandingPage() {
    return (
        <section className="relative flex flex-col items-center justify-center py-4 md:py-4 z-10">
            <div className="relative text-center">
                <Hero />
            </div>
            <div className="relative text-center mt-[7rem] mb-[3rem]">
                <h1 className='text-center'>About Explorer</h1>
            </div>
            <div className="relative flex">
                <About />
            </div>
			<div className="relative text-center mt-[7rem] mb-[3rem]">
                <h1 className='text-center'>Find Us at the Following Retailers</h1>
			</div>
			<div className="relative flex left-[0.5rem]">
				<Retailers />
			</div>
			<div className="relative text-center mt-[7rem] mb-[3rem]">
                <h1 className='text-center'>Reviews</h1>
            </div>
            <div className="relative flex w-[90%]">
                <Reviews />
            </div>
			<div className="relative text-center mt-[3rem] mb-[3rem]">
            	<h1>Dive Into The Season&apos;s Looks</h1>
        	</div>
            <div className="relative flex items-center mb-[12rem] left-[0.4rem]">
                <Lookbook />
            </div>
        </section>
    );
}
