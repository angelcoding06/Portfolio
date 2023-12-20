import React from "react";
import Navbar from "./components/navbar";
import Aboutsection from "./components/aboutsection";
import HomeSection from "./components/homesection";
export default function Home() {
	return (
		<main className="flex min-h-screen bg-[#f0f1f1] dark:bg-[#221e1e]">
			<Navbar />
			<div className="container mt-24 mx-auto px-12 py-4">
				<HomeSection/>
				<div id="about" className=" bg-cyan-300">
					<Aboutsection  />
					<h1>Section 2</h1>
				</div>
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
