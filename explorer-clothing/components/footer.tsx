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
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import {
    InstagramIcon,
	TwitterIcon,
    TikTokIcon
} from "@/components/icons";

export const Footer = () => {
    // const signUp = (

    // );

    return (
        <FooterNav>
        <NavbarItem className="hidden sm:flex content-center gap-2">
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
    )
};