import React from "react";
import HomePageTiun from "../../../../public/HomePageTiUN.png";
import ProjectArticle from "../projectarticle";

const skills = ["NextJs", "Typescript", "TailwindCSS", "Vercel"];
const ProjectSection = () => {
	return (
		<section
			className="flex flex-col justify-between scroll-my-28 py-12 border-solid border-t-2 border-orange-600 "
			id="projects"
		>
			<h1 className="font-extrabold text-center text-mainOrange mb-8 text-4xl lg:text-5xl lg:leading-normal justify-center">
				Projects
			</h1>
			<div className="flex flex-col gap-y-8">
				<ProjectArticle
					ProjectTitle={"TiUN"}
					ProjectDescription={
						"TiUN is the non-official website of the National University of Colombia's marketplace. This project was developed using NextJs, Typescript, TailwindCSS and deployed on Vercel."
					}
					ProjectDescriptionoptional={
						"The main features were; profile creation, authentication, products CRUD, global dark mode using custom hooks and context, add to cart, add to favorites and MercadoPago integration."
					}
					skills={skills}
					image={HomePageTiun}
					url={"https://ti-un-front-vr3s.vercel.app/"}
					githublink={"https://github.com/lalopezpa/TiUN-Front"}
				/>
			</div>
		</section>
	);
};
export default ProjectSection;
