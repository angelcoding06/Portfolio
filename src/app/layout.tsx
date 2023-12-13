import { StrictMode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DarkModeProvider } from "./context/DarkModeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My Portfolio",
	description: "angelcoding06's portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="scroll-smooth" lang="en">
			<StrictMode>
				<DarkModeProvider>
					<body className={inter.className}>{children}</body>
				</DarkModeProvider>
			</StrictMode>
		</html>
	);
}
