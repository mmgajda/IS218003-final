'use client';
import React, { useEffect, useState } from 'react';
import {
	Navbar as FooterNav,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import {
	InstagramIcon,
	TwitterIcon,
	TikTokIcon
} from "@/components/icons";
import MailchimpForm from "./emailinput";

export const Footer = () => {
	const [iconSize, setIconSize] = useState('24px');

	useEffect(() => {
		const handleResize = () => {
			setIconSize(window.innerWidth > 640 ? '32px' : '24px');
		};

		// Set size on mount
		handleResize();

		// Set up event listener
		window.addEventListener('resize', handleResize);

		// Clean up
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		// Wrap the FooterNav with a div to control its width and centering
		<div className="flex justify-center w-full px-4 md:px-8">
			<FooterNav className="w-full h-[140%] max-w-[1042px] bg-gradient-to-b from-[#9b9898] to-[#ededed]">
				<div className="flex flex-col md:flex-row justify-between items-center w-full">
					{/* Privacy Link */}
					<div className="mb-4 md:mb-0 flex flex-col">
						<Link href="/" aria-label="Link to get in contact with The Explorer Clothing">Contact Us</Link>
						<Link href="/privacy" aria-label="Link to the data privacy policy">Data Privacy Policy</Link>
					</div>

					{/* Mailchimp Form */}
					<div className="w-full md:w-1/3 mr-[8rem] mb-4 md:mb-0">
						<MailchimpForm />
					</div>

					{/* Social Icons */}
					<NavbarItem className="flex gap-3">
						<Link isExternal href={siteConfig.links.instagram} aria-label="Instagram">
							<InstagramIcon style={{ height: iconSize, width: iconSize }} />
						</Link>
						<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
							<TwitterIcon style={{ height: iconSize, width: iconSize }} />
						</Link>
						<Link isExternal href={siteConfig.links.tiktok} aria-label="TikTok">
							<TikTokIcon style={{ height: iconSize, width: iconSize }} />
						</Link>
					</NavbarItem>
				</div>
			</FooterNav>
		</div>
	);
};