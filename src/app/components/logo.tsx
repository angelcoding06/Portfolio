import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MyIcon, MyIconDark } from "./icons/icons";
export default function Logo({ modoOscuro }: { modoOscuro: boolean }) {
	const [checked, setChecked] = useState(modoOscuro);

	useEffect(() => {
		setChecked(modoOscuro);
		console.log("modoOscuro: ", checked);
	}, [modoOscuro]);

	return <Link href="./">{!checked ? <MyIcon /> : <MyIconDark />}</Link>;
}
