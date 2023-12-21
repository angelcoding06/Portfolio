import React from "react";
import Navbar from "./components/navbar";
import Aboutsection from "./components/aboutsection";
import HomeSection from "./components/homesection";
export default function Home() {
	return (
		<main className="flex min-h-screen bg-[#f0f1f1] dark:bg-[#221e1e]">
			<Navbar />
			<div className="container mt-24 mx-auto px-5 py-4 sm:px-12 lg:px-28">
				<HomeSection />

				<Aboutsection />

				<div id="projects" className="h-screen bg-red-800">
					<h1>Section 3</h1>
				</div>
				<div id="contact" className="h-screen bg-amber-500">
					<h1>Section 3</h1>
				</div>
			</div>
		</main>
	);
}
