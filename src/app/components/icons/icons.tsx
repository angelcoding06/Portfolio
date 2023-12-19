import type React from "react";
import type IconoProps from "../../types/iconType";

export const DarkModeIcon: React.FC<IconoProps> = ({
	width = "20",
	height = "20",
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		fill="white"
		viewBox="0 0 16 16"
	>
		<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />{" "}
	</svg>
);

export const LightModeIcon: React.FC<IconoProps> = ({
	width = "24",
	height = "24",
}) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
		<path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
	</svg>
);

export const MyIcon: React.FC<IconoProps> = ({
	width = "128",
	height = "50",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 560 119"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M55.17 41.3L23.4 60.83L55.17 80.54L51.12 86.03L16.92 64.7V56.87L51.48 35.54L55.17 41.3ZM77.4548 73.16L72.5048 89H64.7648L85.0148 26.99H94.9148L115.075 89H106.975L102.025 73.16H77.4548ZM99.9548 66.68L89.7848 33.65L79.5248 66.68H99.9548ZM149.15 26C152.99 26 156.29 26.51 159.05 27.53C161.81 28.49 164.51 29.99 167.15 32.03L162.74 37.16C159.08 34.1 154.73 32.57 149.69 32.57C144.11 32.57 139.55 34.61 136.01 38.69C132.53 42.71 130.79 49.13 130.79 57.95C130.79 66.71 132.5 73.13 135.92 77.21C139.34 81.29 143.9 83.33 149.6 83.33C152.72 83.33 155.39 82.88 157.61 81.98C159.83 81.08 161.96 79.82 164 78.2L168.05 83.24C163.43 87.74 157.25 89.99 149.51 89.99C144.41 89.99 139.82 88.76 135.74 86.3C131.66 83.78 128.45 80.12 126.11 75.32C123.77 70.52 122.6 64.73 122.6 57.95C122.6 51.23 123.77 45.47 126.11 40.67C128.51 35.81 131.72 32.15 135.74 29.69C139.82 27.23 144.29 26 149.15 26ZM220.665 58.04C220.665 67.7 218.685 75.44 214.725 81.26C210.825 87.08 205.215 89.99 197.895 89.99C190.515 89.99 184.875 87.14 180.975 81.44C177.075 75.74 175.125 67.97 175.125 58.13C175.125 51.83 175.995 46.25 177.735 41.39C179.475 36.53 182.055 32.75 185.475 30.05C188.895 27.35 193.035 26 197.895 26C205.215 26 210.825 28.91 214.725 34.73C218.685 40.49 220.665 48.26 220.665 58.04ZM212.565 58.04C212.565 49.58 211.395 43.22 209.055 38.96C206.715 34.7 202.995 32.57 197.895 32.57C192.795 32.57 189.075 34.73 186.735 39.05C184.395 43.31 183.225 49.67 183.225 58.13C183.225 66.53 184.395 72.86 186.735 77.12C189.135 81.32 192.855 83.42 197.895 83.42C202.995 83.42 206.715 81.32 209.055 77.12C211.395 72.86 212.565 66.5 212.565 58.04ZM274.629 57.68C274.629 69.44 271.929 77.6 266.529 82.16C261.129 86.72 254.469 89 246.549 89H232.329V26.99H245.559C254.259 26.99 261.279 29.18 266.619 33.56C271.959 37.94 274.629 45.98 274.629 57.68ZM266.259 57.68C266.259 50.96 265.329 45.83 263.469 42.29C261.669 38.69 259.419 36.32 256.719 35.18C254.019 33.98 250.929 33.38 247.449 33.38H240.159V82.7H247.539C252.879 82.7 257.319 80.87 260.859 77.21C264.459 73.49 266.259 66.98 266.259 57.68ZM323.554 33.29H309.784V82.79H323.554V89H288.094V82.79H301.864V33.29H288.094V26.99H323.554V33.29ZM346.469 34.55C346.469 34.97 346.649 37.58 347.009 42.38C347.369 47.18 347.549 52.37 347.549 57.95V89H340.259V26.99H350.879L373.109 81.71L372.929 78.47C372.329 71.09 372.029 64.28 372.029 58.04V26.99H379.319V89H368.339L346.469 34.55ZM415.014 89.99C407.454 89.99 401.514 87.29 397.194 81.89C392.934 76.43 390.804 68.45 390.804 57.95C390.804 51.11 392.004 45.29 394.404 40.49C396.804 35.69 399.984 32.09 403.944 29.69C407.904 27.23 412.194 26 416.814 26C420.714 26 423.984 26.54 426.624 27.62C429.264 28.7 431.874 30.44 434.454 32.84L429.774 37.7C427.854 35.96 425.844 34.67 423.744 33.83C421.704 32.99 419.394 32.57 416.814 32.57C411.774 32.57 407.574 34.58 404.214 38.6C400.854 42.62 399.174 49.07 399.174 57.95C399.174 66.77 400.524 73.22 403.224 77.3C405.984 81.38 410.124 83.42 415.644 83.42C420.024 83.42 423.954 82.43 427.434 80.45V61.64H415.284L414.384 55.07H435.264V84.59C432.144 86.33 428.994 87.68 425.814 88.64C422.694 89.54 419.094 89.99 415.014 89.99ZM445.489 95.57L483.919 16.19L489.949 19.07L451.609 98.27L445.489 95.57ZM540.854 56.96V64.7L506.654 86.03L502.604 80.45L534.374 60.83L502.604 41.3L506.294 35.54L540.854 56.96Z"
			fill="black"
		/>
		<rect
			x="1.5"
			y="1.5"
			width="557"
			height="116"
			stroke="black"
			strokeWidth="3"
		/>
	</svg>
);
export const MyIconDark: React.FC<IconoProps> = ({
	width = "128",
	height = "50",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 560 119"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M55.17 41.3L23.4 60.83L55.17 80.54L51.12 86.03L16.92 64.7V56.87L51.48 35.54L55.17 41.3ZM77.4548 73.16L72.5048 89H64.7648L85.0148 26.99H94.9148L115.075 89H106.975L102.025 73.16H77.4548ZM99.9548 66.68L89.7848 33.65L79.5248 66.68H99.9548ZM149.15 26C152.99 26 156.29 26.51 159.05 27.53C161.81 28.49 164.51 29.99 167.15 32.03L162.74 37.16C159.08 34.1 154.73 32.57 149.69 32.57C144.11 32.57 139.55 34.61 136.01 38.69C132.53 42.71 130.79 49.13 130.79 57.95C130.79 66.71 132.5 73.13 135.92 77.21C139.34 81.29 143.9 83.33 149.6 83.33C152.72 83.33 155.39 82.88 157.61 81.98C159.83 81.08 161.96 79.82 164 78.2L168.05 83.24C163.43 87.74 157.25 89.99 149.51 89.99C144.41 89.99 139.82 88.76 135.74 86.3C131.66 83.78 128.45 80.12 126.11 75.32C123.77 70.52 122.6 64.73 122.6 57.95C122.6 51.23 123.77 45.47 126.11 40.67C128.51 35.81 131.72 32.15 135.74 29.69C139.82 27.23 144.29 26 149.15 26ZM220.665 58.04C220.665 67.7 218.685 75.44 214.725 81.26C210.825 87.08 205.215 89.99 197.895 89.99C190.515 89.99 184.875 87.14 180.975 81.44C177.075 75.74 175.125 67.97 175.125 58.13C175.125 51.83 175.995 46.25 177.735 41.39C179.475 36.53 182.055 32.75 185.475 30.05C188.895 27.35 193.035 26 197.895 26C205.215 26 210.825 28.91 214.725 34.73C218.685 40.49 220.665 48.26 220.665 58.04ZM212.565 58.04C212.565 49.58 211.395 43.22 209.055 38.96C206.715 34.7 202.995 32.57 197.895 32.57C192.795 32.57 189.075 34.73 186.735 39.05C184.395 43.31 183.225 49.67 183.225 58.13C183.225 66.53 184.395 72.86 186.735 77.12C189.135 81.32 192.855 83.42 197.895 83.42C202.995 83.42 206.715 81.32 209.055 77.12C211.395 72.86 212.565 66.5 212.565 58.04ZM274.629 57.68C274.629 69.44 271.929 77.6 266.529 82.16C261.129 86.72 254.469 89 246.549 89H232.329V26.99H245.559C254.259 26.99 261.279 29.18 266.619 33.56C271.959 37.94 274.629 45.98 274.629 57.68ZM266.259 57.68C266.259 50.96 265.329 45.83 263.469 42.29C261.669 38.69 259.419 36.32 256.719 35.18C254.019 33.98 250.929 33.38 247.449 33.38H240.159V82.7H247.539C252.879 82.7 257.319 80.87 260.859 77.21C264.459 73.49 266.259 66.98 266.259 57.68ZM323.554 33.29H309.784V82.79H323.554V89H288.094V82.79H301.864V33.29H288.094V26.99H323.554V33.29ZM346.469 34.55C346.469 34.97 346.649 37.58 347.009 42.38C347.369 47.18 347.549 52.37 347.549 57.95V89H340.259V26.99H350.879L373.109 81.71L372.929 78.47C372.329 71.09 372.029 64.28 372.029 58.04V26.99H379.319V89H368.339L346.469 34.55ZM415.014 89.99C407.454 89.99 401.514 87.29 397.194 81.89C392.934 76.43 390.804 68.45 390.804 57.95C390.804 51.11 392.004 45.29 394.404 40.49C396.804 35.69 399.984 32.09 403.944 29.69C407.904 27.23 412.194 26 416.814 26C420.714 26 423.984 26.54 426.624 27.62C429.264 28.7 431.874 30.44 434.454 32.84L429.774 37.7C427.854 35.96 425.844 34.67 423.744 33.83C421.704 32.99 419.394 32.57 416.814 32.57C411.774 32.57 407.574 34.58 404.214 38.6C400.854 42.62 399.174 49.07 399.174 57.95C399.174 66.77 400.524 73.22 403.224 77.3C405.984 81.38 410.124 83.42 415.644 83.42C420.024 83.42 423.954 82.43 427.434 80.45V61.64H415.284L414.384 55.07H435.264V84.59C432.144 86.33 428.994 87.68 425.814 88.64C422.694 89.54 419.094 89.99 415.014 89.99ZM445.489 95.57L483.919 16.19L489.949 19.07L451.609 98.27L445.489 95.57ZM540.854 56.96V64.7L506.654 86.03L502.604 80.45L534.374 60.83L502.604 41.3L506.294 35.54L540.854 56.96Z"
			fill="white"
		/>
		<rect
			x="1.5"
			y="1.5"
			width="557"
			height="116"
			stroke="white"
			strokeWidth="3"
		/>
	</svg>
);

export const MobileMenuIcon: React.FC<IconoProps> = () => (
	<svg
		className="w-6 h-6 text-gray-800 dark:text-gray-200"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path d="M4 6h16M4 12h16M4 18h16"></path>
	</svg>
);
export const CloseMobileMenu: React.FC<IconoProps> = () => (
	<svg
		className="w-6 h-6 text-gray-800 dark:text-gray-200"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path d="M6 18L18 6M6 6l12 12"></path>
	</svg>
);
