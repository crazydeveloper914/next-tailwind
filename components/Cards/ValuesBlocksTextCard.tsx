// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import fadeInUp, {fadeIn, initial, initialTwo} from "@/animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";
import {IValuesBlocksTextCard} from "@/types/components";

const ValuesBlocksTextCard: FC<IValuesBlocksTextCard> = ({
	title,
	paragraph,
	buttonLink,
	displayButton,
}) => {
	return (
		<>
			<div>
				<motion.h2
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className="mb-4 text-center font-extrabold leading-tight max-w-2xl lg:text-left text-4xl text-black"
				>
					{title}
				</motion.h2>
				<Paragraph
					content={paragraph}
					tailwindStyling="text-darkGrey leading-[1.75rem] text-base sm:text-paragraph text-center lg:text-left"
				/>
			</div>
			<Link
				href={buttonLink?.url ? buttonLink?.url : `/`}
				target={buttonLink?.target}
				className={displayButton ? "block" : "hidden"}
			>
				<motion.button
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={
						buttonLink?.url
							? `flex items-center justify-center group mt-3 relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit sm:mx-0 border-2 border-solid border-red-default hover:bg-red-default hover:border-red-default transition-all ease-in-out duration-500 text-red-default hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-red-default after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-red-default`
							: `hidden`
					}
				>
					<span>{buttonLink?.title}</span>
					<span className="hidden group-hover:block">
						<svg
							width="800px"
							height="800px"
							viewBox="0 0 24 24"
							fill="none"
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
							width="800px"
							height="800px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-[25px] h-[25px] object-center object-contain"
						>
							<path
								d="M15.0377 6.34326L13.6268 7.76078L16.897 11.0157L3.29199 11.0294L3.294 13.0294L16.8618 13.0158L13.6466 16.246L15.0641 17.6569L20.7078 11.9869L15.0377 6.34326Z"
								fill="#cb0007"
							/>
						</svg>
					</span>
				</motion.button>
			</Link>
		</>
	);
};

export default ValuesBlocksTextCard;
