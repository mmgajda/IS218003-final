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
		<div className="max-w-[1200px] gap-10 grid grid-rows-4 px-8 items-center">
			
        <FooterNav className="items-center">
			<div className="w-[400px]">
		<MailchimpForm/>
			</div>
        <NavbarItem className="mx-4 content-center gap-10">
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