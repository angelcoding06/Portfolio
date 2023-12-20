import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MyIcon, MyIconDark } from "./icons/icons";
const Logo = ({ modoOscuro }: { modoOscuro: boolean }) => {
	const [checked, setChecked] = useState(modoOscuro);

	useEffect(() => {
		setChecked(modoOscuro);
	}, [modoOscuro]);

	return <Link href="./">{!checked ? <MyIcon /> : <MyIconDark />}</Link>;
};

export default Logo;
