import Hero from "@/components/hero";
import MailchimpForm from "@/components/emailinput";
import Reviews from "@/components/reviews";
import Lookbook from "@/components/lookbook";

export default function HeroSection() {
	return (
		<section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10 z-10">
			<div className="inline-block max-w-lg text-center justify-center my-10">
				<Hero />
			</div>
			<div className="relative">
				<Reviews/>
				<Lookbook/>
			</div>
		</section>
	);
}
