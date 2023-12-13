import { useState, useEffect } from "react";
import { type DarkModeState } from "../types/DarkModeState";

const useDarkMode = (): DarkModeState => {
	const isClient = typeof window === "object";
	const storedMode = isClient ? localStorage.getItem("modoOscuro") : null;
	const [modoOscuro, setModoOscuro] = useState<boolean>(
		isClient && storedMode ? (JSON.parse(storedMode) as boolean) : false
	);

	useEffect(() => {
		if (isClient) {
			if (modoOscuro) {
				document.body.classList.add("dark");
			} else {
				document.body.classList.remove("dark");
			}
		}
	}, [isClient, modoOscuro]);

	const toggleModoOscuro = () => {
		const newModoOscuro = !modoOscuro;
		setModoOscuro(newModoOscuro);

		if (isClient) {
			localStorage.setItem("modoOscuro", JSON.stringify(newModoOscuro));
		}
	};

	return { modoOscuro, toggleModoOscuro };
};

export default useDarkMode;
