import Hero from "@/components/hero";
import MailchimpForm from "@/components/emailinput";
import Reviews from "@/components/reviews";
import Lookbook from "@/components/lookbook";
import bgimage from "@/public/bg.png";
import Image from "next/image";

export default function HeroSection() {
	return (
		<>
		<div className="absolute flex justify-center items-center z-0">
		<Image src={bgimage} alt="A light-colored marble pattern with dark veins." className="top-0 z-0 max-h-[1650px]" />
		</div>
		<section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10 z-10">

			<div className="inline-block max-w-lg text-center justify-center my-10">
				<Hero />
			</div>
			<div className="right-20 relative">
				<Reviews/>
				<Lookbook/>
			</div>
		</section>

		</>
	);
}
