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
			href: "#about.button",
		},
		{
			label: "Newsletter",
			href: "#subscribe-form",
		},
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About Us",
			href: "/about",
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
