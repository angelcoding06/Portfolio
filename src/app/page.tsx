import React from "react";
import Navbar from "./components/navbar";
import Aboutsection from "./components/sections/aboutsection";
import HomeSection from "./components/sections/homesection";
import ProjectSection from "./components/sections/projectsection";
import ContactSection from "./components/sections/contactsection";
import Footer from "./components/footer";
export default function Home() {
	return (
		<main className="flex flex-col min-h-screen bg-mainWhite dark:bg-pageBlack transition-all duration-300">
			<Navbar />
			<div className="container flex-col mt-24 mx-auto px-5 py-4 sm:px-12 lg:px-28">
				<HomeSection />
				<Aboutsection />
				<ProjectSection />
				<ContactSection />
			</div>
			<Footer />
		</main>
	);
}
