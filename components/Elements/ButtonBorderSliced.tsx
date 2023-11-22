// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IButtonBorderSliced} from "@/types/components";
import {initialTwo, fadeIn} from "@/animations/animations";

const ButtonBorderSliced: FC<IButtonBorderSliced> = ({
	title,
	fullWidth,
	tailwindColor,
}) => {
	let sgvOneColor: string;
	let sgvTwoColor: string;
	let textColor: string;
	let borderColor: string;
	let sgvOneColorHover: string;
	let sgvTwoColorHover: string;
	let textColorHover: string;
	let borderColorHover: string;
	let backgroundColorHover: string;
	let afterBackgroundColor: string;
	let beforeBackgroundColor: string;
	let afterBackgroundColorHover: string;
	let beforeBackgroundColorHover: string;

	switch (tailwindColor) {
		case "white":
			sgvOneColor = "#ffffff";
			sgvTwoColor = "#e4a002";
			sgvOneColorHover = "#000";
			sgvTwoColorHover = "#e4a002";
			textColor = "text-white";
			borderColor = "border-white";
			textColorHover = "hover:text-black";
			borderColorHover = "hover:border-white";
			backgroundColorHover = "hover:bg-white";
			afterBackgroundColor = "after:bg-white";
			beforeBackgroundColor = "before:bg-white";
			afterBackgroundColorHover = "hover:after:bg-white";
			beforeBackgroundColorHover = "hover:before:bg-white";
			break;
		case "lightGrey":
			sgvOneColor = "#000";
			sgvTwoColor = "#e4a002";
			sgvOneColorHover = "#ffffff";
			sgvTwoColorHover = "#ffffff";
			textColor = "text-pureBlack";
			borderColor = "border-pureBlack";
			textColorHover = "hover:text-white";
			borderColorHover = "hover:border-yellow-default";
			backgroundColorHover = "hover:bg-yellow-default";
			afterBackgroundColor = "after:bg-lightGreyTwo";
			beforeBackgroundColor = "before:bg-lightGreyTwo";
			afterBackgroundColorHover = "hover:after:bg-yellow-default";
			beforeBackgroundColorHover = "hover:before:bg-yellow-default";
			break;
		case "red-default":
			sgvOneColor = "#cb0007";
			sgvTwoColor = "#e4a002";
			sgvOneColorHover = "#ffffff";
			sgvTwoColorHover = "#e4a002";
			textColor = "text-red-default";
			borderColor = "border-red-default";
			textColorHover = "hover:text-white";
			borderColorHover = "hover:border-red-default";
			backgroundColorHover = "hover:bg-red-default";
			afterBackgroundColor = "after:bg-white";
			beforeBackgroundColor = "before:bg-white";
			afterBackgroundColorHover = "hover:after:bg-red-default";
			beforeBackgroundColorHover = "hover:before:bg-red-default";
			break;
		case "yellow-default":
			sgvOneColor = "#f6ad37";
			sgvTwoColor = "#f6ad37";
			sgvOneColorHover = "#ffffff";
			sgvTwoColorHover = "#ffffff";
			textColor = "text-yellow-default";
			textColorHover = "hover:text-white";
			borderColor = "border-yellow-default";
			borderColorHover = "hover:border-yellow-default";
			backgroundColorHover = "hover:bg-yellow-default";
			afterBackgroundColor = "after:bg-white";
			beforeBackgroundColor = "before:bg-white";
			afterBackgroundColorHover = "hover:after:bg-yellow-default";
			beforeBackgroundColorHover = "hover:before:bg-yellow-default";
			break;
		case "green-default":
			sgvOneColor = "#4d6c13";
			sgvTwoColor = "#4d6c13";
			sgvOneColorHover = "#ffffff";
			sgvTwoColorHover = "#ffffff";
			textColor = "text-green-default";
			textColorHover = "hover:text-white";
			borderColor = "border-green-default";
			borderColorHover = "hover:border-green-default";
			backgroundColorHover = "hover:bg-green-default";
			afterBackgroundColor = "after:bg-white";
			beforeBackgroundColor = "before:bg-white";
			afterBackgroundColorHover = "hover:after:bg-green-default";
			beforeBackgroundColorHover = "hover:before:bg-green-default";
			break;
		default:
			sgvOneColor = "#cb0007";
			sgvTwoColor = "#e4a002";
			sgvOneColorHover = "#ffffff";
			sgvTwoColorHover = "#e4a002";
			textColor = "text-red-default";
			borderColor = "border-red-default";
			textColorHover = "hover:text-white";
			borderColorHover = "hover:border-red-default";
			backgroundColorHover = "hover:bg-red-default";
			afterBackgroundColor = "after:bg-white";
			beforeBackgroundColor = "before:bg-white";
			afterBackgroundColorHover = "hover:after:bg-red-default";
			beforeBackgroundColorHover = "hover:before:bg-red-default";
			break;
	}
	return (
		<>
			<motion.button
				initial={initialTwo}
				whileInView={fadeIn}
				viewport={{once: true}}
				className={
					title
						? `flex items-center justify-center group mt-3 relative gap-3 px-6 py-3 font-semibold tracking-widest text-base ${
								fullWidth ? "w-full" : "w-fit"
						  } sm:mx-0 border-2 border-solid ${borderColor} ${backgroundColorHover} ${borderColorHover} transition-all ease-in-out duration-500 ${textColor} ${textColorHover} before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] ${beforeBackgroundColor} ${beforeBackgroundColorHover} after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] ${afterBackgroundColor} ${afterBackgroundColorHover}`
						: `hidden`
				}
			>
				<span>{title}</span>
				<span className="hidden group-hover:block">
					<svg
						height="35"
						width="30.237"
						viewBox="0 0 30.237 35"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g transform="translate(-4906.763 143)">
							<path
								d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
								transform="translate(4870 -143)"
								fill={sgvTwoColorHover}
							></path>
							<g transform="translate(4890.311 -1111.861)">
								<path
									d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
									transform="translate(0 0)"
									fill={sgvOneColorHover}
								></path>
							</g>
						</g>
					</svg>
				</span>
				<span className="block group-hover:hidden">
					<svg
						height="35"
						width="30.237"
						viewBox="0 0 30.237 35"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g transform="translate(-4906.763 143)">
							<path
								d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
								transform="translate(4870 -143)"
								fill={sgvTwoColor}
							></path>
							<g transform="translate(4890.311 -1111.861)">
								<path
									d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
									transform="translate(0 0)"
									fill={sgvOneColor}
								></path>
							</g>
						</g>
					</svg>
				</span>
			</motion.button>
		</>
	);
};

export default ButtonBorderSliced;
