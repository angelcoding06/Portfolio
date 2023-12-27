import { StaticImageData } from "next/image";

type ProjectProps = {
	ProjectTitle: string;
	ProjectDescription: string;
	ProjectDescriptionoptional?: string | null;
	skills: string[];
	image: StaticImageData;
	url: string;
	githublink: string;
};

export default ProjectProps;
