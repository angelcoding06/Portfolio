import React from "react";
import Navbar from "./components/navbar";
import Aboutsection from "./components/sections/aboutsection";
import HomeSection from "./components/sections/homesection";
import ProjectSection from "./components/sections/projectsection";
import ContactSection from "./components/sections/contactsection";
export default function Home() {
	return (
		<main className="flex min-h-screen bg-mainWhite dark:bg-pageBlack transition-all duration-300">
			<Navbar />
			<div className="container mt-24 mx-auto px-5 py-4 sm:px-12 lg:px-28">
				<HomeSection />
				<Aboutsection />
				<ProjectSection />
				<ContactSection />
			</div>
		</main>
	);
}
