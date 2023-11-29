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
			label: "Men",
			href: "/men",
		},
		{
			label: "Accessories",
			href: "/accessories",
		},
		{
			label: "Sales",
			href: "/sales",
		},
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		instagram: "https://instagram.com",
		twitter: "https://twitter.com/",
		tiktok: "https://tiktok.com",
		newcontent: "/",
		newsletter: "/",
	},
};
