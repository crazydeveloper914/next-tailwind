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
	let sgvColor: string;
	let textColor: string;
	let borderColor: string;
	let sgvColorHover: string;
	let textColorHover: string;
	let borderColorHover: string;
	let backgroundColorHover: string;
	let afterBackgroundColor: string;
	let beforeBackgroundColor: string;
	let afterBackgroundColorHover: string;
	let beforeBackgroundColorHover: string;

	switch (tailwindColor) {
		case "white":
			sgvColor = "#ffffff";
			sgvColorHover = "#000";
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
			sgvColor = "#000";
			sgvColorHover = "#ffffff";
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
			sgvColor = "#cb0007";
			sgvColorHover = "#ffffff";
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
			sgvColor = "#f6ad37";
			sgvColorHover = "#ffffff";
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
			sgvColor = "#4d6c13";
			sgvColorHover = "#ffffff";
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
			sgvColor = "#cb0007";
			sgvColorHover = "#ffffff";
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
						fill="none"
						width="800px"
						height="800px"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="w-[25px] h-[25px] object-center object-contain"
					>
						<path
							d="M15.0377 6.34326L13.6268 7.76078L16.897 11.0157L3.29199 11.0294L3.294 13.0294L16.8618 13.0158L13.6466 16.246L15.0641 17.6569L20.7078 11.9869L15.0377 6.34326Z"
							fill={sgvColorHover}
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
