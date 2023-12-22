"use client";
import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

import { type DarkModeState } from "../types/DarkModeState";

const DarkModeContext = createContext<DarkModeState | undefined>(undefined);

export const useDarkMode = (): DarkModeState => {
	const context = useContext(DarkModeContext);
	if (!context) {
		throw new Error("useDarkMode must be used within a DarkModeProvider");
	}
	return context;
};

type DarkModeProviderProps = {
	children: React.ReactNode;
};

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
	children,
}) => {
	const [modoOscuro, setModoOscuro] = useState(() => {
		const localStorageTheme = localStorage.getItem("theme");
		return (
			localStorageTheme === "dark" ||
			(!localStorageTheme &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		);
	});

	useEffect(() => {
		if (modoOscuro) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [modoOscuro]);

	const toggleModoOscuro = () => {
		setModoOscuro(!modoOscuro);
	};

	const handleOsPreference = () => {
		localStorage.removeItem("theme");
		setModoOscuro(window.matchMedia("(prefers-color-scheme: dark)").matches);
	};

	useEffect(() => {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", handleOsPreference);
		return () => {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.removeEventListener("change", handleOsPreference);
		};
	}, []);


	const contextValue = {
		modoOscuro,
		toggleModoOscuro,
	};

	return (
		<DarkModeContext.Provider value={contextValue}>
			{children}
		</DarkModeContext.Provider>
	);
};
