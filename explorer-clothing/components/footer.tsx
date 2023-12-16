'use client';
import {
	Navbar as FooterNav,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
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
    return (
		<div className="relative flex gap-10 px-8 bg-gradient-to-b from-[#9b9898]  w-3/4 max-w-[1062px]">
			
        <FooterNav className="relative flex mx-auto md:h-[80px]">
			<div className="">
				<Link href="/privacy" aria-label="Link to the data privacy policy">Data Privacy Policy</Link>
			</div>
			<div className="md:w-[35%] mx-8">
		<MailchimpForm/>
			</div>
        <NavbarItem className="!items-end mx-4 gap-3">
                    <Link isExternal href={siteConfig.links.instagram} aria-label="Instagram">
                        <InstagramIcon className="text-default-500" />
                    </Link>
					<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.tiktok} aria-label="TikTok">
						<TikTokIcon className="text-default-500" />
					</Link>
				</NavbarItem>
                </FooterNav>
		</div>
    )
};