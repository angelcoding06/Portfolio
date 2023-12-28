import React from "react";
import Image from "next/image";
import { GithubIcon } from "../components/icons/icons";
import ProjectProps from "@/app/types/ProjectcardType";

const ProjectArticle: React.FC<ProjectProps> = ({
	ProjectTitle,
	ProjectDescription,
	ProjectDescriptionoptional,
	skills,
	image,
	url,
	githublink,
}) => {
	return (
		<article className="flex flex-col-reverse p-5 lg:flex-row justify-between items-center bg-orange-200 dark:bg-stone-800 rounded-lg">
			<div className="flex flex-col justify-center max-w-full items-center lg:w-1/2">
				<h2 className="font-extrabold text-center text-black dark:text-white mb-8 text-2xl lg:text-3xl lg:leading-normal justify-center mt-4">
					{ProjectTitle}
				</h2>
				<p className="font-poppins text-start text-black dark:text-white mb-8 mr-4 text-lg lg:text-xl lg:leading-normal justify-center">
					{ProjectDescription}
				</p>
				<p className="font-poppins text-start text-black dark:text-white mb-8 mr-4 text-lg lg:text-xl lg:leading-normal justify-center">
					{ProjectDescriptionoptional}
				</p>
				<div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-4 w-full">
					{skills.map((skill, index) => (
						<span
							key={index}
							className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-center  font-semibold text-gray-700 mr-2 mb-2"
						>
							{skill}
						</span>
					))}
				</div>
				<div className="flex w-full mt-4 ">
					<a
						href={url}
						target="blank"
						className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded"
					>
						Visit
					</a>
					<a className="fill-black dark:fill-white" href={githublink} target="blank">
						<GithubIcon />
					</a>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center lg:h-max w-fit lg:w-1/2 rounded">
				<a
					href={url}
					target="blank"
					className="transition-shadow duration-300 hover:shadow-mainOrange hover:shadow-md rounded"
				>
					<Image src={image} alt={ProjectTitle} className="rounded-lg" />
				</a>
			</div>
		</article>
	);
};
export default ProjectArticle;
