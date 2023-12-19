import React from "react";
import Navbar from "./components/navbar";
import Aboutsection from "./components/aboutsection";
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col  p-24 bg-[#f0f1f1] dark:bg-[#221e1e]">
			<Navbar />
			<div className="container mt-24 mx-auto px-12 py-4">
				<Aboutsection />
				<div id="home" className="h-screen bg-inherit">
					<h1>Section 1</h1>
				</div>
				<div id="about" className="h-screen bg-cyan-300">
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
