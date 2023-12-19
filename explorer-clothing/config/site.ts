export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "The Explorer Apparel",
	description: "Experience the World in Style.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About Us",
			href: "#about-card",
		},
		{
			label: "Where to Buy",
			href: "#retailer-banner",
		},
	],
	navMenuItems: [
		{
			label: "Home",
			href: "#",
		},
		{
			label: "About Us",
			href: "#about-card",
		},
		{
			label: "Where to Buy",
			href: "#retailer-banner",
		},
	],
	links: {
		instagram: "https://instagram.com",
		twitter: "https://twitter.com/",
		tiktok: "https://tiktok.com",
	},
};
