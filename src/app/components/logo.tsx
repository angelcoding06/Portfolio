import React from "react";

import Link from "next/link";
import { MyIcon, MyIconDark } from "./icons/icons";
const Logo = ({ modoOscuro }: { modoOscuro: boolean }) => {


	return <Link href="./">{!modoOscuro ? <MyIcon /> : <MyIconDark />}</Link>;
};

export default Logo;
