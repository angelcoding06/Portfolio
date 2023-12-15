import type React from "react";
import { useState, useEffect } from "react";
import { DarkModeIcon, LightModeIcon } from "../components/icons/icons";

type DarkModeToggleProps = {
	modoOscuro: boolean;
	toggleModoOscuro: () => void;
};

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
	modoOscuro,
	toggleModoOscuro,
}) => {
	// ...

	const [checked, setChecked] = useState(modoOscuro);

	useEffect(() => {
		setChecked(modoOscuro);
	}, [modoOscuro]);
	
	return (
		<div className="flex items-center">
			<span className="mr-2">
				{checked ? <DarkModeIcon/> : <LightModeIcon/>}
			</span>
			<label
				id="switch"
				className="relative inline-block w-12 h-6 bg-orange-300 rounded-full cursor-pointer dark:bg-orange-400"
			>
				<input
					type="checkbox"
					className="opacity-0 w-0 h-0"
					checked={checked}
					onChange={toggleModoOscuro}
				/>
				<span className="slider absolute w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-200">
					<span
						className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-gray-400 dark:bg-white ${
							checked ? "transform translate-x-6" : "transform translate-x-0"
						}`}
						style={{
							transition: "background-color 0.4s, transform 0.4s",
						}}
					/>
				</span>
			</label>
		</div>
	);
};

export default DarkModeToggle;
