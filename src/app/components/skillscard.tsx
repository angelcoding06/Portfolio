import React from "react";
import type IconoProps from "../types/iconType";

type SkillsCardProps = {
	icon: React.ReactElement<IconoProps>;
};
const SkillsCard: React.FC<SkillsCardProps> = ({icon}) => {
	return (
		<li className="flex flex-col items-center">
			<ul className="max-w-[120px] xs:max-w-[150px] md:max-w-none rounded-lg bg-orange-100 select-none hover:shadow hover:shadow-mainOrange  p-2 dark:bg-stone-800">
				<div className="flex flex-col justify-between rounded-md p-6 items-center text-center">
					{icon}
				</div>
			</ul>
		</li>
	);
};

export default SkillsCard;
