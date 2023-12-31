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
		if (typeof window !== "undefined") {
			const localStorageTheme = localStorage.getItem("theme");
			return (
				localStorageTheme === "dark" ||
				(!localStorageTheme &&
					window.matchMedia("(prefers-color-scheme: dark)").matches)
			);
		}
		return false; // Default to false if window or localStorage is unavailable
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (modoOscuro) {
				document.documentElement.classList.add("dark");
				localStorage.setItem("theme", "dark");
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("theme", "light");
			}
		}
	}, [modoOscuro]);

	const toggleModoOscuro = () => {
		setModoOscuro(!modoOscuro);
	};

	const handleOsPreference = () => {
		if (typeof window !== "undefined") {
			localStorage.removeItem("theme");
			setModoOscuro(window.matchMedia("(prefers-color-scheme: dark)").matches);
		}
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.addEventListener("change", handleOsPreference);
			return () => {
				window
					.matchMedia("(prefers-color-scheme: dark)")
					.removeEventListener("change", handleOsPreference);
			};
		}
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
