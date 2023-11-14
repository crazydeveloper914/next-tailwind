// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IButtonBorderSliced} from "@/types/components";
import {initial, fadeInUp} from "@/animations/animations";

const ButtonBorderSliced: FC<IButtonBorderSliced> = ({
	title,
	tailwindColor,
}) => {
	let sgvColor: string;
	let textColor: string;
	let borderColor: string;
	let textColorHover: string;
	let borderColorHover: string;
	let backgroundColorHover: string;
	let afterBackgroundColorHover: string;
	let beforeBackgroundColorHover: string;

	switch (tailwindColor) {
		case "white":
			sgvColor = "#ffffff";
			textColor = "text-white";
			borderColor = "border-white";
			textColorHover = "hover:text-black";
			borderColorHover = "hover:border-white";
			backgroundColorHover = "hover:bg-white";
			afterBackgroundColorHover = "hover:after:bg-white";
			beforeBackgroundColorHover = "hover:before:bg-white";
			break;
		case "red-default":
			sgvColor = "#cb0007";
			textColor = "text-red-default";
			borderColor = "border-red-default";
			textColorHover = "hover:text-white";
			borderColorHover = "hover:border-red-default";
			backgroundColorHover = "hover:bg-red-default";
			afterBackgroundColorHover = "hover:after:bg-red-default";
			beforeBackgroundColorHover = "hover:before:bg-red-default";
			break;
		case "yellow-default":
			sgvColor = "#f6ad37";
			textColor = "text-yellow-default";
			textColorHover = "hover:text-white";
			borderColor = "border-yellow-default";
			borderColorHover = "hover:border-yellow-default";
			backgroundColorHover = "hover:bg-yellow-default";
			afterBackgroundColorHover = "hover:after:bg-yellow-default";
			beforeBackgroundColorHover = "hover:before:bg-yellow-default";
			break;
		case "green-default":
			sgvColor = "#4d6c13";
			textColor = "text-green-default";
			textColorHover = "hover:text-white";
			borderColor = "border-green-default";
			borderColorHover = "hover:border-green-default";
			backgroundColorHover = "hover:bg-green-default";
			afterBackgroundColorHover = "hover:after:bg-green-default";
			beforeBackgroundColorHover = "hover:before:bg-green-default";
			break;
		default:
			sgvColor = "#cb0007";
			textColor = "text-red-default";
			borderColor = "border-red-default";
			textColorHover = "hover:text-white";
			borderColorHover = "hover:border-red-default";
			backgroundColorHover = "hover:bg-red-default";
			afterBackgroundColorHover = "hover:after:bg-red-default";
			beforeBackgroundColorHover = "hover:before:bg-red-default";
			break;
	}
	return (
		<>
			<motion.button
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
				className={
					title
						? `flex items-center justify-center group mt-3 relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit sm:mx-0 border-2 border-solid ${borderColor} ${backgroundColorHover} ${borderColorHover} transition-all ease-in-out duration-500 ${textColor} ${textColorHover} before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white ${beforeBackgroundColorHover} after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white ${afterBackgroundColorHover}`
						: `hidden`
				}
			>
				<span>{title}</span>
				<span className="hidden group-hover:block">
					<svg
						fill="none"
						width="800px"
						height="800px"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="w-[25px] h-[25px] object-center object-contain"
					>
						<path
							d="M15.0377 6.34326L13.6268 7.76078L16.897 11.0157L3.29199 11.0294L3.294 13.0294L16.8618 13.0158L13.6466 16.246L15.0641 17.6569L20.7078 11.9869L15.0377 6.34326Z"
							fill="#ffffff"
						/>
					</svg>
				</span>
				<span className="block group-hover:hidden">
					<svg
						fill="none"
						width="800px"
						height="800px"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="w-[25px] h-[25px] object-center object-contain"
					>
						<path
							d="M15.0377 6.34326L13.6268 7.76078L16.897 11.0157L3.29199 11.0294L3.294 13.0294L16.8618 13.0158L13.6466 16.246L15.0641 17.6569L20.7078 11.9869L15.0377 6.34326Z"
							fill={sgvColor}
						/>
					</svg>
				</span>
			</motion.button>
		</>
	);
};

export default ButtonBorderSliced;
