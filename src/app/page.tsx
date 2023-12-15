import React from "react";
import Navbar from "./components/navbar";
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#ffff] dark:bg-[#221e1e]">
			<h1 className="text-2xl text-sky-950 font-poppins">Hi!</h1>
			<div>
				<Navbar />
				<div id="home" className="h-screen  bg-orange-400">
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
