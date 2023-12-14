import "@/styles/globals.css";
import { Metadata } from "next";
import Head from "next/head";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import GoogleAnalytics from "@/components/googleanalytics";
import PrivacyBanner from "@/components/privacybanner";
import clsx from "clsx";
import Image from "next/image";
import bgimage from "@/public/bg.png";


export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
			</head>
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased relative",
					fontSans.variable
				)}
			>
				{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
					<GoogleAnalytics ga_id=
						{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
				) : null}
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="z-10 relative flex flex-col h-screen">
						<Navbar />
						<div className="flex justify-center items-center">
							<Image src={bgimage} alt="A light-colored marble pattern with dark veins." className="relative inset-y-0 z-0" />
						</div>

						<main className="absolute container mx-auto max-w-7xl pt-16 px-6 flex-grow z-10">
							{children}
							<PrivacyBanner />
						</main>
						<footer className="relative bottom-0 flex flex-col mx-auto py-3">
							<Footer />
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
