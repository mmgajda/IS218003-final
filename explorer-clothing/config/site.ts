export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Explorer Clothing",
	description: "Experience the world in style.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About Us",
			href: "/abour",
		},
		{
			label: "Newsletter",
			href: "#subscribe-form",
		},
	],
	links: {
		instagram: "https://instagram.com",
		twitter: "https://twitter.com/",
		tiktok: "https://tiktok.com",
	},
};
